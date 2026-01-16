const fs = require('fs');
const path = require('path');

const VIDEO_WORKER_FILE_NAME = 'video_m.min.js';
const AUDIO_WORKER_FILE_NAME = 'js_audio_process.min.js';
const JS_MEDIA_FILE_NAME = 'js_media.min.js';
const WEBCLIENT_SDK_NAME = path.join(__dirname, 'dist', 'lib', 'av');

function getWasmVersion() {
  try {
    const wasmVersionList = [
      { type: 'audio', file: AUDIO_WORKER_FILE_NAME },
      { type: 'video', file: VIDEO_WORKER_FILE_NAME },
    ]
      .map((item) => {
        const tmpFilePath = path.join(WEBCLIENT_SDK_NAME, item.file);
        console.log(`${item.type}: ${tmpFilePath}`);
        const content = fs.readFileSync(tmpFilePath, { encoding: 'utf-8' });
        const match = content.match(/instantiateCachedURL\((\d+)/);
        const version = match ? match[1] : 'unknown';
        return {
          type: item.type,
          version,
        };
      })
      .reduce((prev, current) => {
        return `${prev}${prev ? ';' : ''}${current.type}:${current.version}`;
      }, '');
    return wasmVersionList;
  } catch (e) {
    console.error(e);
  }
  return null;
}

function getJsMediaVersion() {
  try {
    const content = fs.readFileSync(
      path.join(WEBCLIENT_SDK_NAME, JS_MEDIA_FILE_NAME),
      {
        encoding: 'utf-8',
        flag: 'r',
      },
    );
    
    // Regex to extract all three parts from pattern like: o="15.0.13713",a="Web-Media-EP-6.6.10-WSDK-5.0.2-Patch",n="6.6.10."
    const match = content.match(
      /o="(\d+\.\d+\.\d+)",a="([\w\d.-]+)",n="([\d.]+)"/,
    );
    
    if (match) {
      const jsmediaVersion = match[1]; // "15.0.13713"
      const description = match[2]; // "Web-Media-EP-6.6.10-WSDK-5.0.2-Patch"
      const finalVersion = match[3].replace(/\.$/, ''); // "6.6.10"

      return {
        jsmediaVersion,
        description,
        finalVersion,
      };
    }

    return null;
  } catch (e) {
    console.error('Error reading jsmedia version:', e);
    return null;
  }
}

module.exports = { getWasmVersion, getJsMediaVersion };

console.log('getWasmVersion', getWasmVersion());
console.log('getJsMediaVersion', getJsMediaVersion());
