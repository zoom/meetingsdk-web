/**
 * Define error types of operations.
 * - INVALID_OPERATION: The operation is invalid, perhaps caused by duplicated operations.
 * - INTERNAL_ERROR: The remote service is temporarily unavailable.
 * - INSUFFICIENT_PRIVILEGES: The operation is only applicable for a host or co-host.
 * - OPERATION_TIMEOUT: The operation timed out, try again later.
 * - IMPROPER_MEETING_STATE: The user is not in the meeting, see the relevant reason for details.
 *  - `closed`: The meeting is not joined.
 *  - `on hold`: The user is on hold (in a waiting room).
 *  - `reconnecting`: The meeting is reconnecting.
 * - INVALID_PARAMETERS: The parameters passing to the method is invalid, perhaps the wrong user ID or the wrong value, see the relevant reason for details.
 * - OPERATION_LOCKED: The operation can not be completed because the relevant property is locked, see the relevant reason for details.
 */
export type ErrorTypes =
  | 'INVALID_OPERATION'
  | 'INTERNAL_ERROR'
  | 'OPERATION_TIMEOUT'
  | 'INSUFFICIENT_PRIVILEGES'
  | 'IMPROPER_MEETING_STATE'
  | 'INVALID_PARAMETERS'
  | 'OPERATION_LOCKED';
export interface ExecutedFailure {
  type: ErrorTypes;
  reason: string;
}
/**
 * Interface for the result of check system requirements.
 * > if `audio` is `false`, it means the system cannot support VoIP, but you can join the audio by phone.
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
export type ExecutedResult = Promise<string | ExecutedFailure>;
/**
 * Interface of chat message
 */
export interface ChatMessage {
  /**
   * message id,used for delete/modify message
   */
  id?: string;
  /**
   * message content
   */
  message: string;
  /**
   * message sender, includes name,userId and avatar
   */
  sender: { name: string; userId: number; avatar?: string };
  /**
   * message receiver,inclides name,userId
   */
  receiver: {
    name: string;
    userId: number;
  };
  /**
   * timestamp of message
   */
  timestamp: number;
}
/**
 * Interface for recording information.
 */
export interface RecordingInfo {
  /**
   * User's custom disclaimer information, if set.
   */
  recordingDisclaimer: Record<string, any>;
  /**
   * User's custom disclaimer information to show when initiating the recording, if set.
   */
  recordingDisclaimerForRecorder: Record<string, any>;
  /**
   * Attribute if the user enabled a recording reminder.
   */
  isUserEnableRecordingReminder: boolean;
}
/**
 * Status of cloud recording
 */
export enum RecordingStatus {
  Recording = 'Recording',
  Paused = 'Paused',
  Stopped = 'Stopped'
}
/**
 * Interface for a participant.
 */
export interface Participant {
  /**
   * User's unique ID.
   */
  userId: number;
  /**
   * User's display name.
   */
  displayName: string;
  /**
   * User's audio state.
   * - `''`: No audio.
   * - `computer`: Joined by computer audio.
   * - `phone`: Joined by phone.
   */
  audio: string;
  /**
   * Whether audio is muted.
   */
  muted: boolean;
  /**
   * Whether the user is the host.
   */
  isHost: boolean;
  /**
   * Whether the user is a co-host.
   */
  isCoHost: boolean;
  /**
   * Whether the user is a guest (not attached to the account).
   */
  isGuest: boolean;
  /**
   * User's avatar.
   * User's can set their avatar in their [web profile](https://zoom.us/profile).
   */
  avatar: string;
  /**
   * Whether the user is phone call user.
   */
  isPhoneUser: boolean;
  /**
   * Whether the user has raised their hand.
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
   * Whether the user has started sharing.
   */
  sharerOn: boolean;
  /**
   * Whether the user is allowed to talk.
   * Available in webinars.
   */
  isAllowToTalk?: boolean;
  /**
   * Nonverbal feedback of a user.
   */
  feedback: number;
  /**
   * Whether the share is paused.
   */
  sharePause: boolean;
  /**
   * User's SDK key, if using one.
   */
  sdkKey: string;
  astAdmin?: boolean;
  rmcAdmin?: boolean;
  /**
   * Whether the participant started local recording (such as on computer).
   */
  bLocalRecord?: boolean;
}
/**
 * Interface of meeting information.
 */
export interface MeetingInfo {
  /**
   * The meeting number.
   */
  meetingNumber: number;
  /**
   * The meeting password, if it exists.
   */
  password: string;
  /**
   * The meeting telephone password, if it exists.
   */
  telPwd: string;
  /**
   * The user's name.
   */
  userName: string;
  /**
   * The user's ID.
   */
  userId: number;
  /**
   * The user's email address.
   */
  userEmail: string;
  /**
   * The meeting invite email key.
   */
  inviteEmail: string;
  /**
   * The user's customer key.
   */
  customerKey: string;
  /**
   * The topic of the meeting.
   */
  meetingTopic: string;
  /**
   * The encryption type of the meeting.
   */
  encryptionType: 'None' | 'AES ECB' | 'AES GCM';
  /**
   * The server region.
   */
  region: string;
  /**
   * The server network.
   */
  network: string;
  /**
   * Whether the user is in the meeting or not.
   */
  isInMeeting: boolean;
  /**
   * The language for the SDK.
   */
  lang: string;
  /**
   * The Zoom meeting UUID.
   */
  meetingId: string;
  /**
   * The web endpoint.
   */
  webEndpoint: string;
  /**
   * The participant ID.
   */
  participantId: number;
  /**
   * Recording information.
   */
  recordingInfo: RecordingInfo;
}
/**
 * Interface to define a custom button for the toolbar "More" dropdown menu.
 */
export declare interface CustomButton {
  /**
   * The button's label.
   */
  text: string;
  /**
   * Callback when the button's clicked.
   */
  onClick: Function;
  /**
   * The button's class name.
   */
  className?: string;
}
/** Interface to define custom component sizes. */
export interface CustomSize {
  width: number;
  height: number;
}
/** Interface defining virtual background image */
export interface VbImageInfoType {
  id: string;
  fileName: string;
  displayName: string;
  url: string;
}
/**
 * Source of the live transcription message
 */
export enum LiveTranscriptionMessageSource {
  /**
   * unspecified
   */
  Unspecified = 0,
  /**
   *  user typed caption in the meeting
   */
  InMeetingManual = 1,
  /**
   * using the external captioner
   */
  ExternalCaptioner = 2,
  /**
   * 	automatic speech recognition
   */
  ASR = 4
}
/**
 * language code of the live transcription
 */
export enum LiveTranscriptionLanguageCode {
  /**
   * English
   */
  English = 0,
  /**
   * Chinese
   */
  'Chinese (Simplified)' = 1,
  /**
   * Japanese
   */
  Japanese = 2,
  /**
   * German
   */
  German = 3,
  /**
   * French
   */
  French = 4,
  /**
   * Russian
   */
  Russian = 5,
  /**
   * Portuguese
   */
  Portuguese = 6,
  /**
   * Spanish
   */
  Spanish = 7,
  /**
   * Korean
   */
  Korean = 8,
  /**
   * Italian
   */
  Italian = 9,
  /**
   * Reserved
   */
  Reserved = 10,
  /**
   * Vietnamese
   */
  Vietnamese = 11,
  /**
   * Dutch
   */
  Dutch = 12,
  /**
   * Ukrainian
   */
  Ukrainian = 13,
  /**
   * Arabic
   */
  Arabic = 14,
  /**
   * Bengali
   */
  Bengali = 15,
  /**
   * Chinese (Traditional)'
   */
  'Chinese (Traditional)' = 16,
  /**
   * Czech
   */
  Czech = 17,
  /**
   * Estonian
   */
  Estonian = 18,
  /**
   * Finnish
   */
  Finnish = 19,
  /**
   * Greek
   */
  Greek = 20,
  /**
   * Hebrew
   */
  Hebrew = 21,
  /**
   * Hindi
   */
  Hindi = 22,
  /**
   * Hungarian
   */
  Hungarian = 23,
  /**
   * Indonesian
   */
  Indonesian = 24,
  /**
   * Malay
   */
  Malay = 25,
  /**
   * Persian
   */
  Persian = 26,
  /**
   * Polish
   */
  Polish = 27,
  /**
   * Romanian
   */
  Romanian = 28,
  /**
   * Swedish
   */
  Swedish = 29,
  /**
   * Tamil
   */
  Tamil = 30,
  /**
   * Telugu
   */
  Telugu = 31,
  /**
   * Tagalog
   */
  Tagalog = 32,
  /**
   * Turkish
   */
  Turkish = 33,
  /**
   * No translation
   */
  NoTranslation = 400,
  /**
   * manual caption
   */
  DefaultManualInput = 401
}
/**
 * Arguments and options for joining a meeting.
 */
export interface JoinOptions {
  /**
   * @param sdkKey The Web SDK SDK key.
   */
  sdkKey?: string;
  /**
   * @param signature The generated signature to create or join the meeting.
   * See [Generate the SDK JWT](https://marketplace.zoom.us/docs/sdk/native-sdks/auth#generate-the-sdk-jwt) for details.
   */
  signature: string;
  /**
   * @param meetingNumber The Zoom Meeting number.
   */
  meetingNumber: string;
  /**
   * @param password The Zoom Meeting password
   */
  password?: string;
  /**
   * @param userName The user's name.
   */
  userName: string;
  /**
   * @param userEmail The user's email address.
   */
  userEmail?: string;
  /**
   * @param customerKey The user's customer key.
   */
  customerKey?: string;
  /**
   * @param tk Optional 'tk' param to join a webinar with registration.
   */
  tk?: string;
  /**
   * @param zak Optional 'zak' param to start a meeting or webinar with OAuth.
   */
  zak?: string;
  /**
   * @param success Join success callback.
   */
  success?: Function;
  /**
   * @param error Join error callback.
   */
  error?: Function;
}
export type MeetingInfoType = 'topic' | 'host' | 'mn' | 'pwd' | 'telPwd' | 'invite' | 'participant' | 'dc' | 'enctype';
export type PopperPlacementType =
  | 'bottom-end'
  | 'bottom-start'
  | 'bottom'
  | 'left-end'
  | 'left-start'
  | 'left'
  | 'right-end'
  | 'right-start'
  | 'right'
  | 'top-end'
  | 'top-start'
  | 'top';
export interface PositionStyle {
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
}
export interface PopperStyle {
  disableDraggable?: boolean;
  anchorReference?: 'anchorEl' | 'anchorPosition';
  anchorElement?: HTMLElement | null;
  anchorPosition?: PositionStyle;
  modifiers?: object;
  placement?: PopperPlacementType;
}
export type VideoPopperStyle = Omit<PopperStyle, 'anchorElement' | 'modifiers' | 'placement' | 'anchorReference'>;
export interface InitOptions {
  debug?: boolean;
  /**
   * Renders the toolbar and main-panel-view using ReactDOM into the given container.
   * @param zoomAppRoot The HTML element, typically a <div>, to render the toolbar in.
   */
  zoomAppRoot: HTMLElement | undefined;
  /**
   * @param assetPath Default 'https://source.zoom.us/{version}/lib/av'.
   */
  assetPath?: string;
  /**
   * @param webEndpoint Default 'zoom.us'.
   */
  webEndpoint?: string;
  /**
   * @param language Default 'en-US'
   */
  language?: string;
  /**
   * @param customize Optional customization options for the embedded client.
   */
  customize?: {
    /**
     * Customization options for the toolbar.
     * @param buttons custom buttons to add to the toolbar dropdown menu.
     */
    toolbar?: {
      buttons?: Array<CustomButton>;
    };
    /** Customization options for meeting info attributes */
    meetingInfo?: Array<MeetingInfoType>;
    /**
     * Customize the meeting invite url format (e.g. https://yourdomain/{0}?pwd={1}).
     * This will not work by default, you need to set `Enable Client SDK Customize Invite Url`.
     */
    inviteUrlFormat?: string;
    /**
     * Customization options for the participants panel.
     * @param popper options for the underlying popper element.
     */
    participants?: {
      popper?: PopperStyle;
    };
    /**
     * Customization options for the settings panel.
     * @param popper options for the underlying popper element.
     */
    setting?: {
      popper?: PopperStyle;
    };
    /**
     * Customization options for chat notifications and panel.
     * @param notificationCls options for chat notifications.
     * @param popper options for the underlying popper element.
     */
    chat?: {
      notificationCls?: PositionStyle;
      popper?: PopperStyle;
    };
    /**
     * Customization options for the meeting info panel.
     * @param popper options for the underlying popper element.
     */
    meeting?: {
      popper?: PopperStyle;
    };
    /**
     * @param activeApps customization options for the active apps notifier popper position.
     */
    activeApps?: {
      popper?: PopperStyle;
    };
    /**
     * Customization options for the video or suspension view.
     * @param popper options for the underlying popper element.
     * @param isResizable whether or not the video view is resizable. Default is true.
     * @param size sizing options for the ribbon view and all other views.
     */
    video?: {
      popper?: VideoPopperStyle;
      isResizable?: boolean;
      viewSizes?: {
        ribbon?: CustomSize;
        default?: CustomSize;
      };
    };
  };
  /**
   * Maximum participants displayed per screen in Gallery View, up to 25.
   */
  maximumVideosInGalleryView?: number;
}

export declare function event_audio_statistic_data_change(payload: {
  data: {
    avg_loss: number;
    encoding: boolean;
    jitter: number;
    max_loss: number;
    rtt: number;
    sample_rate: number;
  };
  type: string;
}): void;
/**
 * Occurs when decode (received) the video statistics data is changed.
 * @param payload the event detail
 * - `data`
 *  - `encoding`: if encoding is true, this means that the data is encoding video data statistics.
 *  - `avg_loss`: average package loss for video.
 *  - `jitter`: jitter for video.
 *  - `max_loss`: max package loss for video.
 *  - `rtt`: round trip time for video.
 *  - `sample_rate`: sample rate for video.
 *  - `width`: width for video.
 *  - `height`: height for video.
 *  - `fps`: fps for video.
 * - `type` : string VIDEO_QOS_DATA.
 *
 * ```javascript
 * client.on('video_statistic_data_change', (payload) => {
 *   console.log('emit', payload);
 *  });
 * ```
 * @event
 */

export declare function event_video_statistic_data_change(payload: {
  data: {
    avg_loss: number;
    encoding: boolean;
    jitter: number;
    max_loss: number;
    rtt: number;
    sample_rate: number;
    width: number;
    height: number;
    fps: number;
  };
  type: string;
}): void;

export declare function event_caption_message(payload: {
  /**
   * message ID
   */
  msgId: string;
  /**
   * user ID of the message
   */
  userId: number;
  /**
   * display name
   */
  displayName: string;
  /**
   * avatar
   */
  avatar?: string;
  /**
   * text content
   */
  text: string;
  /**
   * source of the live transcription message
   */
  source: LiveTranscriptionMessageSource;
  /**
   *  language code of the live translation
   */
  language: LiveTranscriptionLanguageCode;
  /**
   * timestamp
   */
  timestamp: number;
  /**
   * Is this sentence over?
   */
  done?: boolean;
}): void;

export declare function event_recording_change(payload: RecordingStatus): void;

export declare function event_local_recording_change(payload: { userId: number; bLocalRecord: boolean }): void;

export declare namespace EmbeddedClient {
  /**
   * Initializes the Meeting SDK for web component view client.
   * @param args init options
   */
  function init(args: InitOptions): ExecutedResult;
  /**
   * Joins a meeting and renders the client.
   * @param args join options
   */
  function join(args: JoinOptions): ExecutedResult;
  /**
   * Gets the current user's information.
   */
  function getCurrentUser(): Participant | null;
  /**
   * Gets the current meeting's information.
   */
  function getCurrentMeetingInfo(): MeetingInfo;
  /**
   * Gets the list of participants.
   */
  function getAttendeeslist(): Participant[];
  /**
   * Stops the audio.
   * Only works if the audio flag is `true` in the media constraints.
   *
   * For version 2.1.1 and higher.
   * @returns executed promise.
   */
  function stopAudio(): ExecutedResult;
  /**
   * Toggles mute.
   * @param mute true to mute, false to unmute.
   * @param userId user to toggle mute for.
   */
  function mute(mute: boolean, userId?: Number): ExecutedResult;
  /**
   * Mutes all participants.
   * @param muteAll true to mute, false to unmute.
   */
  function muteAll(muteAll: boolean): ExecutedResult;
  /**
   * Renames participant.
   * @param newName new name.
   * @param userId user to rename.
   */
  function rename(newName: string, userId: number): ExecutedResult;
  /**
   * Admits a participant from the waiting room.
   * @param userId user to admit.
   */
  function admit(userId: number): ExecutedResult;
  /**
   * Admits all participants in the waiting room.
   */
  function admitAll(): ExecutedResult;
  /**
   * Expels a user from the meeting.
   * @param userId user to expel.
   */
  function expel(userId: number): ExecutedResult;
  /**
   * Starts, stops, or pauses cloud recording.
   * @param record
   */
  function record(record: 'start' | 'pause' | 'stop'): ExecutedResult;
  /**
   * Locks meeting.
   * @param lockMeeting true to lock, false to unlock.
   */
  function lockMeeting(lockMeeting: boolean): ExecutedResult;
  /**
   * Leaves the meeting. If leaving as a host, pass in the userId to assign as the new host.
   * @param userId The user ID to assign as the new host (if leaving as a host).
   */
  function leaveMeeting(userId?: number): ExecutedResult;
  /**
   * Ends the meeting.
   */
  function endMeeting(): ExecutedResult;
  /**
   * Toggles if a user is on hold.
   * @param userId user to toggle hold status for.
   * @param hold true to put on hold, false to remove from hold.
   */
  function putOnHold(userId: number, hold: boolean): ExecutedResult;
  /**
   * Toggles if a webinar attendee can talk.
   * @param userId user to toggle the talking permission.
   * @param isAllow true to allow the attendee to talk, false to disable talking.
   */
  function allowAttendeeToTalk(userId: number, isAllow: boolean): ExecutedResult;
  /**
   * subscribe statistic quality of service (QoS) data
   * @param args.audio if true subscribe audio QoS.
   * @param args.video if true subscribe video QoS.
   */
  function subscribeStatisticData(args?: { audio: boolean; video: boolean }): ExecutedResult;
  /**
   * unsubscribe statistic quality of service (QoS) data.
   * @param args.audio if true unsubscribe audio QoS.
   * @param args.video if true unsubscribe video QoS.
   */
  function unSubscribeStatisticData(args?: { audio: boolean; video: boolean }): ExecutedResult;
  /**
   * Send private chat message to meeting participants. This API does not support send chat message in webinar
   * @param chatMessage the chat message to be sent, it cannot be undefined/null/empoty
   * @param userId the message receiver's userId
   */
  function sendChat(chatMessage: string, userId: number): Promise<ChatMessage | Error>;
  /**
   * Get the current status of virtual background setting
   * @category VirtualBackground
   */
  function getVirtualBackgroundStatus(): { id: string; isVbOn: boolean; isLock: boolean; vbList: VbImageInfoType[] };
  /**
   * Check if the device support the virtual background
   * @category VirtualBackground
   */
  function isSupportVirtualBackground(): Boolean;
  /**
   * Lock the current virtual background image
   * @param isLock true to lock the current virtual background image, false to unlock
   * @category VirtualBackground
   */
  function lockVirtualBackground(isLock: boolean): ExecutedResult;
  /**
   * Update the virtual background image options
   * Cannot update the virtual background image list with the virtual background settings tab open
   * Cannot update the virtual background image if the user selected 'blur' or virtual background image
   * 'id' attribute of the image in list must be unique and cannot be 'blur'
   * 'id', 'fileName', 'displayName', 'url' are all required for each image of the list
   * @param vbImageList the image list for virtual background settings
   * @category VirtualBackground
   */
  function updateVirtualBackgroundList(vbImageList: VbImageInfoType[]): ExecutedResult;
  /**
   * Set the virtual background image by image id
   * Cannot remove virtual background if a virtual background image is selected by UI or set by this API
   * Cannot set new virtual background image if the virtual background image is locked
   * The image with 'vbImageId' must exist in the current virtual background image list
   * @param vbImageId: the id of the in the image list for the target virtual background image, '' for no virtual background and 'blur' for the blur virtual background
   * @category VirtualBackground
   */
  function setVirtualBackground(vbImageId: string): ExecutedResult;
  /**
   * Listen for the events and handle them.
   * For example:
   * ```javascript
   * on("connection-change", (payload) => {
   *  if (payload.state === 'Closed) {
   *    console.log("Meeting ended")
   *  }
   * })
   * ```
   * @param event event name (for meeting end event, set the event to "connection-change").
   * @param callback event handler (for meeting end event, the payload of the callback is payload.state === 'Closed')
   */
  function on(event: 'connection-change', callback: (payload: any) => void): void;
  function on(event: 'audio-statistic-data-change', callback: typeof event_audio_statistic_data_change): void;
  function on(event: 'video-statistic-data-change', callback: typeof event_video_statistic_data_change): void;
  function on(event: 'caption-message', callback: typeof event_caption_message): void;
  function on(event: 'recording-change', callback: typeof event_recording_change): void;
  function on(event: 'local-recording-change', callback: typeof event_local_recording_change): void;
  /**
   * Remove the event handler. Must be used with on() in pairs.
   * @param event event name. Same as 'on' event name list
   * @param callback event handler.
   */
  function off(event: string, callback: (payload: any) => void): void;
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
