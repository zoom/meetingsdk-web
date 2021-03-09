# Zoom Web SDK
## Please note that as of January 10th, all older versions of the Web SDK (versions 1.8.3 and below) will no longer have computer audio functionality within meetings. Please upgrade to version 1.8.5 or above to avoid service disruption.

## Starting from version 1.9.1, an open source software (OSS) attribution file (oss_attribution.txt) will be provided in each release. Some licenses for OSS contained in our products give you the right to access the source code under said license. You may obtain a copy of source code for the relevant OSS via the following link: https://zoom.us/opensource/source. Please obtain independent legal advice or counsel to determine your responsibility to make source code available under any specific OSS project.”

The Zoom Web SDK NPM package is for implementing the Zoom Web SDK with a frontend framework like React or Angular that uses webpack / babel.

- `node_modules/@zoomus/websdk/dist/lib/`

### Upgrading from 1.8.3 to 1.8.5

Since we replaced jQuery with Axios, you will need to change the following line.

default [en-US.json](https://source.zoom.us/1.8.5/lib/lang/en-US.json)
```
$.i18n -> ZoomMtg.i18n

case 1: load en-US, jp-JP, zh-CN, but use jp-JP by default

ZoomMtg.i18n.load('en-US');
ZoomMtg.i18n.load('jp-JP');
ZoomMtg.i18n.load('zh-CN');
ZoomMtg.i18n.reload('jp-JP');

case 2: only load jp-JP
ZoomMtg.i18n.load('jp-JP');
ZoomMtg.i18n.reload('jp-JP');

case 3: load youself json file

ZoomMtg.i18n.load('you jason url', 'you-lang-name');
ZoomMtg.i18n.reload('you-lang-name');

other: if you joined meeting and want change language, you need add another api
ZoomMtg.reRender({lang: 'zoom support language or you-lang-name' });
```

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
- `node_modules/jquery/dist/jquery.min.js`

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
| meetingNumber                   | The Zoom Meeting / webinar number. |
| role                   | Required, 0 to join the meeting / webinar, 1 to start the meeting. |
| leaveUrl                   | Required, the url the user is taken to once the meeting is over. |
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

## Need Support?
The first place to look for help is on our [Developer Forum](https://devforum.zoom.us/), where Zoom Marketplace Developers can ask questions for public answers.

If you can’t find the answer in the Developer Forum or your request requires sensitive information to be relayed, please email us at developersupport@zoom.us.
