# Zoom Web SDK
## Important Notices: 
### 1) It is strongly recommended to upgrade to version 1.7.7 before May 30th. Otherwise version 1.7.6 and below will no longer be operational. Using Web SDK 1.7.6 or below you will be able to join meetings but you will not be able to access audio, video, screen sharing, chat, or closed caption. 
### 2) As of version 1.7.9, we will be including reCaptcha feature for joining meetings, please ensure that your application is running on ports 80 or 443


The Zoom Web SDK NPM package is for implementing the Zoom Web SDK with a frontend framework like React or Angular that uses webpack / babel.

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
