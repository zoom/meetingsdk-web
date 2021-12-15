/**
 * Define error types of operations.
 * - INVALID_OPERATION: The operation is invalid, perhaps causeed by the duplicated operations.
 * - INTERNAL_ERROR: The remote service is temporarily unavailable.
 * - INSUFFICIENT_PRIVILEGES: The operation is only applicable for host or co-host.
 * - OPERATION_TIMEOUT: The operation is timeout, try again later.
 * - IMPROPER_MEETING_STATE: The user is not in meeting, refer to the relevant reason for the detail.
 *  - `closed`: The meeting is not joined.
 *  - `on hold`: You are on hold.
 *  - `reconnecting`: The meeting is reconnecting.
 * - INVALID_PARAMETERS: The parameters passing to the method is invala, perhaps the wrong user id or the wrong value, refer to the relevant reason for the detail.
 * - OPERATION_LOCKED: The operation can not be completed because the relevant property is locked, refer to the relevant reason for the detail.
 */
export type ErrorTypes =
  | 'INVALID_OPERATION'
  | 'INTERNAL_ERROR'
  | 'OPERATION_TIMEOUT'
  | 'INSUFFICIENT_PRIVILEGES'
  | 'IMPROPER_MEETING_STATE'
  | 'INVALID_PARAMETERS'
  | 'OPRATION_LOCKED';
export interface ExecutedFailure {
  type: ErrorTypes;
  reason: string;
}
/**
 * Interface for the result of check system requirements.
 * > if `audio` is `false`, it means the system cannot support voip, but you can join the audio by phone.
 */
export interface MediaCompatiblity {
  /**
   */
  audio: boolean;
  /**
   */
  video: boolean;
  /**
   */
  screen: boolean;
}
/**
 * The result of asynchronous operation. It is a promise object.
 * - '': Success
 * - ExecutedFailure: Failure. Use `.catch(error=>{})` or `try{ *your code* }catch(error){}` to handle the errors.
 */
export type ExecutedResult = Promise<'' | ExecutedFailure>;
/**
 * Interface of recording information
 */
export interface RecordingInfo {
  /**
   * User's custom disclaimer info, if set
   */
  recordingDisclaimer: Record<string, any>;
  /**
   * User's custom disclaimer info to show when initiating the recording, if set
   */
  recordingDisclaimerForRecorder: Record<string, any>;
  /**
   * Attribute for if the user enabled recording reminder
   */
  isUserEnableRecordingReminder: boolean;
}
/**
 * Interface of a participant
 */
export interface Participant {
  /**
   * Identify of a user
   */
  userId: number;
  /**
   * Display name of a user.
   */
  displayName: string;
  /**
   * Audio state of a user.
   * - `''`: No audio.
   * - `computer`: Joined by computer audio.
   * - `phone`: Joined by phone
   */
  audio: string;
  /**
   * Whether audio is muted.
   */
  muted: boolean;
  /**
   * Whether the user is host.
   */
  isHost: boolean;
  /**
   * Whether the user is co-host.
   */
  isCoHost: boolean;
  /**
   * Whether the user is guest (not attached to the account )
   */
  isGuest: boolean;
  /**
   * The avatar of a user.
   * You can set the avatar in the [web profile](https://zoom.us/profile).
   */
  avatar: string;
  /**
   * Whether the user is phone call user.
   */
  isPhoneUser: boolean;
  /**
   * Whether the user is raised hand.
   */
  bRaiseHand: boolean;
  /**
   * Whether the user is on hold.
   */
  bHold: boolean;
  /**
   * Whether the user is started video.
   */
  bVideoOn: boolean;
  /**
   * Whether the user is started share.
   */
  sharerOn: boolean;
  /**
   * Whether the user is allowed to talk.
   * Available in the webinar
   */
  isAllowToTalk?: boolean;
  /**
   * Nonverbal feedback of a user
   */
  feedback: number;
  /**
   * Whether the share is paused
   */
  sharePause: boolean;
  /**
   * User's SDK key, if using one
   */
  sdkKey: string;
  astAdmin?: boolean;
  rmcAdmin?: boolean;
  /**
   * Whether the participant started recordiing on local computer
   */
  bLocalRecord?: boolean;
}
/**
 * Interface of meeting information
 */
export interface MeetingInfo {
  /**
   * meeting number
   */
  meetingNumber: number;
  /**
   * password if it exists
   */
  password: string;
  /**
   * tel password if it exists
   */
  telPwd: string;
  /**
   * user name
   */
  userName: string;
  /**
   * user id
   */
  userId: number;
  /**
   * user email
   */
  userEmail: string;
  /**
   * meeting inviteEmail key
   */
  inviteEmail: string;
  /**
   * user customer key
   */
  customerKey: string;
  /**
   * The topic of meeting
   */
  meetingTopic: string;
  /**
   * The encryption type of the meeting
   */
  encryptionType: 'None' | 'AES ECB' | 'AES GCM';
  /**
   * The server region
   */
  region: string;
  /**
   * The server network
   */
  network: string;
  /**
   * Whether the user is in the meeting
   */
  isInMeeting: boolean;
  /**
   * Language for sdk
   */
  lang: string;
  /**
   * zoom meeting uuid
   */
  meetingId: string;
  /**
   * web endpoint
   */
  webEndpoint: string;
  /**
   * participant id
   */
  participantId: number;
  /**
   * Recording info
   */
  recordingInfo: RecordingInfo;
}
/**
 * Interface to define a custom button for the Toolbar "More" dropdown menu
 */
export declare interface CustomizeButton {
  /**
   * The button's label
   */
  text: string;
  /**
   * Callback when the button's clicked
   */
  onClick: Function;
  /**
   * Classname
   */
  className?: string;
}
/**
 * Arguments and options for joining a meeting
 */
export interface JoinOptions {
  /**
   * @param apiKey The Web SDK API key
   */
  apiKey: string;
  /**
   * @param signature Generated signature; please see docs for more info
   */
  signature: string;
  /**
   * @param meetingNumber The Zoom Meeting number
   */
  meetingNumber: string;
  /**
   * @param password The Zoom Meeting password
   */
  password?: string;
  /**
   * @param userName The user's name
   */
  userName: string;
  /**
   * @param userEmail The user's email
   */
  userEmail?: string;
  /**
   * @param customerKey
   */
  customerKey?: string;
  /**
   * @param tk Optional 'tk' param to join a webinar with registration
   */
  tk?: string;
  /**
   * @param success join success callback
   */
  success?: Function;
  /**
   * @param error join error callback
   */
  error?: Function;
}
export type MeetingInfoType = 'topic' | 'host' | 'mn' | 'pwd' | 'telPwd' | 'invite' | 'participant' | 'dc' | 'enctype';
export interface InitOptions {
  debug?: boolean;
  /**
   * Renders the toolbar and main-panel-view using ReactDOM into the given container
   * @param zoomAppRoot The HTML element, typically a <div>, to render the toolbar in
   */
  zoomAppRoot: HTMLElement | undefined;
  /**
   * @param assetPath default 'https://source.zoom.us/{version}/lib/av'
   */
  assetPath?: string;
  /**
   * @param webEndpoint default 'zoom.us'
   */
  webEndpoint?: string;
  /**
   * @param language default 'en-US'
   */
  language?: string;
  /**
   * @param customize optional customization options for the embedded client
   */
  customize?: {
    /**
     * Customization options for the client toolbar
     */
    toolbar?: {
      buttons?: Array<CustomizeButton>;
    };
    /**
     * @param meetingInfo customize options for meeting info attributes
     */
    meetingInfo?: Array<MeetingInfoType>;
  };
}
export declare namespace EmbeddedClient {
  /**
   * Initializes the M-SDK Components client
   * @param args init options
   */
  function init(args: InitOptions): ExecutedResult;
  /**
   * Joins a meeting and renders the client
   * @param args join options
   */
  function join(args: JoinOptions): ExecutedResult;
  /**
   * Gets the current user's info
   */
  function getCurrentUser(): Participant | null;
  /**
   * Gets the current meeting's info
   */
  function getCurrentMeetingInfo(): MeetingInfo;
  /**
   * Gets the list of participants
   */
  function getAttendeeslist(): Participant[];
  /**
   * Stop the audio
   * - It works only the audio flag is `true` in the media constraints.
   *
   * Version >= 2.1.1
   * @returns executed promise.
   */
  function stopAudio(): ExecutedResult;
  /**
   * Toggles mute
   * @param mute true to mute, false to unmute
   * @param userId user to toggle mute for
   */
  function mute(mute: boolean, userId?: Number): ExecutedResult;
  /**
   * Mutes all participants
   * @param muteAll true to mute, false to unmute
   */
  function muteAll(muteAll: boolean): ExecutedResult;
  /**
   * Renames participant
   * @param newName new name
   * @param userId user to rename
   */
  function rename(newName: string, userId: number): ExecutedResult;
  /**
   * Admits a participant from the waiting room
   * @param userId user to admit
   */
  function admit(userId: number): ExecutedResult;
  /**
   * Admits all participants in waiting room
   */
  function admitAll(): ExecutedResult;
  /**
   * Expels a user from the meeting
   * @param userId user to expel
   */
  function expel(userId: number): ExecutedResult;
  /**
   * Starts, stops, or pauses cloud recording
   * @param record
   */
  function record(record: 'start' | 'pause' | 'stop'): ExecutedResult;
  /**
   * Locks meeting
   * @param lockMeeting true to lock, false to unlock
   */
  function lockMeeting(lockMeeting: boolean): ExecutedResult;
  /**
   * Leaves the meeting. If leaving as a host, a userId of the next host should be passed in as an argument
   * @param userId The user ID to assign host to (if leaving as a host)
   */
  function leaveMeeting(userId?: number): ExecutedResult;
  /**
   * Ends the meeting
   */
  function endMeeting(): ExecutedResult;
  /**
   * Toggles if a user is on hold
   * @param userId user to toggle hold status for
   * @param hold true to put on hold, false to remove from hold
   */
  function putOnHold(userId: number, hold: boolean): ExecutedResult;
  /**
   * Checks the compatibility of the current browser.
   * Use this method before calling {@link init} to check if the SDK is compatible with the web browser.
   *
   * Version >= 2.1.1
   * @returns A `MediaCompatiblity` object. The object has following properties:
   * - `audio`: boolean, whether the audio is compatible with the current web browser.
   * - `video`: boolean, whether the video is compatible with the current web browser.
   * - `screen`: boolean, whether the screen is compatible with the current web browser.
   */
  function checkSystemRequirements(): MediaCompatiblity;
}

export declare namespace ZoomMtgEmbedded {
  const VERSION: string;
  function createClient(): typeof EmbeddedClient;
}

export default ZoomMtgEmbedded;
