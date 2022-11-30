/**
 * initArgs
 */
 declare let initArgs: {
  /**
   * debug: default: false, optional. Turns on debug mode to print logs in the browser console.
   */
  debug?: boolean; //optional
  /**
   * leaveUrl: Required. The URL to post after the user leaves the meeting. Example: “http://www.zoom.us”
   */
  leaveUrl: string; //required
  /**
   * webEndpoint: optional. Web domain option for Zoom PSO environment.
   */
  webEndpoint?: string; //optional
  /**
   * showMeetingHeader: default: true, optional. Shows or hides the meeting header, including the meeting number and topic.
   */
  showMeetingHeader?: boolean; //optional
  /**
   * disableInvite: default: false, optional. Enables or disables the invite function.
   */
  disableInvite?: boolean; //optional
  /**
   * disableCallOut: default: false, optional. Enables or disables the call out function.
   */
  disableCallOut?: boolean; //optional
  /**
   * disableRecord: default: false, optional. Enables or disables the call out function.
   */
  disableRecord?: boolean; //optional
  /**
   * disableJoinAudio: default: false, optional. Enables or disables the join audio function.
   */
  disableJoinAudio?: boolean; //optional
  /**
   * audioPanelAlwaysOpen:  default: false, optional. Sets the default state of the audio panel on join. Always open or closed.
   */
  audioPanelAlwaysOpen?: boolean; //optional
  /**
   * showPureSharingContent, default: false, optional. Prevents elements from covering sharing content when show is true.
   */
  showPureSharingContent?: boolean; //optional
  /**
   * isSupportAV: default: true, optional. Enables or disables the audio and video features.
   */
  isSupportAV?: boolean; //optional
  /**
   * isSupportChat: default: true, optional. Enables or disables the chat feature.
   */
  isSupportChat?: boolean; //optional
  /**
   * isSupportQA: default: true, optional. Enables or disables the webinar Q&A feature.
   */
  isSupportQA?: boolean; //optional
  /**
   * isSupportCC: default: true, optional. Enables or disables the meeting closed caption feature.
   */
  isSupportCC?: boolean; //optional
  /**
   * isSupportPolling: default: true, optional. Enables or disables the meeting polling feature.
   */
  isSupportPolling?: boolean; //optional
  /**
   * isSupportBreakout: default: true, optional. Enables or disables the meeting breakout room feature.
   */
  isSupportBreakout?: boolean; //optional
  /**
   * screenShare: default: true, optional. Enables or disables the browser URL sharing feature (Chrome only).
   */
  screenShare?: boolean; //optional
  /**
   * videoDrag: default: true, optional. Enable or disable the drag video tile feature.
   */
  videoDrag?: boolean; //optional
  /**
   * sharingMode: default: 'both', optional. Shares screen. 'fit' - disables sharing "origin size".
   */
  sharingMode?: string; //optional
  /**
   * videoHeader: default: true, optional. Shows or hides the video tile header.
   */
  videoHeader?: boolean; //optional
  /**
   * isLockBottom: default: true, optional. Shows or hides the footer.
   */
  isLockBottom?: boolean; // optional
  /**
   * isSupportNonverbal: default: true, optional. Enables or disables the nonverbal feedback feature such as slow down or speed up icons.
   * For more details about this feature, see: https://support.zoom.us/hc/en-us/articles/115001286183-Nonverbal-feedback-and-meeting-reactions-
   */
  isSupportNonverbal?: boolean; // optional
  /**
   * isShowJoiningErrorDialog: default: true, optional. Enables or disables the join error popup dialog when the SDK fails to join a meeting.
   */
  isShowJoiningErrorDialog?: boolean; // optional
  /** 
   * inviteUrlFormat: default: '', optional. Customizes the invite URL format. Use the syntax: https://yourdomain/{0}?pwd={1}. 
   * Only available for v2.4.0+. Requires that Zoom sets the Enable Client SDK Customize Invite URL flag for your account. 
   * Contact Zoom Developer Support for details. 
   */
  inviteUrlFormat?: string;
  /**
   * loginWindow: Defines the registration and login popup window size.
   */
  loginWindow?: {
    /**
     * width: default: 400, optional. Login popup window width, in pixels.
     */
    width: string;
    /**
     * height: default: 380, optional. Login popup window height, in pixels.
     */
    height: string;
  }; // optional,
  /**
   * meetingInfo: default: ['topic','host','mn','pwd','telPwd','invite','participant','dc', 'enctype', 'report'], optional. 
   * Choose the meeting information to display: the meeting topic, host, meeting number (mn), password (pwd), telephone password (telPwd), etc.
   */
  meetingInfo?: Array<MeetingInfoType>; // optional
  /**
   * disableVoIP: default: false, optional. Enables or disables the Voice over IP (VoIP) feature.
   */
  disableVoIP?: boolean; // optional
  /**
   * disableReport: default: false, optional. Enables or disables the report feature.
   */
  disableReport?: boolean; // optional
  /**
   * disablePreview: default: false, optional. Enables or disables the audio and video preview features.
   */
  disablePreview?: boolean; // optional
  /**
   * disableCORP: default: false, optional. Enables or disables web isolation mode (developer environment feature).
   */
  disableCORP?: boolean; // optional
  /**
   * onRetryCallback: default: null, optional. Sets an on-retry callback function.
   */
  onRetryCallback?: Function; // optional
  /**
   * isSupportSimulive, default false, Simulive not with credentialless mode. https://developer.chrome.com/blog/coep-credentialless-origin-trial/
   */
  isSupportSimulive?: boolean; // optional
  /**
   * enableHD: optional, >=2.8.0 default=true. <2.8.0 default is false. Enables or disables 720p (bandwidth and hardware restrictions apply). See for details:
   * https://marketplace.zoom.us/docs/sdk/overview/720p/
   */
  enableHD?: boolean; // optional
  /**
   * enableFullHD, optional, >= 2.9.0 default=false, enable webinar attendee receive 1080P video when zoom backend support.
   */
  enableFullHD?: boolean;
  /**
   * helper: default: '', optional. Sets a helper HTML page for working around CORS issues. 
   * Example: https://github.com/zoom/meetingsdk-web/blob/master/helper.html
   */
  helper?: string; // optional
  /**
   * externalLinkPage: Set an intermediary HTML page for outgoing hyperlinks.
   */
  externalLinkPage?: string // optional
  /**
   * success: callback, optional. Callback function on success.
   */
  success?: Function;
  /**
   * error: callback, optional. Callback function on error.
   */
  error?: Function;
};

/**
 * MeetingInfoType
 */
export type MeetingInfoType =
  | 'topic'
  | 'host'
  | 'mn'
  | 'pwd'
  | 'telPwd'
  | 'invite'
  | 'participant'
  | 'dc'
  | 'enctype'
  | 'report';
/**
 * Virtual background (VB) or mask image info
 */
export type VbImageInfoType = {
  /**
   * VB or mask ID, must be unique
   */
  id: String;
  /**
   * Name to display for VB or mask.
   */
  displayName: String;
  /**
    * VB or mask file name.
    */
  fileName: string;
  /**
   * VB or mask image resource URL
   */
  url: string;
}

/**
 * In meeting event listeners
 */
export type InMeetingEvent = 'onUserJoin' | 'onUserLeave' | 'onUserIsInWaitingRoom' | 'onMeetingStatus' | 'onPreviewPannel|  receiveSharingChannelReady' | 'onReceiveTranscriptionMsg' | 'onReceiveTranslateMsg' | 'onAudioQos' | 'onVideoQos'

/**
 *  for the APIs that take images, The value of the image type returned by the getVideoSourcesCallBack method passed in the shareSource api
 */
export type NativeImageType = {
  /**
   * The data URL of the image.
   */
  toDataURL(): string;
}
/**
 * each `DesktopCapturerSource` represents a screen or an individual window that can be captured. The type of the return value of the getVideoSourcesCallBack method passed in the shareSource api
 */
export type DesktopCapturerSource = {
  /**
   * appIcon.toDataURL() method used to display app icon.
   */
  appIcon: NativeImageType;
  /**
   * display_id
   */
  display_id: string;
  /**
   * app id: Used to pass the id to the media stream
   */
  id: string;
  /**
   * app name
   */
  name: string;
  /**
   * thumbnail.toDataURL() method used to display app screenshots.
   */
  thumbnail: NativeImageType;
  /**
   * imgSrc（Options） The <img/> src url of the app screenshot, Used to display app screenshots.If this parameter is passed, it will be used in preference to thumbnail.
   */
  imgSrc?: string;
  /**
   * appIconSrc（Options）The <img/> src url of the app icon, Used to display app icon.If this parameter is passed, it will be used in preference to appIcon.
   */
  appIconSrc?: string;
}

/**
 * onMeetingStatus
 */
export declare enum onMeetingStatus {
  connecting = 1,
  connected = 2,
  disconnected = 3,
  reconnecting = 4,
}

/**
 * BreakoutRoomControlStatus
 */
export enum BreakoutRoomControlStatus {
  NotStarted = 1,
  InProgress = 2,
  Closing = 3,
  Closed = 4
}

/**
 * BreakoutRoomStatus
 */
export enum BreakoutRoomStatus {
  NoToken = 1,
  GotToken = 2,
  Started = 3,
  Closing = 4,
  Closed = 5
}

/**
 * ZoomMtg.i18n
 * 
 * Examples:
 * 
 * en-US https://source.zoom.us/2.9.0/lib/lang/en-US.json
 * 
 * zh-CN https://source.zoom.us/2.9.0/lib/lang/zh-CN.json
 * ```js
 * ZoomMtg.i18n.load('en-US');
  var userLangTemplate = ZoomMtg.i18n.getAll("en-US");
  var userLangDict = Object.assign({}, userLangTemplate, {
    'apac.toolbar_leave': 'Leave',
    'apac.wc_leave_meeting': 'Do you want leave',
    'apac.wc_joining_meeting': 'I want to join...',
    'apac.wc_video.start_video': 'Turn on video',
    'apac.wc_video.stop_video': 'Turn off video'
  });
  ZoomMtg.i18n.load(userLangDict, "myLang");
  ZoomMtg.i18n.reload('myLang');
 * ```
 */
export declare namespace ZoomMtgLang {
  /**
   * Loads translations.
   * See for abbreviation descriptions: https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists/#languages
   * 'de-DE', 'es-ES', 'en-US', 'fr-FR', 'jp-JP', 'pt-PT', 'ru-RU', 'zh-CN', 'zh-TW', 'ko-KO', 'vi-VN', 'it-IT'
   * @param lang
   *
   */
  function load(lang: 'de-DE'| 'es-ES'| 'en-US'| 'fr-FR'| 'jp-JP'| 'pt-PT'| 'ru-RU'| 'zh-CN'| 'zh-TW'| 'ko-KO'| 'vi-VN'| 'it-IT'): Promise<any>;
  /**
   * Loads translation URL. Use the URL provided by Zoom or your own resource object.
   * For the Zoom-provided JSON language use this syntax: https://source.zoom.us/{VERSION_NUMBER}/lib/lang/{LANG_CODE}.json. 
   * For example, to use the English resource from Zoom for v2.7.0 of the SDK, use: https://source.zoom.us/2.7.0/lib/lang/en-US.json
   * Or create your own JSON resource object.
   * @param url JSON Language resource URL or resource object
   * @param lang Your assigned language name for the resource.
   */
  function load(url: string | object, lang: string): Promise<any>;
  /**
   * Changes UI language. Set a supported language when joining a meeting.
   * 'de-DE', 'es-ES', 'en-US', 'fr-FR', 'jp-JP', 'pt-PT', 'ru-RU', 'zh-CN', 'zh-TW', 'ko-KO', 'vi-VN', 'it-IT' or you loaded lang
   * @param lang
   *
   */
  function reload(lang: string): void;

  /**
   * Gets all language resource results.
   * @param lang
   *
   */
  function getAll(lang: string): object;

  /**
   * Looks up the given string up in the dictionary and returns the translation if one exists. 
   * If a translation is not found, returns the original word.
   * @param key
   *
   */
  function get(key: string): void;
  /**
   * Gets the current language resource result.
   *
   */
  function getCurrentLang(): string;
  /**
   * Gets the support language array.
   *
   */
  function getSupportLanguage(): Array<string>;
  /**
   * Sets the support language array.
   * @param langArray Array of the languages that you want to support. 
   * This will replace the default: ['de-DE', 'es-ES', 'en-US', 'fr-FR', 'jp-JP', 'pt-PT', 'ru-RU', 'zh-CN', 'zh-TW', 'ko-KO', 'vi-VN', 'it-IT']
   */
  function setSupportLanguage(langArray: Array<string>): void;
}

/**
 * Virtual background (VB) status success callback
 * @param args 
 */
export function vbStatusDataFunc(data: {
  /**
   * Result:
   */
  result: {
    /**
     * vbList, name is VB image name, must be unique and identify different VB image
     */
    vbList: Array<VbImageInfoType>;
    /**
     * Whether or not VB is locked.
     */
    lock: boolean,
    /**
     * Enable a blurred background or not.
     */
    blur: boolean,
    /**
     * If true, the user can enable VB, mask, or blur through the UI 
     * and the developer can't call the following APIs to control it:
     * updateVirtualBackgroundList
     * setVirtualBackground
     * lockVirtualBackground
     */
    status: boolean,
    /**
     * True if the user selected VB, false if not.
     */
    vb: boolean, 
    /**
     * True if the user selected mask, false if not.
     */
    mask: boolean
    /**
     * The current user's VB ID.
     */
    id: any;
  }
}): void;

/**
 * Support for VB callback
 * @param args 
 */
export function vbSupportDataFunc(data: {
  /**
   * Result:
   */
  result: {
    /**
     * True if the user can support VB, false if not.
     */
    vb: boolean;
    /**
     * True if the user can support mask, false if not.
     */
    mask: boolean;
    /**
     * True if VB is enabled, false if not.
     */
    enable: boolean;
  }
}): void;

/**
 * This method will be called when the “screen share” is clicked, Support for get screen share sources callback. 
 */
export function getShareSourcesFunc(): Promise<DesktopCapturerSource[]>;

/**
 * ZoomMtg
 */
export namespace ZoomMtg {
  /**
   * i18n
   * @
   */
  const i18n: typeof ZoomMtgLang;
  /**
   * Generate each time you join a meeting or webinar through a server-side function where you can securely store SDK credentials.
   * See Generate the SDK JWT key for details: 
   * https://marketplace.zoom.us/docs/sdk/native-sdks/auth/#generate-the-sdk-jwt
   * See the Sample Signature app for an example:
   * https://github.com/zoom/meetingsdk-sample-signature-node.js
   * @category Join
   */
  function generateSDKSignature(args: {
    /**
     * Required, your SDK JWT key
     */
    sdkKey: string;
    /**
     * Required, your SDK JWT secret
     */
    sdkSecret: string;
    /**
     * Required, the Zoom meeting or webinar number.
     */
    meetingNumber: string;
    /**
     * Required, 0 to specify participant, 1 to specify host.
     */
    role: string;
    /**
     * Callback function on success.
     */
     success?: Function; 
     /**
      * Callback function in the event of an error.
      */
     error?: Function
  }): string;
  /**
   * Changes the Zoom default library resource requirements.
   * Default is ZoomMtg.setZoomJSLib('https://source.zoom.us/{VERSION_NUMBER}/lib', '/av')
   * @category Join
   */
  function setZoomJSLib(path?: string, dir?: string): void;
  /**
   * Preloads the WebAssembly (Wasm) files to reduce download time and improve the experience for users joining meetings.
   * @category Join
   */
  function preLoadWasm(): void;
  /* 
   * Adds a script to download a requirements.js file and a node to the HTML body for the Meeting SDK for Web to use.
   * Note that Chrome origin trials (OT) provide many new features before Chrome releases. See the following links for details: 
   * https://developer.chrome.com/origintrials/#/trials/active and https://developer.chrome.com/blog/origin-trials/
   * The Meeting SDK for Web can use:
   * 1. SharedArrayBuffer (SAB) OT for gallery view (Chrome 92 to 103). See: https://marketplace.zoom.us/docs/sdk/overview/websdk-gallery-view/
   * 2. WebAssembly SIMD to improve video and sharing performance (Chrome91 release). See: https://chromestatus.com/feature/6533147810332672
   * 3. WebCodecs to address latency when starting video (Chrome94 release). See: https://chromestatus.com/feature/5669293909868544
   * @category Join
   */
  function prepareWebSDK(origintrials?: Array<string>): void;
  /**
   * Initializes a Zoom Meeting. You must initialize a Zoom meeting in order to start or join it. 
   * This method only requires the leaveUrl parameter.
   * @param args 
   * @category Join
   */
  function init(args: typeof initArgs): void;
  /**
   * Joins a meeting.
   * @param args 
   * @category Join
   */
  function join(args: {
    /**
     * Required, the Zoom meeting or webinar number.
     */
    meetingNumber: string | number;
    /**
     * Required. The name of the user starting or joining the meeting or webinar.
     */
    userName: string;
    /**
     * Required for webinar. Required for meeting if registration is required; optional if not. 
     * The email of the user starting or joining the meeting or webinar.
     */
    userEmail?: string;
    /**
     * Required. The meeting’s password. Leave as an empty string if the meeting or webinar only requires the waiting room.
     */
    passWord?: string;
    /**
     * Optional. An identifier for the user that you can get back from the Meeting API.
     */
    customerKey?: string;
    /**
     * Required if registration is required; optional if not. The registrant’s token.
     */
    tk?: string;
    /**
     * Required for hosts starting a meeting or webinar; optional otherwise. The host’s Zoom Access Key (ZAK) token.
     */
    zak?: string;
    /**
     * Required. Only sdkKey is supported for joining meetings on version 2.7.0 and higher.
     */
    sdkKey?: string;
    /**
     * Required. The signature to start or join a meeting. See https://marketplace.zoom.us/docs/sdk/native-sdks/auth/ for details.
     */
    signature: string;
    /**
     * Callback function on success.
     */
    success: Function;
    /**
     * Callback function in the event of an error.
     */
    error: Function;
  }): void;
  /**
   * Shows or hides the invite button.
   * @param args 
   */
  function showInviteFunction(args: { 
    /**
     * Required
     */
    show: boolean }): void;
  /**
   * Shows or hides the call out button to invite others by phone.
   * See for details: https://support.zoom.us/hc/en-us/articles/4404535651085-Inviting-others-by-phone-call-out-.
   * @param args 
   */
  function showCalloutFunction(args: { 
    /**
     * Required
     */
    show: boolean }): void;
  /**
   * Shows or hides the meeting header.
   * @param args 
   */
  function showMeetingHeader(args: { 
    /**
     * Required
     */
    show: boolean }): void;
  /**
   * Shows or hides the record button.
   * @param args 
   */
  function showRecordFunction(args: { 
    /**
     * Required
     */
    show: boolean }): void;
  /**
   * Shows or hides the join audio button.
   * @param args 
   */
  function showJoinAudioFunction(args: { 
    /**
     * Required
     */
    show: boolean }): void;
   /**
    * Set customize polling url, only work when Enable Client SDK Customize Invite URL flag for your account
    * @param args 
    */ 
  function setCustomizedPollingUrl(args: { 
    /**
     * customize create polling url or callback
     */
    create?: string | Function;
    /**
     * customize edit polling url or callback
     */
    edit?: string | Function;
    /**
     * Callback function on success.
     */
     success?: Function; 
     /**
      * Callback function in the event of an error.
      */
     error?: Function
  }): void;
  /**
   * Shows or hides border around shared content.
   * @param args 
   */
    function showPureSharingContent(args: { 
    /**
     * Required, true to hide border, false to show it.
     */
    show: boolean }): void;
  /**
   * Gets the current list of participants. Index 0 is the current user.
   * @param args 
   */
  function getAttendeeslist(args: {
    /**
     * Callback function on success.
     */
     success?: Function; 
     /**
      * Callback function in the event of an error.
      */
     error?: Function
  }): void;
  /**
   * Gets the list of breakout rooms and attendees.
   * @param args 
   */
  function getBreakoutRooms(args: {
   /**
     * Callback function on success.
     */
    success?: Function; 
    /**
     * Callback function in the event of an error.
     */
    error?: Function
  }): void;
  /**
   * Gets the current user information.
   * @param args 
   */
  function getCurrentUser(args: { 
    /**
     * Callback function on success.
     */
     success?: Function; 
     /**
      * Callback function in the event of an error.
      */
     error?: Function
   }): void;
  /**
   * Sets the log level.
   * @param level 
   */
  function setLogLevel(level?: 'info' | 'error' | 'silent'): void;
  /**
   * Gets the current meeting information.
   * @param args 
   */
  function getCurrentMeetingInfo(args: {
    /**
     * Callback function on success.
     */
     success?: Function; 
     /**
      * Callback function in the event of an error.
      */
     error?: Function
  }): void;
  /**
   * Invites yourself to join by phone.
   * @param args 
   */
  function callOut(args: { 
    /**
     * Call out phone number.
     */
    phoneNumber: string; 
  /**
     * Callback function on success.
     */
   success?: Function; 
   /**
    * Callback function in the event of an error.
    */
   error?: Function }): void;
  /**
   * Invites a participant to join by phone.
   * @param args 
   */
  function inviteByPhone(args: {
    /**
     * The phone number. Example: +1123456789
     */
    phoneNumber: string; 
    /**
     * Required. The name of the user starting or joining the meeting or webinar.
     */
    userName: string;
    /**
     * Callback function on success.
     */
     success?: Function; 
     /**
      * Callback function in the event of an error.
      */
     error?: Function
  }): void;
  /**
   * Invites Zoom Cloud Room Connector (CRC) device.
   * @param args 
   */
  function inviteCRCDevice(args: {
    /**
     * Device IP address.
     */
    ip: string;
    /**
     * Device type: type=1 invites an H.323 device; type=2 invites a SIP device.
     */
    type: Number;
    /**
     * Callback function on success.
     */
     success?: Function; 
     /**
      * Callback function in the event of an error.
      */
     error?: Function
  }): void;
  /**
   * Cancels Zoom Cloud Room Connector (CRC) device invitation.
   * @param args 
   */
  function cancelInviteCRCDevice(args: {
    /**
     * Callback function on success.
     */
     success?: Function; 
     /**
      * Callback function in the event of an error.
      */
     error?: Function
  }): void;
  /**
   * Mutes or unmutes a participant.
   * @param args 
   */
  function mute(args: {
    /**
     * The participant's user ID.
     */
    userId: Number;
    /**
     * True to mute or false to unmute.
     */
    mute: boolean;
    /**
     * Callback function on success.
     */
     success?: Function; 
     /**
      * Callback function in the event of an error.
      */
     error?: Function
  }): void;
  /**
   * Mutes or unmutes all attendees. Host or co-host only.
   * @param args 
   */
  function muteAll(args: {
    /**
     * True to mute all or false to unmute all.
     */
    muteAll: boolean;
    /**
     * Callback function on success.
     */
     success?: Function; 
     /**
      * Callback function in the event of an error.
      */
     error?: Function
  }): void;
  /**
   * Renames the participant. Host or co-host only. The userId and oldName must be correct for this operation to succeed.
   * @param args 
   */
  function rename(args: {
    /**
     * The participant's user ID.
     */
    userId: number;
    /**
     * The participant's current name.
     */
    oldName: string;
    /**
     * The new name for the participant.
     */
    newName: string;
    /**
     * Callback function on success.
     */
     success?: Function; 
     /**
      * Callback function in the event of an error.
      */
     error?: Function
  }): void;
  /**
   * Ejects a participant from the meeting. Host or co-host only.
   * @param args 
   */
  function expel(args: {
    /**
     * The participant's user ID.
     */
    userId: number;
    /**
     * Callback function on success.
     */
     success?: Function; 
     /**
      * Callback function in the event of an error.
      */
     error?: Function
  }): void;
  /**
   * Stops or starts cloud recording. Host only.
   * @param args 
   */
  function record(args: {
    /**
     * True to record or false to stop recording.
     */
    record: boolean;
    /**
     * Callback function on success.
     */
     success?: Function; 
     /**
      * Callback function in the event of an error.
      */
     error?: Function
  }): void;
  /**
   * Locks or unlocks the meeting. Host or co-host only. If the meeting is locked, others can't join the meeting unless it is unlocked.
   * @param args 
   */
  function lockMeeting(args: {
    /**
     * True to lock the meeting or false to unlock it.
     */
    lockMeeting: boolean;
    /**
     * Callback function on success.
     */
     success?: Function; 
     /**
      * Callback function in the event of an error.
      */
     error?: Function
  }): void;
  /**
   * Leaves the meeting. If the host leaves, the meeting will end.
   * @param args 
   */
  function leaveMeeting(args: { 
    /**
     * >=2.9.0 default is false, if confirm = true, will show leave option, not leave direct.
     */
     confirm?: boolean;
     /**
     * >=2.9.0 callback when click cancel.
     */
     cancelCallback?: Function;
    /**
     * Callback function on success.
     */
     success?: Function; 
     /**
      * Callback function in the event of an error.
      */
     error?: Function
  }): void;
  /**
   * Ends the meeting. Host only.
   * @param args 
   */
  function endMeeting(args: { /**
  * Callback function on success.
  */
 success?: Function; 
 /**
  * Callback function in the event of an error.
  */
 error?: Function }): void;
  /**
   * Puts the participant in the waiting room or lets the participant join the meeting.
   * @param args 
   */
  function putOnHold(args: {
    /**
     * The participant's user ID.
     */
    userId: number;
    /**
     * True to hold the participant in the waiting room or false to let the participant join the meeting.
     */
    hold: boolean;
    /**
     * Callback function on success.
     */
     success?: Function; 
     /**
      * Callback function in the event of an error.
      */
     error?: Function
  }): void;
  /**
   * Listens for user join or leave events and handles them.
   * @param event 
   * @param callback 
   * Only supported in meetings.
   * Example:
  ```js
  ZoomMtg.inMeetingServiceListener('onUserJoin', function (data) {
    console.log(data);
  });

  ZoomMtg.inMeetingServiceListener('onUserLeave', function (data) {
    console.log(data);
  });
  ```
  @category Listener
   */
  function inMeetingServiceListener(event: 'onUserJoin' | 'onUserLeave' , callback: Function): void;
    /**
   * Listens for sharing channel readiness to receive.
   * @param event 
   * @param callback 
   * Example:
   * ```js
  ZoomMtg.inMeetingServiceListener('receiveSharingChannelReady', function (data) {
    console.log(data);
  });
  ```
  @category Listener
   */
  function inMeetingServiceListener(event: 'receiveSharingChannelReady' , callback: Function): void;
    /**
   * Listens for waiting room and audio/video preview page status.
   * @param event 
   * @param callback 
   * Example:
   * ```js

  ZoomMtg.inMeetingServiceListener('onUserIsInWaitingRoom', function (data) {
    console.log(data);
  });
  
  ZoomMtg.inMeetingServiceListener('onPreviewPannel', function (data) {
    console.log('onPreviewPannel', data);
  });
  ```
  @category Listener
   */
  function inMeetingServiceListener(event: 'onUserIsInWaitingRoom' | 'onPreviewPannel' , callback: Function): void;
/**
   * Listens for meeting status.
   * @param event 
   * @param callback
   * Example:
   * ```js
  ZoomMtg.inMeetingServiceListener('onMeetingStatus', function (data) {
    // {status: 1(connecting), 2(connected), 3(disconnected), 4(reconnecting)}
    console.log(data);
  });
  ```
  @category Listener
   */
  function inMeetingServiceListener(event: 'onMeetingStatus', callback: Function): void;
  /**
   * Listens for transcriptions, only works when save closed captions is on.
   * @param event 
   * @param callback 

   * Example:
   * ```js

  ZoomMtg.inMeetingServiceListener('onReceiveTranscriptionMsg', function (data) {
    console.log('onReceiveTranscriptionMsg', data);
  });

  ZoomMtg.inMeetingServiceListener('onReceiveTranslateMsg', function (data) {
    console.log('onReceiveTranslateMsg', data);
  });
  ```
     * @category Listener
   */
  function inMeetingServiceListener(event: 'onReceiveTranscriptionMsg' | 'onReceiveTranslateMsg', callback: Function): void;
  /**
   * Listens for audio and video quality of service (QoS) events.
   * @param event 
   * @param callback 
   * Example:
   * ```js
  ZoomMtg.inMeetingServiceListener('onAudioQos', function (data) {
    console.log('onAudioQos', data);
  });

  ZoomMtg.inMeetingServiceListener('onVideoQos', function (data) {
    console.log('onVideoQos', data);
  });
  ```
     * @category Listener
   */
  function inMeetingServiceListener(event: 'onAudioQos' | 'onVideoQos', callback: Function): void;
  /**
   * Re-renders the UI, for example, after changing the UI language in a meeting.
   * @param args 
   */
  function reRender(args: { 
    /**
     * Callback function on success.
     */
    success?: Function; 
    /**
     * Callback function in the event of an error.
     */
    error?: Function }): void;
  /**
   * Gets the Meeting SDK for Web version.
   * @param args 
   */
  function getWebSDKVersion(args: {
    /**
     * Callback function on success.
     */
     success?: Function; 
     /**
      * Callback function in the event of an error.
      */
     error?: Function
  }): void;
  /**
   * Subscribes to audio or video quality of service (QoS) data.
   * @param args.audio
   * @param args.video
   */
  function subscribeStatisticData(args: { 
    /**
     * If true, subscribe to audio QoS data.
     */
    audio?: boolean,
    /**
     * If true, subscribe to video QoS data.
     */
    video?: boolean,
    /**
     * Callback function on success.
     */
     success?: Function; 
     /**
      * Callback function in the event of an error.
      */
     error?: Function }): void;
  /**
   * Unsubscribes to audio or video quality of service (QoS) data.
   * @param args
   * @param args.audio
   * @param args.video
   */
  function unSubscribeStatisticData(args: { 
    /**
     * If true, unsubscribe to audio QoS data.
     */
    audio?: boolean,
    /**
     * If true, unsubscribe to video QoS data.
     */
    video?: boolean,
    /**
     * Callback function on success.
     */
     success?: Function; 
     /**
      * Callback function in the event of an error.
      */
     error?: Function }): void;
  /**
   * Checks if the browser supports virtual background (VB) and mask, needs "virtual background" enabled first.
   * @category VirtualBackground
   */
  function isSupportVirtualBackground(args: {
    /**
     * Callback function on success.
     */
    success?: typeof vbSupportDataFunc | Function;
    /**
      * Callback function in the event of an error.
      */
     error?: Function;
  }): void;
  /**
   * Get virtual background status
   * @category VirtualBackground
   */
  function getVirtualBackgroundStatus(args: {
    /**
     * Callback function on success.
     */
     success?: typeof vbStatusDataFunc | Function;
    /**
      * Callback function in the event of an error.
      */
     error?: Function;
  }): void;
  /**
   * update vb/mask background image list
   * @param args 
   * @category VirtualBackground
   */
  function updateVirtualBackgroundList(args: {
    /**
     * vb list
     */
    vbList?: Array<VbImageInfoType>;
    /**
     * Callback function on success.
     */
     success?: Function; 
    /**
      * Callback function in the event of an error.
      */
     error?: Function
  }): void;
  /**
   * Change virtual background (VB) from vbList if names match.
   * If ID is empty, clear VB and mask.
   * If id='blur', blur background instead
   * @param args
   * @category VirtualBackground
   */
  function setVirtualBackground(args: {
    /**
     * VB or mask background ID
     */
    id?: string,
    /**
     * Callback function on success.
     */
     success?: Function; 
    /**
      * Callback function in the event of an error.
      */
     error?: Function
  }): void;
  /**
   * 
   * Lock VB or mask to a specific image.
   * @param args
   * @category VirtualBackground
   */
  function lockVirtualBackground(args: {
    /**
     * Lock or unlock VB or mask.
     */
    isLock: boolean;
    /**
     * Callback function on success.
     */
     success?: Function; 
    /**
      * Callback function in the event of an error.
      */
     error?: Function
  }):void;

  /**
   * In the electron application, if this method is registered, getVideoSourcesCallBack will be called when "screen share" is clicked to obtain the application information returned by electron that can share the desktop. provide a callback function return desktopCapturer share sources in electron app.
   * @param args
   */
  function shareSource(args: {
    /**
     * callback function need return electron share source;
     */
    getVideoSourcesCallBack: typeof getShareSourcesFunc | Function; 
    /**
     * Callback function on success.
     */
    success?: Function; 
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;
}
