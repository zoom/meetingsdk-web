# Zoom Web SDK
Use of this SDK is subject to our [Terms of Use](https://zoom.us/docs/en-us/zoom_api_license_and_tou.html)

## Open Source Software (OSS) Attribution
Starting from version 1.9.1, an OSS attribution file (oss_attribution.txt) will be provided in each release. Some licenses for OSS contained in our products give you the right to access the source code under said license. You may obtain a copy of source code for the relevant OSS via the following link: https://zoom.us/opensource/source. Please obtain independent legal advice or counsel to determine your responsibility to make source code available under any specific OSS project.

## About
The Zoom Web Meeting SDK NPM package is for implementing the Zoom Meeting Web SDK with a frontend framework like React or Angular that uses webpack / babel.

There are now two views to choose from, [Component](#use-component-view), and [Client](#use-client-view).

- The new [Component View](#use-component-view), allows for an easier setup and more flexibility.
- The existing [Client View](#use-client-view) mirrors the [Zoom Web Client](https://support.zoom.us/hc/en-us/articles/214629443-Zoom-Web-Client).

NOTE: Please read [how to improve Web SDK performance in Chrome](https://marketplace.zoom.us/docs/sdk/overview/improve-performance).

## Installation
In your frontend project, install the Web SDK:

`$ npm install @zoomus/websdk --save`

## Use Component View

### Usage

In the component file where you want to use the Web Meeting SDK, import `ZoomMtgEmbedded` and create the client.

```js
import ZoomMtgEmbedded from "@zoomus/websdk/embedded";

const client = ZoomMtgEmbedded.createClient();
```

In the HTML file, set an id attribute on the HTML element where you want to render the Web Meeting SDK. It will be hidden until you start or join a meeting.

```html
<div id=”meetingSDKElement”>
   <!-- Zoom Meeting SDK Rendered Here -->
</div>
```

Back in the JavaScript file, init the SDK with the HTML element above:

```js
let meetingSDKElement = document.getElementById('meetingSDKElement');

client.init({
  debug: true,
  zoomAppRoot: meetingSDKElement,
  language: 'en-US',
  customize: {
    meetingInfo: ['topic', 'host', 'mn', 'pwd', 'telPwd', 'invite', 'participant', 'dc', 'enctype'],
    toolbar: {
      buttons: [
        {
          text: 'Custom Button',
          className: 'CustomButton',
          onClick: () => {
            console.log('custom button');
          }
        }
      ]
    }
  }
});
```

Here are the required properties for the `client.join()` function. You can get the Meeting Number and password from the [Zoom Meeting APIs](https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meetingcreate).

| Parameter  | Description  |
|---|---|
| `apiKey`  | Required, your Zoom JWT App API Key.  |
| `signature` | Required, your signature. [Instructions here](https://github.com/zoom/websdk-sample-signature-node.js). |
| `meetingNumber`  | Required, the Zoom Meeting number.  |
| `password`  | Requried, leave as empty string if the meeting only requires the waiting room.  |
| `userName`  | Required, the name of the user starting or joining the meeting.  |
| `userEmail`  | Optional, the email of the user starting or joining the meeting.  |

Then, join the meeting.

```js
client.join({
	apiKey: apiKey,
	signature: signature,
	meetingNumber: meetingNumber,
	password: password,
	userName: userName
})
```

For the full list of features and event listeners, as well as additional guides, please see our [Meeting SDK docs](https://marketplace.zoom.us/docs/sdk/native-sdks/web).

## Use Client View

### Usage
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

For the full list of features and event listeners, as well as additional guides, please see our [Meeting SDK docs](https://marketplace.zoom.us/docs/sdk/native-sdks/web).

## Sample App
Checkout the Zoom [Web SDK Sample App](https://github.com/zoom/sample-app-web), and the [Simple Signature Setup Sample App](https://github.com/zoom/websdk-sample-signature-node.js).


## Need help?

If you're looking for help, try [Developer Support](https://devsupport.zoom.us) or our [Developer Forum](https://devforum.zoom.us). Priority support is also available with [Premier Developer Support](https://zoom.us/docs/en-us/developer-support-plans.html) plans.