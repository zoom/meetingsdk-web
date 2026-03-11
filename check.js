const fs = require('fs');

const VIDEO_WORKER_FILE_NAME = 'video_m.min.js';
const AUDIO_WORKER_FILE_NAME = 'js_audio_process.min.js';
const JS_MEDIA_FILE_NAME = 'js_media.min.js';
const WEBCLIENT_SDK_NAME = './dist/lib/av';
const INDEX_JS_PATH = './dist/zoomus-websdk.umd.min.js';

function stripTrailingDots(value) {
  return typeof value === 'string' ? value.replace(/\.+$/g, '') : value;
}

function getWasmVersion() {
  try {
    const WasmVersionList = [
      { type: 'audio', file: AUDIO_WORKER_FILE_NAME },
      { type: 'video', file: VIDEO_WORKER_FILE_NAME },
    ]
      .map((item) => {
        const tmpFilePath = `${WEBCLIENT_SDK_NAME}/${item.file}`;
        console.log(`${item.type}: ${tmpFilePath}`);
        const content = fs.readFileSync(tmpFilePath, {
          encoding: 'utf-8',
          flag: 'r',
        });
        // const [, version] = content.match(/instantiateCachedURL\((\d+)/);
        return {
          type: item.type,
          version: "0",
        };
      })
      .reduce((prev, current) => {
        return `${prev}${prev ? ';' : ''}${current.type}:${current.version}`;
      }, '');
      return  WasmVersionList;
  } catch (e) {
    console.error(e);
  }
  return null;
}

function getJsMediaVersion() {
  try {
    const content = fs.readFileSync(
      `${WEBCLIENT_SDK_NAME}/${JS_MEDIA_FILE_NAME}`,
      {
        encoding: 'utf-8',
        flag: 'r',
      },
    );

    const anchor = 'Web-Media-';
    const anchorIdx = content.indexOf(anchor);
    const snippet =
      anchorIdx >= 0
        ? content.slice(Math.max(0, anchorIdx - 100), Math.min(content.length, anchorIdx + 100))
        : content;

    const groups = [];
    const reQuoted = /"([^"\\]*(?:\\.[^"\\]*)*)"/g;
    let match;

    while ((match = reQuoted.exec(snippet))) {
      groups.push(match[1]);
    }

    const anchorGroupIdx = groups.findIndex(
      (value) => typeof value === 'string' && value.includes(anchor),
    );

    if (anchorGroupIdx < 0) {
      return { jsmediaVersion: '0', description: '0', finalVersion: '0' };
    }

    const description = groups[anchorGroupIdx] ?? '0';
    const before = groups[anchorGroupIdx - 1] ?? '0';
    const after = groups[anchorGroupIdx + 1] ?? '0';

    let buildBeforeAnchor = null;
    for (let i = anchorGroupIdx - 1; i >= 0; i -= 1) {
      const value = groups[i];
      if (typeof value === 'string' && /^\d{3,}$/.test(value)) {
        buildBeforeAnchor = value;
        break;
      }
    }

    const finalVersionRaw =
      typeof after === 'string' && after.endsWith('.') && buildBeforeAnchor
        ? `${after}${buildBeforeAnchor}`
        : after;

    return {
      jsmediaVersion: stripTrailingDots(before),
      description,
      finalVersion: stripTrailingDots(finalVersionRaw),
    };
  } catch (e) {
    console.error('Error reading jsmedia version:', e);
    return null;
  }
}

function checkSourceUrl() {
  try {
    const content = fs.readFileSync(INDEX_JS_PATH, {
      encoding: 'utf-8',
      flag: 'r',
    });

    const hasZoomGov = content.includes('source.zoomgov.com');
    const hasZoomMil = content.includes("source.zoomgov.mil");

    if (hasZoomGov) {
      console.log('source.zoomgov.com');
    }
    if (hasZoomMil) {
      console.log('source.zoomgov.mil');
    }

    return {
      hasZoomUs: !hasZoomGov && !hasZoomMil,
      hasZoomGov,
      hasZoomMil,
    };
  } catch (e) {
    console.error('Error checking source URL:', e);
    return null;
  }
}

module.exports = { getWasmVersion, getJsMediaVersion, checkSourceUrl };

console.log("getWasmVersion", getWasmVersion());
console.log("getJsMediaVersion", getJsMediaVersion());

const sourceUrlResult = checkSourceUrl();
console.log("checkSourceUrl", sourceUrlResult);

// Exit with error if source.zoom.us is not found
if (!sourceUrlResult || !sourceUrlResult.hasZoomUs) {
  console.error('ERROR: source.zoom.us not found in dist/index.js');
  process.exit(1);
}
