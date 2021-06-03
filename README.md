# Zoom Web SDK
Use of this SDK is subject to our [Terms of Use](https://zoom.us/docs/en-us/zoom_api_license_and_tou.html)

## Chrome 92 Breaking Changes
When Chrome 92 releases on July 20th, the Chrome `SharedArrayBuffer` will only work with cross-origin isolated pages. This will affect any previously configured Web SDK clients. Therefore, you must reconfigure your web server settings and upgrade to the Web Client SDK version 1.9.5 if you want to continue using this feature. 

### To reconfigure your web server
1. Apply `SharedArrayBuffers` [origintrials](https://developer.chrome.com/origintrials/#/trials/active) for your domain. This temporary extension works until the Chrome 94 release.
2. Enable cross-origin isolation for the Web SDK.
3. Update to v1.9.5 or higher.

### See the Web SDK updates for Chrome 92 [Announcement](https://marketplace.zoom.us/docs/guides/stay-up-to-date/announcements) for details.

## Open Source Software (OSS) Attribution
Starting from version 1.9.1, an OSS attribution file (oss_attribution.txt) will be provided in each release. Some licenses for OSS contained in our products give you the right to access the source code under said license. You may obtain a copy of source code for the relevant OSS via the following link: https://zoom.us/opensource/source. Please obtain independent legal advice or counsel to determine your responsibility to make source code available under any specific OSS project.”

## About
The Zoom Web SDK NPM package is for implementing the Zoom Web SDK with a frontend framework like React or Angular that uses webpack / babel.

- `node_modules/@zoomus/websdk/dist/lib/`

## Installation
In your frontend project, install the Web SDK:

`$ npm install @zoomus/websdk --save`

## Usage
In the component file where you want to use the Web SDK, import `ZoomMtg` and call the `preLoadWasm()` and `prepareJssdk()` functions.

```js
import { ZoomMtg } from '@zoomus/websdk';

ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();
```

NOTE: The following directory (already in node_modules) must be accessible in your url path:

- `node_modules/@zoomus/websdk/dist/lib/`

Or, you can set a custom path to the Web SDK's lib directory using:

```js
ZoomMtg.setZoomJSLib('http://localhost:9999/custom/path/to/lib/', '/av')
```

NOTE: The following files (already in node_modules) must be globally accessible (equivalent of link and script tag in index.html):

- `node_modules/@zoomus/websdk/dist/css/bootstrap.css`
- `node_modules/@zoomus/websdk/dist/css/react-select.css`

Set the config variables (reference below):

```js
// setup your signautre endpoint here: https://github.com/zoom/websdk-sample-signature-node.js
var signatureEndpoint = 'http://localhost:4000'
var apiKey = 'JWT_API_KEY'
var meetingNumber = 123456789
var role = 0
var leaveUrl = 'http://localhost:9999'
var userName = 'WebSDK'
var userEmail = ''
var passWord = ''
```

Config variables reference:

| Variable                   | Description |
| -----------------------|-------------|
| signatureEndpoint          | Required, the endpoint url that returns a signature. [Get a signature endpoint here.](https://github.com/zoom/websdk-sample-signature-node.js) |
| apiKey                   | Required, your Zoom JWT App API Key. |
| meetingNumber                   | The Zoom meeting / webinar number. |
| role                   | Required, 0 to join the meeting / webinar, 1 to start the meeting. |
| leaveUrl                   | Required, the URL the user is taken to once the meeting is over. |
| userName                   | Required, A name for the user joining / starting the meeting / webinar. |
| userEmail                   | Optional, the user joining / starting the meeting / webinar. |
| passWord                   | Optional, meeting password. Leave as empty string if the meeting does not require a password. |

Generate the meeting signature to authenticate, [instructions here](https://github.com/zoom/websdk-sample-signature-node.js).

```js
var signature = 'eHUzSlBhQV9SSlcyLTlsNV9IQWFMQS4xMjM0NTY3ODkuMTU4MzE2OTUzODc3My4wLkJMNEtiM3FINGx5ZzA1MUZtbGJOcGtPRnlFQS9lQUR2bGllVzJNNGZJeWs9'
```

Then init, and join the meeting.

```js
ZoomMtg.init({
  leaveUrl: leaveUrl,
  isSupportAV: true,
  success: (success) => {
    console.log(success)

    ZoomMtg.join({
      signature: signature,
      meetingNumber: meetingNumber,
      userName: userName,
      apiKey: apiKey,
      userEmail: userEmail,
      passWord: passWord,
      success: (success) => {
        console.log(success)
      },
      error: (error) => {
        console.log(error)
      }
    })

  },
  error: (error) => {
    console.log(error)
  }
})
```

## Sample App
Checkout the Zoom [Web SDK Sample App](https://github.com/zoom/sample-app-web), and the [Simple Signature Setup Sample App](https://github.com/zoom/websdk-sample-signature-node.js).

## Need help?

If you're looking for help, try [Developer Support](https://devsupport.zoom.us) or our [Developer Forum](https://devforum.zoom.us). Priority support is also available with [Premier Developer Support](https://zoom.us/docs/en-us/developer-support-plans.html) plans.
