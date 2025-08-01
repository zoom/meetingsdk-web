/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * initArgs
 */
declare let initArgs: {
  /**
   * debug: default: false, optional. Turns on debug mode to print logs in the browser console.
   */
  debug?: boolean; //optional
  /**
   * patchJsMedia: Optional. Default: false. Set to true to automatically apply the latest media dependency fix for the current Web Meeting SDK version. Note that you will still need to manually upgrade to major and minor version releases.
   */
  patchJsMedia?: boolean; //optional
  /**
   * leaveUrl: Required. The URL to post after the user leaves the meeting. Example: “http://www.zoom.us”
   * If you do not set a leaveURL, the default will be -> window.location.origin
   * Other substitutions include the following.
   *
   * http://127.0.0.1 -> http://127.0.0.1 (no change)
   *
   * https://127.0.0.1 -> https://127.0.0.1 (no change)
   *
   * about:blank -> about:blank
   *
   * /meeting -> window.location.origin/meeting
   *
   * zoom.us -> https://zoom.us
   *
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
   * enableWaitingRoomPreview: default: true, optional. Enables or disables the audio and video preview in the waiting room or when the participant is waiting for the host to start the meeting.
   */
  enableWaitingRoomPreview?: boolean; // optional
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
   * https://developers.zoom.us/docs/meeting-sdk/web/720p/
   */
  enableHD?: boolean; // optional
  /**
   * enableFullHD: optional, >= 2.9.0 default=false, enable webinar attendee receive 1080P video when zoom backend support.
   */
  enableFullHD?: boolean;
  /**
   * helper: optional, default: ''. Sets a helper HTML page for working around CORS issues.
   * Example: https://github.com/zoom/meetingsdk-web/blob/master/helper.html
   */
  helper?: string; // optional
  /**
   * externalLinkPage: an intermediary HTML page for outgoing hyperlinks.
   */
  externalLinkPage?: string; // optional
  /**
   * Sets the default video layout for the session. Optional.
   *
   * @property {string} defaultView - Supported values:
   *   - 'gallery': Shows multiple participants in a grid layout (if supported)
   *   - 'speaker': Shows active speaker in large view (default)
   *   - 'multiSpeaker': Shows multiple featured speakers (if supported)
   *
   * @remarks
   * Mobile device limitations:
   *   - 'multiSpeaker' is not supported and will automatically switch to 'speaker' view
   *   - When participant count is less than 3, 'gallery' view will automatically switch to 'speaker' view
   */
  defaultView?: 'gallery' | 'speaker' | 'multiSpeaker'; // optional
  /**
   * Shows (false, default value) or hides (true) the "Share tab audio" checkbox when sharing a Chrome tab.
   */
  hideShareAudioOption?: boolean;
  /**
   * disablePictureInPicture: default: false, optional. Enables or disables the Picture in Picture feature.
   */
  disablePictureInPicture?: boolean;
  /**
   * onInviteSearchZoomPhoneCallback, callback when the user uses Invite->Zoom Phone-> search number.
   * isSameAccount = true, support direct call internal ext number.
   * Example:
  ```js
      onInviteSearchZoomPhoneCallback: function (e) {
        const searchResult =[
          {
            "firstName": "firstName1",
            "lastName": "lastName1",
            "displayName": "firstName1 lastName1",
            "snsEmail": "xxxxxx1@gmail.com",
            "pbx": {dn: ['+1xxxxxxxxxx'], ext: 800},
            isSameAccount: true
        },
        {
          "firstName": "firstName2",
          "lastName": "lastName2",
          "displayName": "firstName2 lastName2",
          "snsEmail": "xxxx2@zoom.us",
          "pbx": {dn: ['+2xxxxxxxxxx'], ext: 800},
          isSameAccount: false
      }];
      return Promise.resolve(searchResult);
    }
    ```
   */
  onInviteSearchZoomPhoneCallback?: Function;
  /**
   * disableZoomPhone: default: false, optional. Enables or disables the Invite->Zoom Phone feature.
   */
  disableZoomPhone?: boolean;
  /**
   * disableZoomLogo: default: false, optional. If true, removes the Zoom workplace logo.
   * Disabling the Zoom logo will not be available in the future. For a custom experience, build with the [Zoom Video SDK](https://developers.zoom.us/docs/video-sdk/).
   */
  disableZoomLogo?: boolean;
  /**
   * Quickly leave the meeting when refreshing or closing the page, instead of experiencing meeting failover. Caveat for two scenarios:
   * PSTN: Phone user who is bound to the current user. The phone will hang up instead of staying connected.
   * Breakout room: Users in a Breakout room need to be assigned again instead of having been assigned and auto-joining the room.
   */
  leaveOnPageUnload?: boolean;
  /**
   * success: optional, callback function on success.
   */
  success?: Function;
  /**
   * error: optional, callback function on error.
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
 * Virtual background (VB) image information.
 */
export type VbImageInfoType = {
  /**
   * virtual background ID, must be unique
   */
  id: string;
  /**
   * Name to display for virtual background.
   */
  displayName: string;
  /**
   * Virtual background file name.
   */
  fileName: string;
  /**
   * Virtual background image resource URL.
   */
  url: string;
};

/**
 * Call out option interface.
 */
export interface CallOutOption {
  /**
   * Determines whether to require a greeting before being connected.
   */
  greeting?: boolean;
  /**
   * Determines whether to require pressing 1 before being connected.
   */
  pressingOne?: boolean;
}

/**
 * Invite phone option
 */
export interface InvitePhoneOption {
  /**
   * Is call me, phone audio, bound to current user?
   */
  callMe?: boolean;
  /**
   * Is a greeting required before being connected?
   */
  greeting?: boolean;
  /**
   * Is the user required to press 1 before being connected?
   */
  pressingOne?: boolean;
}

/**
 * In meeting event listeners.
 */
export type InMeetingEvent =
  | 'onUserJoin'
  | 'onUserLeave'
  | 'onUserUpdate'
  | 'onUserIsInWaitingRoom'
  | 'onMeetingStatus'
  | 'onPreviewPannel|  receiveSharingChannelReady'
  | 'onReceiveTranscriptionMsg'
  | 'onReceiveTranslateMsg'
  | 'onAudioQos'
  | 'onVideoQos'
  | 'onShareQos'
  | 'onClaimStatus'
  | 'onNetworkQualityChange'
  | 'onMediaCapturePermissionChange'
  | 'onMediaCaptureStatusChange'
  | 'onRoomStatusChange'
  | 'onActiveSpeaker'
  | 'onPictureInPicture'
  | 'onFocusModeStatusChange'
  | 'onJoinSpeed'
  | 'onVideoOrder'
  | 'onReceiveChatMsg'
  | 'onVbStatusChange'
  | 'onFeedBackData'
  | 'onRecordingChange'
  | 'onShareContentChange';

/**
 *  For the APIs that take images, the value of the image type returned by the getVideoSourcesCallBack method, passed in the shareSource API.
 */
export type NativeImageType = {
  /**
   * The data URL of the image.
   */
  toDataURL(): string;
};
/**
 * Each `DesktopCapturerSource` represents a screen or an individual window that can be captured. The type of the return value of the getVideoSourcesCallBack method is passed in the shareSource API.
 */
export type DesktopCapturerSource = {
  /**
   * appIcon.toDataURL() method used to display the app icon.
   */
  appIcon: NativeImageType;
  /**
   * The display ID.
   */
  display_id: string;
  /**
   * The app ID used to pass the ID to the media stream.
   */
  id: string;
  /**
   * The app name.
   */
  name: string;
  /**
   * thumbnail.toDataURL() method used to display app screenshots.
   */
  thumbnail: NativeImageType;
  /**
   * (Optional） The app screenshot's image source URL, used to display app screenshots. If you pass this parameter, the SDK uses it as the thumbnail.
   */
  imgSrc?: string;
  /**
   * (Optional）The app icon's image source URL, used to display app icon. If you pass this parameter, the SDK uses in as the app icon.
   */
  appIconSrc?: string;
};

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
  Closed = 4,
}

/**
 * BreakoutRoomStatus
 */
export enum BreakoutRoomStatus {
  NoToken = 1,
  GotToken = 2,
  Started = 3,
  Closing = 4,
  Closed = 5,
}
/**
 * Allocation pattern of breakout room
 * @enum
 */
export enum BreakoutRoomAllocationPattern {
  auto = 1,
  manually = 2,
  selfSelect = 3,
}

/**
 * Room Status of attendee
 * @enum
 */
export enum BreakoutRoomAttendeeStatus {
  /**
   * Unassigned
   */
  Initial = 'initial',
  /**
   * Assigned but not in room
   */
  Invited = 'be invited',
  /**
   * Joining the room
   */
  Joining = 'joining',
  /**
   * In room
   */
  InRoom = 'in room',
  /**
   * Leaving the room
   */
  Returning = 'returning',
  /**
   * Not joined to the room
   */
  NotJoined = 'not joined',
  /**
   * Time up
   */
  TimeUp = 'time up',
  /**
   * In the main session
   */
  MainSession = 'main session',
}

/**
 * Room creation options.
 */
export interface RoomOption {
  /**
   * Whether to automatically join the room when the participant is assigned to a room.
   */
  isAutoJoinRoom?: boolean;
  /**
   * Whether to allow participants in the room to return to the main session.
   */
  isBackToMainSessionEnabled?: boolean;
  /**
   * Whether to set a timer for the breakout room.
   */
  isTimerEnabled?: boolean;
  /**
   * Duration of the timer.
   */
  timerDuration?: number;
  /**
   * Whether to notify the user when the time is up. True: Do not notify. False: Notify.
   */
  notNotifyMe?: boolean;
  /**
   * Whether to offer a countdown after closing the breakout room.
   */
  needCountDown?: boolean;
  /**
   * When the breakout room is closing, the buffer time (in seconds) to leave the room. Values: 10 | 15 | 30 | 60 | 120.
   */
  waitSeconds?: number;
}

/**
 * Interface for the result of the check feature support information on the user's platform.
 * Features in the supportFeatures array are supported on the current platform.
 * Features in the unSupportFeatures array are not supported on the current platform.
 */
export interface SupportFeatures {
  /**
   * @ignore
   */
  platform: string;
  /**
   * @ignore
   */
  supportFeatures: Array<string>;
  /**
   * @ignore
   */
  unSupportFeatures: Array<string>;
}

/**
 * ZoomMtg.i18n
 * 
 * Examples:
 * 
 * en-US https://source.zoom.us/{VERSION_NUMBER}/lib/lang/en-US.json
 * 
 * zh-CN https://source.zoom.us/{VERSION_NUMBER}/lib/lang/zh-CN.json
 * ```js
 * ZoomMtg.i18n.load('zh-CN').then(() => {
    // load zh-CN resource success
    var userLangTemplate = ZoomMtg.i18n.getAll("zh-CN");
    var userLangDict = Object.assign({}, userLangTemplate, {
      'apac.toolbar_leave': 'Leave',
      'apac.wc_leave_meeting': 'Do you want leave',
      'apac.wc_joining_meeting': 'I want to join...',
      'apac.wc_video.start_video': 'Turn on video',
      'apac.wc_video.stop_video': 'Turn off video'
    });
    ZoomMtg.i18n.load(userLangDict, "myLang").then(() => {
      // load your lang resource success
    });
  }
 * ```
 */
export declare namespace ZoomMtgLang {
  /**
   * Loads translations.
   *
   * See for abbreviation descriptions: https://developers.zoom.us/docs/meeting-sdk/web/client-view/multi-language/
   *
   * 'de-DE', 'es-ES', 'en-US', 'fr-FR', 'ja-JP', 'pt-PT', 'ru-RU', 'zh-CN', 'zh-TW', 'ko-KR', 'vi-VN', 'it-IT', 'id-ID', 'nl-NL', 'sv-SE', 'pl-PL', 'tr-TR'
   *
   * Be sure to call it before calling `init`.
   *
   * jp-JP/ko-KO deprecated in v4.0.0, please use new ja-JP/ko-KO, will not accept jp-JP/ko-KO in 6.0.0
   * @param lang
   *
   */
  function load(
    lang:
      | 'de-DE'
      | 'es-ES'
      | 'en-US'
      | 'fr-FR'
      | 'ja-JP'
      | 'jp-JP'
      | 'pt-PT'
      | 'pl-PL'
      | 'tr-TR'
      | 'ru-RU'
      | 'zh-CN'
      | 'zh-TW'
      | 'ko-KR'
      | 'ko-KO'
      | 'vi-VN'
      | 'it-IT'
      | 'id-ID'
      | 'nl-NL'
      | 'sv-SE',
  ): Promise<any>;
  /**
   * Loads translation URL. Use the URL provided by Zoom or your own resource object.
   * For the Zoom-provided JSON language use this syntax: https://source.zoom.us/{VERSION_NUMBER}/lib/lang/{LANG_CODE}.json.
   * For example, to use the English resource from Zoom for v4.0.0 of the SDK, use: https://source.zoom.us/4.0.0/lib/lang/en-US.json
   * Or create your own JSON resource object.
   * Be sure to call it before calling `init`.
   * @param url JSON Language resource URL or resource object
   * @param lang Your assigned language name for the resource.
   */
  function load(url: string | object, lang: string): Promise<any>;

  /**
   * callback when load lang success, if load lang 3s timeout, callback will be called
   * @param callback
   */
  function onLoad(callback: (res: 'success' | 'timeout') => void): void;
  /**
   * This is deprecated in versions >= 3.0.0, so you can remove it.
   @deprecated
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
   * This is deprecated in versions >= 3.0.0, so you can remove it.
   * @deprecated
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
    lock: boolean;
    /**
     * Enable a blurred background or not.
     */
    blur: boolean;
    /**
     * If true, the user can enable VB or blur through the UI
     * and the developer can't call the following APIs to control it:
     * updateVirtualBackgroundList
     * setVirtualBackground
     * lockVirtualBackground
     */
    status: boolean;
    /**
     * True if the user selected VB, false if not.
     */
    vb: boolean;
    /**
     * always false, remove mask feature since 3.11.0
     * @deprecated
     */
    mask: boolean;
    /**
     * The current user's VB ID.
     */
    id: any;
  };
}): void;

/**
 * Support for virtual background (VB) callback
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
     * always false, remove mask feature since 3.11.0
     * @deprecated
     */
    mask: boolean;
    /**
     * True if VB is enabled, false if not.
     */
    enable: boolean;
  };
}): void;

/**
 * This method will be called when the “screen share” is clicked. Support for get screen share sources callback.
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
   * This api been removed in versions >= 3.12.0, please use other way generate signature.
   *
   * Generate each time you join a meeting or webinar through a server-side function where you can securely store SDK credentials.
   *
   * See Generate the SDK JWT key for details:
   *
   * https://developers.zoom.us/docs/meeting-sdk/auth/
   *
   * See the Sample Signature app for an example:
   *
   * https://github.com/zoom/meetingsdk-sample-signature-node.js
   * @deprecated
   */
  function generateSDKSignature(): string;
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
  /**
   * Adds a script to download a requirements.js file and a node to the HTML body for the Meeting SDK for Web to use.
   * Note that Chrome origin trials (OT) provide many new features before Chrome releases. See the following links for details:
   * https://developer.chrome.com/origintrials/#/trials/active and https://developer.chrome.com/blog/origin-trials/
   * The Meeting SDK for Web can use:
   * 1. PEPC(Page Embedded Permission Control - Cam/Mic/Geolocation). See: https://chromestatus.com/feature/5125006551416832
   * @category Join
   */
  function prepareWebSDK(
    origintrials?: Array<string>,
    webim?: string,
    jsmedia?: string,
  ): void;
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
   * @RateLimit 10s
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
     * Optional. An identifier for the user that you can get back from the Meeting API. Max length 36 char.
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
     * We remove sdkKey from join params since v4.0.0. You can just use signature.
     * @deprecated
     */
    sdkKey?: string;
    /**
     * Required. The signature to start or join a meeting. See https://developers.zoom.us/docs/meeting-sdk/auth/ for details.
     * As of v5.0.0, the signature requires the appKey field appKey:sdkKey or appKey:clientId. if not contain appKey, can't join meeting.
     */
    signature: string;
    /**
     * Optional. Token to allow local recording. See [Get a meeting's join token for local recording](https://developers.zoom.us/docs/api/rest/reference/zoom-api/methods/#operation/meetingLocalRecordingJoinToken) for details.
     */
    recordingToken?: string;
    /**
     * Optional. childToken.
     */
    childToken?: string;
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
   * Join a test meeting. JWT SDK signature only supports role=0.
   * @param args
   * @category Join
   * @RateLimit 10s
   */
  function joinTest(args: {
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
     * Optional. An identifier for the user that you can get back from the Meeting API. Max length 36 char.
     */
    customerKey?: string;
    /**
     * We remove sdkKey from join params since v4.0.0. You can just use signature.
     * @deprecated
     */
    sdkKey?: string;
    /**
     * Required. The signature to start or join a meeting. See https://developers.zoom.us/docs/meeting-sdk/auth/ for details.
     * As of v5.0.0, the signature requires the appKey field appKey:sdkKey or appKey:clientId. if not contain appKey, can't join test meeting.
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
    show: boolean;
  }): void;
  /**
   * Shows or hides the call out button to invite others by phone.
   * See for details: https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0062038.
   * @param args
   */
  function showCalloutFunction(args: {
    /**
     * Required
     */
    show: boolean;
  }): void;
  /**
   * Shows or hides the meeting header.
   * @param args
   */
  function showMeetingHeader(args: {
    /**
     * Required
     */
    show: boolean;
  }): void;
  /**
   * Shows or hides the record button.
   * @param args
   */
  function showRecordFunction(args: {
    /**
     * Required
     */
    show: boolean;
  }): void;
  /**
   * Shows or hides the join audio button.
   * @param args
   */
  function showJoinAudioFunction(args: {
    /**
     * Required
     */
    show: boolean;
  }): void;
  /**
   * Set customized polling URL. Only works when you enable **Enable Client SDK Customized Invite URL** flag for your account.
   * @param args
   * @RateLimit 10s
   */
  function setCustomizedPollingUrl(args: {
    /**
     * Customize create polling URL or callback.
     */
    create?: string | Function;
    /**
     * Customize edit polling URL or callback.
     */
    edit?: string | Function;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;
  /**
   * Set customized waiting room title and description.
   * @param args
   * @RateLimit 10s
   */
  function setCustomizeWaitingRoom(args: {
    /**
     * Customize waiting room title.
     */
    title: string;
    /**
     * Customize waiting room description.
     */
    desc?: string;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;
  /**
   * Shows or hides border around shared content.
   * @param args
   */
  function showPureSharingContent(args: {
    /**
     * Required, true to hide border, false to show it.
     */
    show: boolean;
  }): void;
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
    error?: Function;
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
    error?: Function;
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
    error?: Function;
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
    error?: Function;
  }): void;
  /**
   * Invites yourself to join by phone.
   * @param args
   * @RateLimit 10s
   */
  function callOut(args: {
    /**
     * userName.
     */
    userName: string;
    /**
     * Call out phone number.
     */
    phoneNumber: string;
    /**
     * CallOutOption
     */
    options?: CallOutOption;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;
  /**
   * Invites a participant to join by phone.
   * @param args
   * @RateLimit 10s
   */
  function inviteByPhone(args: {
    /**
     * The phone number. Example: +15553456789
     */
    phoneNumber: string;
    /**
     * Required. The name of the user starting or joining the meeting or webinar.
     */
    userName: string;
    /**
     * InvitePhoneOption
     */
    options?: InvitePhoneOption;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;
  /**
   * Invites Zoom Cloud Room Connector (CRC) device.
   * @param args
   * @RateLimit 10s
   */
  function inviteCRCDevice(args: {
    /**
     * Device IP address.
     */
    ip: string;
    /**
     * Device type: type=1 invites an H.323 device; type=2 invites a SIP device.
     */
    type: number;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;
  /**
   * Cancels Zoom Cloud Room Connector (CRC) device invitation.
   * @param args
   * @RateLimit 1s
   */
  function cancelInviteCRCDevice(args: {
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;
  /**
   * Mutes or unmutes a participant.
   * @param args
   * @RateLimit 1s
   */
  function mute(args: {
    /**
     * The participant's user ID.
     */
    userId: number;
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
    error?: Function;
  }): void;
  /**
   * Mutes or unmutes all attendees. Host or co-host only.
   * @param args
   * @RateLimit 5s
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
    error?: Function;
  }): void;
  /**
   * Renames the participant. Host or co-host only. The userId and oldName must be correct for this operation to succeed.
   * @param args
   * @RateLimit 5s
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
     * The participant's new name.
     */
    newName: string;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;
  /**
   * Ejects a participant from the meeting. Host or co-host only.
   * @param args
   * @RateLimit 5s
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
    error?: Function;
  }): void;
  /**
   * Stops or starts cloud recording. Host only.
   * @param args
   * @RateLimit 5s
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
    error?: Function;
  }): void;

  /**
   * Get focus mode status.
   * @param args
   */
  function getFocusModeStatus(args: {
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;

  /**
   * Stops or starts focus mode. Host/co-host only.
   * @param args
   * @RateLimit 5s
   */
  function focusMode(args: {
    /**
     * True to start or false to stop focus mode.
     */
    enable: boolean;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;
  /**
   * Locks or unlocks the meeting. Host or co-host only. If the meeting is locked, others can't join the meeting unless it is unlocked.
   * @param args
   * @RateLimit 5s
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
    error?: Function;
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
    error?: Function;
  }): void;
  /**
   * Ends the meeting. Host only.
   * @param args
   */
  function endMeeting(args: {
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;
  /**
   * Makes this user the host.
   * @param args
   * @RateLimit 2s
   */
  function makeHost(args: {
    /**
     * User ID.
     */
    userId: boolean;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;

  /**
   * Makes the user a co-host.
   * @param args
   * @RateLimit 2s
   */
  function makeCoHost(args: {
    /**
     * User ID.
     */
    userId: number;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;

  /**
   * Removes co-host status.
   * @param args
   * @RateLimit 2s
   */
  function withdrawCoHost(args: {
    /**
     * User ID.
     */
    userId: number;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;

  /**
   * Reclaims the host status if the user is the original host or a co-host.
   * @param args
   * @RateLimit 2s
   */
  function reclaimHost(args: {
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;

  /**
   * Claims host with host key.
   * Use ZoomMtg.inMeetingServiceListener('onClaimStatus', function(e){}) to listen for the claim result.
   * Only successful in meetings with no host.
   * @param args
   * @RateLimit 2s
   */
  function claimHostWithHostKey(args: {
    /**
     * host key
     */
    hostKey: string;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;

  /**
   * Puts the participant in the waiting room or lets the participant join the meeting.
   * @param args
   * @RateLimit 0.1s
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
    error?: Function;
  }): void;

  /**
   * Raise the current user's hand.
   * @param args
   * @RateLimit 1s
   */
  function raiseHand(args: {
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;

  /**
   * Lower the user's hand.
   * @param args
   * @RateLimit 1s
   */
  function lowerHand(args: {
    /**
     * The participant's user ID. if no userId, will lower the current user's hand.
     */
    userId?: number;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;

  /**
   * Enables the host to lower all user's hands.
   * @param args
   * @RateLimit 1s
   */
  function lowerAllHands(args: {
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;
  /**
   * Lets all participants in the waiting room join the meeting.
   * @param args
   * @RateLimit 1s
   */
  function admitAll(args: {
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;
  /**
   * Start screen share.
   * - Check the share privilege before starting screen share.
   * - If you start screen share, you will stop receiving others' shared content.
   * @param args
   * @RateLimit 1s
   */
  function startScreenShare(args: {
    /**
     * Whether the sharing is broadcast to breakout rooms. Only host or co-host have this privilege.
     */
    broadcastToBreakoutRoom?: boolean;
    /**
     * Option to show (default, false) or hide (true) the "Share Audio" checkbox when sharing a Chrome tab.
     */
    hideShareAudioOption?: boolean;
    /**
     * optimized for video share
     * If sharing a video file that is stored locally on the computer, we recommend using the video share feature, which will provide better quality due to decreased CPU usage.
     */
    optimizedForSharedVideo?: boolean;
    /**
     * sourceId: the sourceId of the shared content.
     */
    sourceId?: string;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  });

  /**
   * Sends private chat message to meeting participants. This API does not support sending chat messages in a webinar.
   * @param args
   * @RateLimit 1s
   */
  function sendChat(args: {
    /**
     * The message receiver's userId. If the userId is not provided, the message will be sent to everyone in the meeting.
     *
     * Determines if the user in the waiting room can send message only to the host or co-host or everyone in the waiting room.
     *
     * 0: send to all
     *
     * 4: send to waiting room
     *
     */
    userId?: number | 0 | 4;
    /**
     * The chat message to send. It cannot be undefined, null, or empty.
     */
    message: string;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;

  /**
   * Change leaveUrl after participants join the meeting.
   * @param args
   * @RateLimit 1s
   */
  function changeRedirectUrl(args: {
    /**
     * The URL to redirect participants who leave the meeting.
     */
    leaveUrl: number;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
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
    // reasonCode Return the reason the current user left.
    const reasonCode = {
      OTHER: 0, // Other reason.
      HOST_ENDED_MEETING: 1, // Host ended the meeting.
      SELF_LEAVE_FROM_IN_MEETING: 2, // User (self) left from being in the meeting.
      SELF_LEAVE_FROM_WAITING_ROOM: 3, // User (self) left from the waiting room.
      SELF_LEAVE_FROM_WAITING_FOR_HOST_START: 4, // User (self) left from waiting for host to start the meeting.
      MEETING_TRANSFER: 5, // The meeting was transferred to another end to open.
      KICK_OUT_FROM_MEETING: 6, // Removed from meeting by host or co-host.
      KICK_OUT_FROM_WAITING_ROOM: 7, // Removed from waiting room by host or 
        co-host.
      LEAVE_FROM_DISCLAIMER: 8, // User click cancel in disclaimer dialog 
    };
    
  });

  ZoomMtg.inMeetingServiceListener('onUserUpdate', function (data) {
    console.log(data);
  });
  ```
  @category Listener
   */
  function inMeetingServiceListener(
    event: 'onUserJoin' | 'onUserLeave' | 'onUserUpdate',
    callback: Function,
  ): void;
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
  function inMeetingServiceListener(
    event: 'receiveSharingChannelReady',
    callback: Function,
  ): void;
  /**
   * Listens for waiting room page status. >= 3.6.0 yourself/host/co-host can get this event
   * @param event 
   * @param callback 
   * Example:
   * ```js

  ZoomMtg.inMeetingServiceListener('onUserIsInWaitingRoom', function (data) {
    console.log('onUserIsInWaitingRoom', data);
  });

  ```
  @category Listener
   */
  function inMeetingServiceListener(
    event: 'onUserIsInWaitingRoom',
    callback: Function,
  ): void;
  /**
   * Listens for video preview page status.
   * @param event 
   * @param callback 
   * Example:
   * ```js
  
  ZoomMtg.inMeetingServiceListener('onPreviewPannel', function (data) {
    console.log('onPreviewPannel', data);
  });
  ```
  @category Listener
   */
  function inMeetingServiceListener(
    event: 'onPreviewPannel',
    callback: Function,
  ): void;
  /**
   * Listens for join time status
   * @param event 
   * @param callback 
   * The following is an example that returns the join speed after specific events, useful for building a dashboard or troubleshooting.
   * ```js
  var testTool = {
    joinSpeedTag: {
    sdkCallInit: 0, // not recorded, you can record in init success callback.
    sdkCallJoin: 1,
    userInPreviewPage: 2,
    userClickJoinPreview: 3,
    userInWaitingForHost: 4,
    userOutWaitingForHost: 5,
    userInWaitingRoom: 6,
    userOutWaitingRoom: 7,
    userJoinRWGSuccess: 8,
    userAudioDecodeSuccess: 9,
    userVideoDecodeSuccess: 10,
    userAudioEncodeSuccess: 11,
    userVideoEncodeSuccess: 12,
    userStartJoinAudio: 13,
    userJoinAudioSuccess: 14,
    userStartJoinVideo: 15,
    userJoinVideoSuccess: 16,
    userAudioVideoSuccess: 17, // not recorded, when all steps from 8 - 16 are true.
  },
  joinSpeed: [
  {
    tag: 'JOIN_SPEED',
    level: 0,
    text: 'sdk init',
    time: 0,
    timeStr: '',
  },
  {
    tag: 'JOIN_SPEED',
    level: 1,
    text: 'sdk call join',
    time: 0,
    timeStr: '',
  },
  {
    tag: 'JOIN_SPEED',
    level: 2,
    text: 'user in preview page',
    time: 0,
    timeStr: '',
  },
  {
    tag: 'JOIN_SPEED',
    level: 3, 
    text: 'user clicks join from preview',
    time: 0,
    timeStr: '',
  },
  {
    tag: 'JOIN_SPEED',
    level: 4,
    text: 'user waiting for host',
    time: 0,
    timeStr: '',
  },
  {
    tag: 'JOIN_SPEED',
    level: 5,
    text: 'user poll meeting started, start join',
    time: 0,
    timeStr: '',
  },
  {
    tag: 'JOIN_SPEED',
    level: 6,
    text: 'user in waiting room',
    time: 0,
    timeStr: '',
  },
  {
    tag: 'JOIN_SPEED',
    level: 7,
    text: 'user exits waiting room',
    time: 0,
    timeStr: '',
  },
  {
    tag: 'JOIN_SPEED',
    level: 8,
    text: 'user join success',
    time: 0,
    timeStr: '',
  },
  {
    tag: 'JOIN_SPEED',
    level: 9,
    text: 'user join success with audio decode init success',
    time: 0,
    timeStr: '',
  },
  {
    tag: 'JOIN_SPEED',
    level: 10,
    text: 'user join success with video decode init success',
    time: 0,
    timeStr: '',
  },
  {
    tag: 'JOIN_SPEED',
    level: 11,
    text: 'user join success with audio encode init success',
    time: 0,
    timeStr: '',
  },
  {
    tag: 'JOIN_SPEED',
    level: 12,
    text: 'user join success with video encode init success',
    time: 0,
    timeStr: '',
  },
  {
    tag: 'JOIN_SPEED',
    level: 13,
    text: 'user start join audio',
    time: 0,
    timeStr: '',
  },
  {
    tag: 'JOIN_SPEED',
    level: 14,
    text: 'user join audio success',
    time: 0,
    timeStr: '',
  },
  {
    tag: 'JOIN_SPEED',
    level: 15,
    text: 'user start join video',
    time: 0,
    timeStr: '',
  },
  {
    tag: 'JOIN_SPEED',
    level: 16,
    text: 'user join video success',
    time: 0,
    timeStr: '',
  },
  {
    tag: 'JOIN_SPEED',
    level: 17,
    text: 'user audio and video on (join finish)',
    time: 0,
    timeStr: '',
  },
  ],
  setJoinTime: function(joinTimeObj) {
    if (typeof joinTimeObj === 'object') {
      var tmpIndex = joinTimeObj.level;
      this.joinSpeed[tmpIndex] = Object.assign({}, joinTimeObj);
      return true;
    }
    return false;
  },
  setJoinTimeLevel: function(level, tmpTime) {
    var currentTimestamp = Date.now();
    if (tmpTime) {
      currentTimestamp = tmpTime;
    }
    var tmpIndex = this.joinSpeed.findIndex((item) => item.level === level);
    if (tmpIndex !== -1) {
      this.joinSpeed[tmpIndex] = Object.assign({}, this.joinSpeed[tmpIndex], {
        time: currentTimestamp,
        timeStr: new Date(currentTimestamp).toISOString(),
      });
      return true; // Indicates that item was replaced successfully
    }
    return false; // Indicates that item was not found
  },
  printObjectsAsTable: function(objectsArray) {
    // Extract keys (properties) from the first object to use as table headers
    var tmpHeaders = Object.keys(objectsArray[0]);
  
    // Find the maximum length of each column
    const maxLengths = tmpHeaders.map((header) =>
      Math.max(...objectsArray.map((obj) => String(obj[header]).length)),
    );
  
    // Print table tmpHeaders
    var headerRow = '';
    tmpHeaders.forEach((header, index) => {
      headerRow += header.padEnd(maxLengths[index] + 2);
    });
    console.log(headerRow);
    
      // Print table rows
      objectsArray.forEach((obj) => {
        var row = '';
        tmpHeaders.forEach((header, index) => {
          row += String(obj[header]).padEnd(maxLengths[index] + 2);
        });
        console.log(row);
      });
    },
    printJoinTime: function() {
      console.log('%c===============JOIN SPEED ================', 'color: red');

      if (!this.joinSpeed[this.joinSpeedTag.userOutWaitingRoom].time && this.joinSpeed[this.joinSpeedTag.userOutWaitingForHost].time) {
        //console.log(this.joinSpeed[this.joinSpeedTag.userAudioVideoSuccess].time, this.joinSpeed[this.joinSpeedTag.userOutWaitingForHost].time);
        console.warn('Your join time started from "out waiting for host":', this.joinSpeed[this.joinSpeedTag.userAudioVideoSuccess].time - this.joinSpeed[this.joinSpeedTag.userOutWaitingForHost].time, 'ms');
      }

      if (this.joinSpeed[this.joinSpeedTag.userOutWaitingRoom].time) {
        console.warn('Your join time started from "out waiting room":', this.joinSpeed[this.joinSpeedTag.userAudioVideoSuccess].time - this.joinSpeed[this.joinSpeedTag.userOutWaitingRoom].time, 'ms');
      } else if (this.joinSpeed[this.joinSpeedTag.userClickJoinPreview].time) {
        console.warn('Your join time started from clicking the join button in preview:', this.joinSpeed[this.joinSpeedTag.userAudioVideoSuccess].time - this.joinSpeed[this.joinSpeedTag.userClickJoinPreview].time, 'ms');
      } else {
        console.warn('Your join time started from calling SDK join:', this.joinSpeed[this.joinSpeedTag.userAudioVideoSuccess].time - this.joinSpeed[this.joinSpeedTag.sdkCallJoin].time, 'ms');
      }
      this.printObjectsAsTable(this.joinSpeed);
    }
 }
  
ZoomMtg.inMeetingServiceListener('onJoinSpeed', function (data) {
    console.log('inMeetingServiceListener onJoinSpeed', data);
    testTool.setJoinTime(data);

    var tmpCheckJoin = true;
    [testTool.joinSpeedTag.userAudioDecodeSuccess,
      testTool.joinSpeedTag.userVideoDecodeSuccess,
      testTool.joinSpeedTag.userAudioEncodeSuccess,
      testTool.joinSpeedTag.userVideoEncodeSuccess,
      testTool.joinSpeedTag.userStartJoinAudio,
      testTool.joinSpeedTag.userJoinAudioSuccess,
      testTool.joinSpeedTag.userStartJoinVideo,
      testTool.joinSpeedTag.userJoinVideoSuccess,
    ].forEach(item=>{
      if (!testTool.joinSpeed[item].time) {
        tmpCheckJoin = tmpCheckJoin & false;
      }

    });
    if (tmpCheckJoin) {
      if (!testTool.joinSpeed[testTool.joinSpeedTag.userAudioVideoSuccess].time) {
        testTool.setJoinTimeLevel(testTool.joinSpeedTag.userAudioVideoSuccess)
        //user audio and video on(join finish)
        testTool.printJoinTime();
      }
    }
  });

  

  ```
  
  @category Listener
  @title EventName onJoinSpeed
   */
  function inMeetingServiceListener(
    event: 'onJoinSpeed',
    callback: Function,
  ): void;
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
  function inMeetingServiceListener(
    event: 'onMeetingStatus',
    callback: Function,
  ): void;
  /**
   * Listens for transcriptions. Only works when "save closed captions" is on.
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
  function inMeetingServiceListener(
    event: 'onReceiveTranscriptionMsg' | 'onReceiveTranslateMsg',
    callback: Function,
  ): void;
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

  ZoomMtg.inMeetingServiceListener('onShareQos', function (data) {
    console.log('onShareQos', data);
  });
  ```
     * @category Listener
   */
  function inMeetingServiceListener(
    event: 'onAudioQos' | 'onVideoQos' | 'onShareQos',
    callback: Function,
  ): void;

  /**
   * Listens for claim status after calling claimHost with host key.
   * @param event 
   * @param callback
   * Example:
   * ```js
  ZoomMtg.inMeetingServiceListener('onClaimStatus', function (data) {
    console.log(data);
  });
  ```
  @category Listener
   */
  function inMeetingServiceListener(
    event: 'onClaimStatus',
    callback: Function,
  ): void;

  /**
   * Listens for user network quality change.
   * @param event 
   * @param callback 
   * Example:
  ```js
  ZoomMtg.inMeetingServiceListener('onNetworkQualityChange', function (data) {
    // {level: 0 || 1 || 2 || 3 || 4 || 5, userId, type: 'uplink' }
    // 0,1 => bad; 2 => normal; 3,4,5 => good;
    console.log(data);
  });
  ```
  @category Listener
   */
  function inMeetingServiceListener(
    event: 'onNetworkQualityChange',
    callback: Function,
  ): void;

  /**
   * Listens for the currently displayed user and the user's video order changes.
   * (mobile does not support.)
   * @param event 
   * @param callback 
   * Example:
  ```js
  ZoomMtg.inMeetingServiceListener('onVideoOrder', function (data) {
    // {
    //   view: 'speak-view' | 'gallery-view' | 'multi-speaker-view' | 'single-view',
    //   speakerBarCurrent: [],
    //   speakerActiveCurrent: [],
    //   multiSpeakerActiveCurrent: [],
    //   multiSpeakerMainCurrent: [],
    //   galleryMainCurrent: [],
    //   suspensionAllCurrent: [],
    //   singleActiveCurrent: [],
    // };
    console.log(data);
  });
  ```
  @category Listener
   */
  function inMeetingServiceListener(
    event: 'onVideoOrder',
    callback: Function,
  ): void;

  /**
   * Listens for `onFeedBackData` event.
   * @param event 
   * @param callback
   *  * The callback receives an object containing feedback data.
   * 
   * The `data` object passed to the callback contains the following fields:
   * - `enableFeedback` (number): Web-configured feedback setting. Possible values:
   *   - `1`: Feedback displayed randomly in meetings.
   *   - `2`: Feedback displayed in every meeting.
   * - `enableFeedbackTextField` (boolean): Indicates whether the text field for user feedback is enabled.
   * - `feedbackCustMessage` (string): Custom message displayed to users, as configured on the web.
   * - `survey` (string | boolean): The survey URL if a survey is set up for the meeting; otherwise, `false`.
   * - `nodeId` (number): The unique identifier of the user.
   * - `meetingDetails` (string): Binary representation of conference features.
   * - `deviceType` (string): The type of device used to join the meeting (e.g., "Mobile" or "Desktop").
   * - `meetingNumber` (number): The unique meeting number.
   * - `meetingId` (string): The unique meeting identifier.
   * - `trackingId` (string): A tracking identifier for logs.
   * - `confId` (string): The in-meeting service link identifier.
   * 
   * Example:
   * ```js
  ZoomMtg.inMeetingServiceListener('onFeedBackData', function (data) {
    console.log(data);
  });
  ```
    @category Listener
   */
  function inMeetingServiceListener(
    event: 'onFeedBackData',
    callback: Function,
  ): void;

  /**
   * Listens for recording change.
   * @param event 
   * @param callback
   * Example:
   * ```js
  ZoomMtg.inMeetingServiceListener('onRecordingChange', function (data) {
    console.log(data);
  });
  ```
    @category Listener
   */
  function inMeetingServiceListener(
    event: 'onRecordingChange',
    callback: Function,
  ): void;

  /**
   * Listens for share content change.
   * @param event 
   * @param callback
   * Example:
   * ```js
  ZoomMtg.inMeetingServiceListener('onShareContentChange', function (data) {
    console.log(data);
  });
  ```
    @category Listener
   */
  function inMeetingServiceListener(
    event: 'onShareContentChange',
    callback: Function,
  ): void;

  /**
   * Listens for recording change.
   * @param event 
   * @param callback
   * Example:
   * ```js
  ZoomMtg.inMeetingServiceListener('onReceiveChatMsg', function (data) {
    console.log(data);
  });
  ```
    @category Listener
   */
  function inMeetingServiceListener(
    event: 'onReceiveChatMsg',
    callback: Function,
  ): void;

  /**
   * Listens for virtual background (VB) status change.
   * @param event 
   * @param callback
   * Example:
   * ```js
    ZoomMtg.inMeetingServiceListener('onVbStatusChange', function (data) {
      console.log(data);
    });
    ```
      @category Listener
   */
  function inMeetingServiceListener(
    event: 'onVbStatusChange',
    callback: Function,
  ): void;

  /**
   * Listens for media capture permission after calling request media capture permission.
   * @param event 
   * @param callback
   * Example:
   * ```js
  ZoomMtg.inMeetingServiceListener('onMediaCapturePermissionChange', function (data) {
    // {allow: true || false}
    console.log(data);
  });
  ```
  @category Listener
   */
  function inMeetingServiceListener(
    event: 'onMediaCapturePermissionChange',
    callback: Function,
  ): void;

  /**
   * Listens for media capture status change.
   * @param event 
   * @param callback
   * Example:
   * ```js
  ZoomMtg.inMeetingServiceListener('onMediaCaptureStatusChange', function (data) {
    // {status: 0|1|2, userId: number}
    // 0=> not start, 1=> start, 2=> pause
    console.log(data);
  });
  ```
  @category Listener
   */
  function inMeetingServiceListener(
    event: 'onMediaCaptureStatusChange',
    callback: Function,
  ): void;

  /**
   * Listens for breakout room status change
   * @param event 
   * @param callback
   * Example:
   * ```js
  ZoomMtg.inMeetingServiceListener('onRoomStatusChange', function (data) {
    // {status: 2|3|4}
    // 2=> InProgress, 3=> Closing, 4=> Closed
    console.log(data);
  });
  ```
  @category Listener
   */
  function inMeetingServiceListener(
    event: 'onRoomStatusChange',
    callback: Function,
  ): void;

  /**
   * Listens for focus mode status change
   * @param event 
   * @param callback
   * Example:
   * ```js
  ZoomMtg.inMeetingServiceListener('onFocusModeStatusChange', function (data) {
    // {status: boole}
    console.log(data);
  });
  ```
  @category Listener
   */
  function inMeetingServiceListener(
    event: 'onFocusModeStatusChange',
    callback: Function,
  ): void;

  /**
   * Listens for audio active speaker
   * @param event 
   * @param callback
   * Example:
   * ```js
  ZoomMtg.inMeetingServiceListener('onActiveSpeaker', function (data) {
    // [{userId: number, userName: string}]
    console.log(data);
  });
  ```
  @category Listener
   */
  function inMeetingServiceListener(
    event: 'onActiveSpeaker',
    callback: Function,
  ): void;

  /**
   * Listens for Picture In Picture status
   * @param event 
   * @param callback
   * Example:
   * ```js
  ZoomMtg.inMeetingServiceListener('onPictureInPicture', function (data) {
    // { pip: boolean },
    console.log(data);
  });
  ```
  @category Listener
   */
  function inMeetingServiceListener(
    event: 'onPictureInPicture',
    callback: Function,
  ): void;

  /**
   * This is deprecated in versions >= 3.0.0, so you can remove it.
   * @deprecated
   */
  function reRender(args: {
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;
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
    error?: Function;
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
    audio?: boolean;
    /**
     * If true, subscribe to video QoS data.
     */
    video?: boolean;
    /**
     * If true, subscribe to share QoS data.
     */
    share?: boolean;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;
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
    audio?: boolean;
    /**
     * If true, unsubscribe to video QoS data.
     */
    video?: boolean;
    /**
     * If true, unsubscribe to share QoS data.
     */
    share?: boolean;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;
  /**
   * Checks if the browser supports virtual background. Must enable "virtual background" to use this function.
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
   * Get virtual background status.
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
   * Update virtual background image list.
   * @param args
   * @category VirtualBackground
   * @RateLimit 1s
   */
  function updateVirtualBackgroundList(args: {
    /**
     * Virtual background (VB) list. To disable VB, use vbList=[].
     */
    vbList?: Array<VbImageInfoType>;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;
  /**
   * Change virtual background (VB) to the specified string from the VB list if the names match.
   * If id='blur', blur background instead.
   * Note that you cannot remove the VB once a VB image or blur is set, but you can switch between different VBs.
   * @param args
   * @category VirtualBackground
   * @RateLimit 1s
   */
  function setVirtualBackground(args: {
    /**
     * virtual background ID
     */
    id?: string;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;
  /**
   *
   * Lock virtual background to a specific image.
   * @param args
   * @category VirtualBackground
   * @RateLimit 1s
   */
  function lockVirtualBackground(args: {
    /**
     * Lock or unlock virtual background.
     */
    isLock: boolean;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;

  /**
   * When you use the Meeting SDK for web in an Electron application, if this method is registered, it calls `getVideoSourcesCallBack` when a user clicks "screen share" to obtain the application information returned by Electron that can share the desktop. Provide the callback function return `desktopCapturer` to share sources in the Electron app.
   * @param args
   * Example:
   * ```js
    const getVideoSources = async () => {
      const result = await window.electron.getSources();
      return result;
    }
    ZoomMtg.shareSource({
      getVideoSourcesCallBack: getVideoSources,
      success: function () {},
      error: function () {}
    });
    ```
  */

  function shareSource(args: {
    /**
     * Callback function needed to return the source of the Electron share:
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

  /**
   * Get the supported or unsupported features on the current browser/platform.
   *
   * @returns A `SupportFeatures` object. The object has following properties:
   * - `platform`: string, the browser version info or platform version info.
   * - `supportFeatures`: Array<string>, contains all the support features on the current platform.
   * - `unSupportFeatures`: Array<string>, contains all the unsupported features on the current platform.
   */
  function checkFeatureRequirements(): SupportFeatures;

  /**
   * Stop Incoming Audio
   */
  function stopIncomingAudio(args: {
    /**
     * Set stop = true to stop incoming audio.
     */
    stop: boolean;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;

  /**
   * Media capture permission
   * For current user to request media capture permission.
   * Use ZoomMtg.inMeetingServiceListener('onMediaCapturePermissionChange', function({allow: boolean}){}) to listen for the request result.
   */
  function mediaCapturePermission(args: {
    /**
     * Set operate = 'request' to request media capture permission.
     */
    operate: string;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;

  /**
   * Start, pause, or stop media capture.
   * Use ZoomMtg.inMeetingServiceListener('onMediaCaptureStatusChange', function({status: 0|1|2, userId}){}) to listen for the media capture status.
   */
  function mediaCapture(args: {
    /**
     * record values = "start" | "pause" | "stop"
     */
    record: string;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;
  /**
   * Ask the host to join the breakout room to help. The host can decline or postpone the request for help.
   * - Only a non-host or non-co-host can call this method.
   * @param args
   * @category BreakoutRoom
   */
  function askForHelp(args: {
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;
  /**
   * Postpone the request for help.
   * - Only the host can call this method.
   * @category BreakoutRoom
   */
  function postponeHelping(args: {
    /**
     * User ID of the user who requested help.
     */
    userId: number;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;
  /**
   * Host and co-host create breakout rooms.
   * @category BreakoutRoom
   *
   */
  function createBreakoutRoom(args: {
    /**
     * data: number | string | Array<string>. Three types of parameters:
     *  - number : the number of rooms to create. The specified number of rooms will be created and the room will be automatically named.
     *  - string : the name of the room. The specified name of room will be created.
     *  - Array<string>: list of room names. The specified rooms will be created.
     */
    data: number | string | Array<string>;
    /**
     * pattern BreakoutRoomAllocationPattern; How to assign the participants to the rooms. Default is `Manually`
     *  - `BreakoutRoomAllocationPattern.auto`: Distribute participants evenly to each room.
     *  - `BreakoutRoomAllocationPattern.manually`: Assign participants manually later.
     *  - `BreakoutRoomAllocationPattern.selfSelect`: Participants will choose the room to join.
     *
     *  - Room List: success
     *  - Errors:
     *    - INVALID_OPERATION (breakout room has started!)
     *    - INVALID_PARAMETERS (exceed maximum size): maximum_size = 50; if support big rooms plan, up to 100
     */
    pattern?: BreakoutRoomAllocationPattern;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;
  /**
   *
   * Open the created rooms (host or co-host only).
   * @category BreakoutRoom
   */
  function openBreakoutRooms(args: {
    /**
     * Room options. Default options = {
      isAutoJoinRoom: false,
      isBackToMainSessionEnabled: true,
      isTimerEnabled: false,
      timerDuration: 1800,
      notNotifyMe: false,
      needCountDown: true,
      waitSeconds: 60,
     */
    options?: RoomOption;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;
  /**
   *
   * Close the room (host and co-host only).
   * @category BreakoutRoom
   */
  function closeBreakoutRooms(args: {
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;
  /**
   * Host and cohost can broadcast content in the main session and all rooms.
   * @category BreakoutRoom
   */
  function broadcast(args: {
    /**
     * Content of broadcast.
     */
    content: string;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;
  /**
   * Assign an unassigned participant to a room (host and co-host only).
   * @category BreakoutRoom
   */
  function assignUserToBreakoutRoom(args: {
    /**
     * userId user ID.
     */
    userId: number;
    /**
     * Target room ID. The getBreakoutRooms method returns the breakout room ID (boId).
     */
    targetRoomId: string;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;

  /**
   * Move a participant in room to the specified room (host and co-host only).
   * @category BreakoutRoom
   */
  function moveUserToBreakoutRoom(args: {
    /**
     * User ID
     */
    userId: number;
    /**
     * Target room ID. The getBreakoutRooms method returns the breakout room ID (boId).
     */
    targetRoomId: string;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;
  /**
   * Join a breakout room
   *  - Join only after the room is open.
   * @category BreakoutRoom
   */
  function joinBreakoutRoom(args: {
    /**
     * The room ID.
     */
    roomId: string;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;

  /**
   * Leave the room
   * - If the participant is not allowed to leave a room, the participant cannot return to the main session.
   * @category BreakoutRoom
   */
  function leaveBreakoutRoom(args: {
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;
  /**
   * Get the current breakout room.
   * @category BreakoutRoom
   */
  function getCurrentBreakoutRoom(args: {
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): {
    attendeeStatus: BreakoutRoomAttendeeStatus;
    name: string;
    roomId: string;
  };
  /**
   *
   * Get breakout room options.
   * @category BreakoutRoom
   */
  function getBreakoutRoomOptions(args: {
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): RoomOption;
  /**
   *
   * The status of the breakout room.
   * @category BreakoutRoom
   */
  function getBreakoutRoomStatus(args: {
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): BreakoutRoomControlStatus;
  /**
   * The break room status of the attendee.
   * @category BreakoutRoom
   */
  function getUserStatus(args: {
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): BreakoutRoomAttendeeStatus;
  /**
   * Gets the unassigned list of attendees.
   * @category BreakoutRoom
   */
  function getUnassignedAttendeeList(args: {
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;
  /**
   * Pins the corresponding user.
   */
  function operatePin(args: {
    /**
     * operate 'add' | 'replace' | 'remove' spotlight.
     */
    operate: 'add' | 'replace' | 'remove';
    /**
     * userId A valid user ID in the current meeting.
     */
    userId: number;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;
  /**
   * Gets the pinned userId list.
   */
  function getPinList(args: {
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): number[];
  /**
   * Allows multiple users to be pinned.
   */
  function allowMultiPin(args: {
    /**
     * userId A valid user ID in the current meeting.
     */
    userId: number;
  }): void;
  /**
   * Operates Spotlight user (host and cohost only).
   */
  function operateSpotlight(args: {
    /**
     * operate 'add' | 'replace' | 'remove' spotlight.
     */
    operate: 'add' | 'replace' | 'remove';
    /**
     * A valid user ID in the current meeting.
     */
    userId: number;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): void;
  /**
   * Gets the Spotlight userId list.
   */
  function getSpotlightList(args: {
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): number[];
  /**
   * Gets the getChildTokens, maximum count 20.
   * Times exceeds will return get token error.
   * Cannot be used for child node applications.
   * @RateLimit 1s
   */
  function getChildTokens(args: {
    count: number;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  }): number[];
  /**
   * Set active speaker.
   * Only the parent node can set active speakers.
   * The parent node needs to have joined audio and unmute, the child node needs leave audio.
   * @RateLimit 1s
   */
  function setActiveSpeaker(args: {
    /**
     * userId A valid user ID in the current meeting.
     */
    userId: number;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  });
  /**
   * Mirrors current video.
   * Requires SAB to be enabled.
   * Preview and Waiting room not support.
   */
  function mirrorVideo(args: {
    /**
     * Mirrors current video.
     */
    mirrored: boolean;
    /**
     * Callback function on success.
     */
    success?: Function;
    /**
     * Callback function in the event of an error.
     */
    error?: Function;
  });
}
