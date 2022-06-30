declare let initArgs: {
  debug?: boolean; //optional
  leaveUrl: string; //required
  webEndpoint?: string; // PSO option
  showMeetingHeader?: boolean; //option
  disableInvite?: boolean; //optional
  disableCallOut?: boolean; //optional
  disableRecord?: boolean; //optional
  disableJoinAudio?: boolean; //optional
  audioPanelAlwaysOpen?: boolean; //optional
  showPureSharingContent?: boolean; //optional
  isSupportAV?: boolean; //optional,
  isSupportChat?: boolean; //optional,
  isSupportQA?: boolean; //optional,
  isSupportCC?: boolean; //optional,
  isSupportPolling?: boolean; //optional,
  isSupportBreakout?: boolean; //optional,
  screenShare?: boolean; //optional,
  rwcBackup?: string; //optional,
  videoDrag?: boolean; //optional,
  sharingMode?: string; //optional,
  videoHeader?: boolean; //optional,
  isLockBottom?: boolean; // optional,
  isSupportNonverbal?: boolean; // optional,
  isShowJoiningErrorDialog?: boolean; // optional,
  /** Customize invite url format, https://yourdomain/{0}?pwd={1}, this optional default not work
  * need request zoom enable `Enable Client SDK Customize Invite Url` >=2.4.0 */
  inviteUrlFormat?: string;
  loginWindow?: {
    width: string;
    height: string;
  }; // optional,
  meetingInfo?: Array<MeetingInfoType>; // optional
  disableVoIP?: boolean; // optional
  disableReport?: boolean; // optional
  disablePreview?: boolean; // optional
  disableCORP?: boolean; // optional
  onRetryCallback?: boolean; // optional
  enableHD?: boolean; // optional
  helper?: string; // optional
  externalLinkPage?: string // optional
  success?: Function;
  error?: Function;
};

type MeetingInfoType =
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

declare enum WebSDKInMeetingEvent {
  onUserJoin, // only support meeting
  onUserLeave, // only support meeting
  onUserIsInWaitingRoom, // only support meeting
  onMeetingStatus // 1(connecting), 2(connected), 3(disconnected), 4(reconnecting)
}

export enum BreakoutRoomControlStatus {
  NotStarted = 1,
  InProgress = 2,
  Closing = 3,
  Closed = 4
}

export enum BreakoutRoomStatus {
  NoToken = 1,
  GotToken = 2,
  Started = 3,
  Closing = 4,
  Closed = 5
}

export declare namespace ZoomMtgLang {
  /**
   * load Zoom office support lang
   * 'de-DE', 'es-ES', 'en-US', 'fr-FR', 'jp-JP', 'pt-PT', 'ru-RU', 'zh-CN', 'zh-TW', 'ko-KO', 'vi-VN', 'it-IT'
   * @param lang
   *
   */
  function load(lang: string): Promise<any>;
  /**
   * load you language resource from json url(https://source.zoom.us/2.2.0/lib/lang/en-US.json) or json object
   * @param url you language resource json link or resource object
   * @param lang you assign lang name
   */
  function load(url: string | object, lang: string): Promise<any>;
  /**
   * change you UI language
   * 'de-DE', 'es-ES', 'en-US', 'fr-FR', 'jp-JP', 'pt-PT', 'ru-RU', 'zh-CN', 'zh-TW', 'ko-KO', 'vi-VN', 'it-IT' or you loaded lang
   * @param lang
   *
   */
  function reload(lang: string): void;

  /**
   * get one lang all resource object
   * @param lang
   *
   */
  function getAll(lang: string): object;

  /**
   * get current lang specific key's value
   * @param key
   *
   */
  function get(key: string): void;
  /**
   * get current lang
   *
   */
  function getCurrentLang(): string;
  /**
   * get you loaded language array
   *
   */
  function getSupportLanguage(): Array<string>;
  /**
   * change to youself support languages
   * @param langArray  you want support languages array, will replace default ['de-DE', 'es-ES', 'en-US', 'fr-FR', 'jp-JP', 'pt-PT', 'ru-RU', 'zh-CN', 'zh-TW', 'ko-KO', 'vi-VN', 'it-IT']
   */
  function setSupportLanguage(langArray: Array<string>): void;
}
export namespace ZoomMtg {
  const i18n: typeof ZoomMtgLang;
  /**
   * Use APIKey/Secret
   * Don't Generate Signature in front end, please generate backend
   * https://marketplace.zoom.us/docs/sdk/native-sdks/web/signature
   */
  function generateSignature(args: {
    apiKey: string;
    apiSecret: string;
    meetingNumber: string;
    role: string;
    success?: Function;
    error?: Function;
  }): string;
  /**
   * Use SDKKey/Secret
   * Don't Generate Signature in front end, please generate backend
   * https://marketplace.zoom.us/docs/sdk/native-sdks/web/signature
   */
  function generateSDKSignature(args: {
    sdkKey: string;
    sdkSecret: string;
    meetingNumber: string;
    role: string;
    success?: Function;
    error?: Function;
  }): string;
  function setZoomJSLib(path?: string, dir?: string): void;
  function preLoadWasm(): void;
  /*
   * origintrials provide many new feature before chrome release,  https://developer.chrome.com/origintrials/#/trials/active
   * https://developer.chrome.com/blog/origin-trials/
   * WebSDK can use:
   * 1. SAB OT will enable WebSDK gallery view(Chrome 92 to 103)
   * 2. WebAssembly SIMD improve video/shairng performace (Chrome91 release) https://chromestatus.com/feature/6533147810332672
   * 3. WebCodecs will solve response time when start video (Chrome94 release) https://chromestatus.com/feature/5669293909868544
   */
  function prepareWebSDK(origintrials?: Array<string>): void;
  /*
    please use prepareWebSDK instead. prepareJssdk will drop sone.
    */
  function prepareJssdk(origintrials?: Array<string>): void;
  function init(args: typeof initArgs): void;
  function join(args: {
    meetingNumber: string | number;
    userName: string;
    userEmail?: string;
    passWord?: string;
    customerKey?: string;
    tk?: string;
    zak?: string;
    apiKey?: string;
    sdkKey?: string;
    signature: string;
    success: Function;
    error: Function;
  }): void;
  function showInviteFunction(args: { show: boolean }): void;
  function showCalloutFunction(args: { show: boolean }): void;
  function showMeetingHeader(args: { show: boolean }): void;
  function showRecordFunction(args: { show: boolean }): void;
  function showJoinAudioFunction(args: { show: boolean }): void;
  function showPureSharingContent(args: { show: boolean }): void;
  function getAttendeeslist(args: {
    // only meeting
    success?: Function;
    error?: Function;
  }): void;
  /**
   * will drop in version 2.5.0, change to getBreakoutRooms
   */
  function getBreakoutRoomList(args: {
    // only meeting
    success?: Function;
    error?: Function;
  }): void;
  function getBreakoutRooms(args: {
    // only meeting
    success?: Function;
    error?: Function;
  }): void;
  function getCurrentUser(args: { success: Function; error?: Function }): void;
  function setLogLevel(level?: 'info' | 'error' | 'silent'): void;
  function getCurrentMeetingInfo(args: {
    success: Function;
    error?: Function;
  }): void;
  function callOut(args: { success?: Function; error?: Function }): void;
  function inviteByPhone(args: {
    phoneNumber: string; // +1123456789
    userName: string;
    success?: Function;
    error?: Function;
  }): void;
  function inviteCRCDevice(args: {
    ip: string;
    type: Number;
    success?: Function;
    error?: Function;
  }): void;
  function cancelInviteCRCDevice(args: {
    success?: Function;
    error?: Function;
  }): void;
  function mute(args: {
    userId: Number;
    mute: boolean;
    success?: Function;
    error?: Function;
  }): void;
  function muteAll(args: {
    muteAll: boolean;
    success?: Function;
    error?: Function;
  }): void;
  function rename(args: {
    userId: number;
    oldName: string;
    newName: string;
    success?: Function;
    error?: Function;
  }): void;
  function expel(args: {
    userId: number;
    success?: Function;
    error?: Function;
  }): void;
  function record(args: {
    record: boolean;
    success?: Function;
    error?: Function;
  }): void;
  function lockMeeting(args: {
    lockMeeting: boolean;
    success?: Function;
    error?: Function;
  }): void;
  function leaveMeeting(args: { success?: Function; error?: Function }): void;
  function endMeeting(args: { success?: Function; error?: Function }): void;
  function putOnHold(args: {
    userId: number;
    hold: boolean;
    success?: Function;
    error?: Function;
  }): void;
  function inMeetingServiceListener(event: string, callback: Function): void;
  function reRender(args: { success?: Function; error?: Function }): void;
  function getWebSDKVersion(args: {
    success?: Function;
    error?: Function;
  }): void;
}
