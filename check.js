const fs = require('fs');

const VIDEO_WORKER_FILE_NAME = 'video_m.min.js';
const AUDIO_WORKER_FILE_NAME = 'js_audio_process.min.js';
const JS_MEDIA_FILE_NAME = 'js_media.min.js';
const WEBCLIENT_SDK_NAME = './dist/lib/av';
const INDEX_JS_PATH = './dist/zoomus-websdk.umd.min.js';

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
    
    // Regex to extract all three parts from pattern like: o="15.0.13713",a="Web-Media-EP-6.6.10-WSDK-5.0.2-Patch",n="6.6.10."
    const match = content.match(/o="(\d+\.\d+\.\d+)",a="([\w\d.-]+)",n="([\d.]+)"/);
    
    if (match) {
      const jsmediaVersion = match[1]; // "15.0.13713"
      const description = match[2];    // "Web-Media-EP-6.6.10-WSDK-5.0.2-Patch"
      const finalVersion = match[3].replace(/.$/g, '');   // "6.6.10"
      
      return {
        jsmediaVersion,
        description,
        finalVersion
      };
    }
    
    return null;
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

    if (hasZoomGov) {
      console.log('source.zoomgov.com');
    }
    
    return {
      hasZoomUs: !hasZoomGov,
      hasZoomGov,
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