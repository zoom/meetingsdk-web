# Zoom Meeting SDK for Web

Use of this SDK is subject to our [Terms of Use](https://zoom.us/docs/en-us/zoom_api_license_and_tou.html)

The [Zoom Meeting SDK](https://marketplace.zoom.us/docs/sdk/native-sdks/web) embeds the Zoom Meeting and Webinar experience in a website through a highly optimized WebAssembly module.

## Installation

In your frontend project, install the Meeting SDK:

```bash
$ npm install @zoomus/websdk --save
```

There are two views to choose from, [Component View](#usage-component-view), and [Client View](#usage-client-view).

## Usage - Component View

![Zoom Meeting SDK Component View](https://marketplace.zoom.us/docs/images/sdk/msdk-web-component-view.gif)

> The Component View provides the option to display the Meeting SDK in components on your page. This allows for a more flexible design.

In the component file where you want to use the Meeting SDK, import `ZoomMtgEmbedded` and create the client.

```js
import ZoomMtgEmbedded from "@zoomus/websdk/embedded"

const client = ZoomMtgEmbedded.createClient()
```

In the HTML file, set an id attribute on the HTML element where you want to render the Meeting SDK. It will be hidden until you start or join a meeting or webinar.

```html
<div id="meetingSDKElement">
   <!-- Zoom Meeting SDK Rendered Here -->
</div>
```

Back in the component file, init the Meeting SDK with the HTML element above:

```js
let meetingSDKElement = document.getElementById('meetingSDKElement')

client.init({ zoomAppRoot: meetingSDKElement, language: 'en-US' })
```

Now we will start or join the meeting or webinar. Here are the required properties for the `client.join()` function. You can get the Meeting or Webinar number and passcode from the [Zoom APIs](https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meetingcreate).

| Key  | 	Value Description  |
|---|---|
| `sdkKey`  | Required, your SDK Key.  |
| `signature` | Required, your [SDK JWT](https://marketplace.zoom.us/docs/sdk/native-sdks/auth). |
| `meetingNumber`  | Required, the Zoom Meeting or Webinar Number.  |
| `password`  | Required, leave as empty string if the Meeting or Webinar only requires the waiting room.  |
| `userName`  | Required, the name of the user starting or joining the Meeting or Webinar.  |
| `userEmail`  | Required for Webinar, optional for Meeting, required for Meeting and Webinar if registration is required. The email of the user starting or joining the Meeting or Webinar.  |
| `tk`  | Required if your Meeting or Webinar requires [registration](https://support.zoom.us/hc/en-us/articles/360054446052-Managing-meeting-and-webinar-registration). The registrant's token. |
| `zak`  | Required if you are starting a Meeting or Webinar. The host's [Zoom Access Key (ZAK)](https://marketplace.zoom.us/docs/sdk/native-sdks/auth#get-a-users-zak-token).  |

Then, start or join the meeting or webinar.

```js
client.join({
   sdkKey: sdkKey,
   signature: signature,
   meetingNumber: meetingNumber,
   password: password,
   userName: userName
})
```

For the full list of features and event listeners, as well as additional guides, see our [Meeting SDK docs](https://marketplace.zoom.us/docs/sdk/native-sdks/web/component-view).

## Usage - Client View

![Zoom Meeting SDK Client View](https://marketplace.zoom.us/docs/images/sdk/msdk-web-client-view.gif)

> The Client View provides the option to display the Meeting SDK as a full page. This allows for a familiar Zoom Meeting experience because the Client View is the same as the [Zoom Web Client](https://support.zoom.us/hc/en-us/articles/214629443-Zoom-Web-Client), except it lives inside your own web page.

In the component file where you want to use the Meeting SDK, import `ZoomMtg` and call the `preLoadWasm()`, `prepareJssdk()`, and `setZoomJSLib()` functions.

```js
import { ZoomMtg } from '@zoomus/websdk'

ZoomMtg.preLoadWasm()
ZoomMtg.prepareJssdk()

// loads language files, also passes any error messages to the ui
ZoomMtg.i18n.load('en-US')
ZoomMtg.i18n.reload('en-US')

ZoomMtg.setZoomJSLib('https://source.zoom.us/{VERSION_NUMBER}/lib', '/av')
```

> When imported, the Meeting SDK adds new elements to the DOM to handle client overlays and accessibility elements. To manage or manipulate this DOM element within your app [see this guide](https://marketplace.zoom.us/docs/sdk/native-sdks/web/client-view/import#about-appended-dom-elements).

Add the following styles to the HTML page you want the Meeting SDK to live on, or `index.html` if you are using a single page app framework.

```html
<head>
  <!-- For Client View -->
  <link type="text/css" rel="stylesheet" href="https://source.zoom.us/{VERSION_NUMBER}/css/bootstrap.css" />
  <link type="text/css" rel="stylesheet" href="https://source.zoom.us/{VERSION_NUMBER}/css/react-select.css" />
</head>
```

> Replace `{VERSION_NUMBER}` in the code above with the [latest version number](https://marketplace.zoom.us/docs/changelog#labels/meeting-sdk-web).

Back in the component file we will init and start or join the meeting or webinar. Here are the required properties for the `ZoomMtg.init()` function.

| Key  | 	Value Description  |
|---|---|
| `leaveUrl` |  Required, the URL the participant is taken to once they leave or when the meeting ends. |

Here are the required properties for the `ZoomMtg.join()` function. You can get the Meeting or Webinar number and passcode from the [Zoom APIs](https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meetingcreate).

| Key  | 	Value Description  |
|---|---|
| `sdkKey`  | Required, your SDK Key.  |
| `signature` | Required, your [SDK JWT](https://marketplace.zoom.us/docs/sdk/native-sdks/auth). |
| `meetingNumber`  | Required, the Zoom Meeting or Webinar Number.  |
| `passWord`  | Required, leave as empty string if the Meeting or Webinar only requires the waiting room.  |
| `userName`  | Required, the name of the user starting or joining the Meeting or Webinar.  |
| `userEmail`  | Required for Webinar, optional for Meeting, required for Meeting and Webinar if registration is required. The email of the user starting or joining the Meeting or Webinar.  |
| `tk`  | Required if your Meeting or Webinar requires [registration](https://support.zoom.us/hc/en-us/articles/360054446052-Managing-meeting-and-webinar-registration). The registrant's token. |
| `zak`  | Required if you are starting a Meeting or Webinar. The host's [Zoom Access Key (ZAK)](https://marketplace.zoom.us/docs/sdk/native-sdks/auth#get-a-users-zak-token).  |

Then, init, and start or join the meeting or webinar.

```js
ZoomMtg.init({
  leaveUrl: leaveUrl,
  success: (success) => {
    console.log(success)

    ZoomMtg.join({
      signature: signature,
      meetingNumber: meetingNumber,
      userName: userName,
      sdkKey: sdkKey,
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

For the full list of features and event listeners, as well as additional guides, see our [Meeting SDK docs](https://marketplace.zoom.us/docs/sdk/native-sdks/web/client-view).

## Sample Apps

- [Meeting SDK Web Sample](https://github.com/zoom/meetingsdk-web-sample)
- [Meeting SDK Angular Sample](https://github.com/zoom/meetingsdk-angular-sample)
- [Meeing SDK React Sample](https://github.com/zoom/meetingsdk-react-sample)
- [Meeting SDK Vue.js Sample](https://github.com/zoom/meetingsdk-vuejs-sample)
- [Meeting SDK JavaScript Sample](https://github.com/zoom/meetingsdk-javascript-sample)
- [Meeting SDK Auth Sample (Node.js)](https://github.com/zoom/meetingsdk-sample-signature-node.js)
- [Webhook Sample (Node.js)](https://github.com/zoom/webhook-sample-node.js)

## Need help?

If you're looking for help, try [Developer Support](https://devsupport.zoom.us) or our [Developer Forum](https://devforum.zoom.us). Priority support is also available with [Premier Developer Support](https://zoom.us/docs/en-us/developer-support-plans.html) plans.
