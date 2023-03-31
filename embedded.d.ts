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
 * Chat message interface.
 */
export interface ChatMessage {
  /**
   * Message ID. Used to delete or modify a message.
   */
  id?: string;
  /**
   * Message content.
   */
  message: string;
  /**
   * Message sender. Includes name, userId, and avatar.
   */
  sender: { name: string; userId: number; avatar?: string };
  /**
   * Message receiver. Includes name and userId.
   */
  receiver: {
    name: string;
    userId: number;
  };
  /**
   * Timestamp of message.
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
 * Cloud recording status.
 */
export enum RecordingStatus {
  Recording = 'Recording',
  Paused = 'Paused',
  Stopped = 'Stopped'
}
/**
 * Participant interface.
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
   * Users can set their avatar in their [web profile](https://zoom.us/profile).
   */
  avatar: string;
  /**
   * Whether the user is a phone call user.
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
  sdkKey: string;
  astAdmin?: boolean;
  rmcAdmin?: boolean;
  /**
   * Whether the participant started local recording (such as on computer).
   */
  bLocalRecord?: boolean;
}
/**
 * The meeting information interface.
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
   * Whether the user is in the meeting.
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
   * Callback when the button is clicked.
   */
  onClick: Function;
  /**
   * The button's class name.
   */
  className?: string;
}
/** Interface defining custom component sizes. */
export interface CustomSize {
  width: number;
  height: number;
}
/** Interface defining the virtual background image. */
export interface VbImageInfoType {
  id: string;
  fileName: string;
  displayName: string;
  url: string;
}
/**
 * The live transcription message's source.
 */
export enum LiveTranscriptionMessageSource {
  /**
   * Unspecified.
   */
  Unspecified = 0,
  /**
   *  User-typed caption in the meeting.
   */
  InMeetingManual = 1,
  /**
   * Using the external captioner.
   */
  ExternalCaptioner = 2,
  /**
   * 	Automatic speech recognition.
   */
  ASR = 4
}
/**
 * The live transcription's language code.
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
   * No translation.
   */
  NoTranslation = 400,
  /**
   * Manual caption.
   */
  DefaultManualInput = 401
}
/**
 * The participant properties interface.
 */
export interface ParticipantPropertiesPayload {
  /**
   * The user's ID.
   */
  userId: number;
  /**
   * Avatar of the user.
   */
  avatar?: string;
  /**
   * Whether the user can edit closed caption.
   */
  bCCEditor?: boolean;
  /**
   * Whether the user is a guest (does not belong to the same account).
   */
  isGuest?: boolean;
  /**
   *  Whether the user is on hold.
   */
  bHold?: boolean;
  /**
   * Whether the user's hand is raised.
   */
  bRaiseHand?: boolean;
  /**
   * The breakout room's ID.
   */
  bid?: number;
  /**
   * Display name.
   */
  displayName?: string;
  /**
   * The current client's type.
   */
  os?: number;
  /**
   * The user's role.
   */
  userRole?: number;
  /**
   * Whether the user is the host.
   */
  isHost?: boolean;
  /**
   * Whether the user is a co-host.
   */
  bCoHost: boolean;
  /**
   * The type of user:
   * - `9`: Client
   * - `5`: Phone
   * - `15`: H323 device
   */
  userType?: number;
  /**
   * The internal ID.
   */
  zoomID?: string;
  /**
   * The user's audio.
   */
  audio?: string;
  /**
   * @ignore
   */
  caps?: number;
  /**
   * Whether the audio is muted.
   */
  muted?: boolean;
  /**
   * Whether the user is starting the video.
   */
  bVideoOn?: boolean;
  /**
   * Nonverbal feedback.
   */
  feedback?: number;
  /**
   * Whether the user is starting sharing.
   */
  sharerOn?: boolean;
  /**
   * Whether sharing is paused.
   */
  sharerPause?: boolean;
  /**
   * Whether the user is starting local recording.
   */
  bLocalRecord?: boolean;
  /**
   * Whether a new user joins the meeting due to failover or an on hold change.
   */
  source?: 'on hold' | 'failover';
  /**
   * Whether the participants leave the meeting due to failover or an on hold change.
   */
  reason?: 'on hold' | 'failover';
  /**
   * Participants's audio status.
   * - 0: NotConnect,
   * - 1: Connecting,
   * - 2: ConnectSuccess,
   * - 3: ConnectFail,
   */
  audioConnectionStatus?: number;
}
/**
 * The view types
 */
export enum SuspensionViewType {
  Minimized = 'minimized',
  Speaker = 'speaker',
  Ribbon = 'ribbon',
  Gallery = 'gallery',
  Active = 'active'
}
/**
 * Arguments and options for joining a meeting.
 */
export interface JoinOptions {
  /**
   * @param sdkKey The Meeting SDK SDK key or client id.
   */
  sdkKey?: string;
  /**
   * @param signature The generated signature to create or join the meeting.
   * See [Generate the SDK JWT](https://developers.zoom.us/docs/meeting-sdk/auth/) for details.
   */
  signature: string;
  /**
   * @param meetingNumber The Zoom Meeting number.
   */
  meetingNumber: string;
  /**
   * @param password The meeting password.
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
/**
 * Interface of active speaker in meeting.
 */
export interface ActiveSpeaker {
  /**
   * User ID.
   */
  userId: number;
  /**
   * User's display name.
   */
  displayName?: string;
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
   * @param language Default 'en-US'.
   * @property de-DE - German Deutsch
   * @property es-ES - Spanish Español
   * @property fr-FR - French Français
   * @property id-ID - Indonesian Bahasa Indonesia
   * @property it-IT - Italian Italia
   * @property jp-JP - Japanese 日本語
   * @property ko-KO - Korean 한국
   * @property nl-NL - Dutch Nederlands
   * @property pl-PL - Polish Polska
   * @property pt-PT - Portuguese Português
   * @property ru-RU - Russian Русский
   * @property tr-TR - Turkish Türkçe
   * @property zh-CN - Chinese 简体中文
   * @property zh-TW - Chinese 繁体中文
   * @property vi-VN - Vietnamese Tiếng Việt
   * @property en-US - English Default
   */
  language?:
    | 'en-US'
    | 'de-DE'
    | 'es-ES'
    | 'fr-FR'
    | 'jp-JP'
    | 'pt-PT'
    | 'ru-RU'
    | 'zh-CN'
    | 'zh-TW'
    | 'ko-KO'
    | 'vi-VN'
    | 'it-IT'
    | 'pl-PL'
    | 'tr-TR'
    | 'id-ID'
    | 'nl-NL';
  /**
   * @param customize Optional customization options for the embedded client.
   */
  customize?: {
    /**
     * Customization options for the toolbar.
     * @param buttons Custom buttons to add to the toolbar dropdown menu.
     */
    toolbar?: {
      buttons?: Array<CustomButton>;
    };
    /** Customization options for meeting info attributes. */
    meetingInfo?: Array<MeetingInfoType>;
    /**
     * Customize the meeting invite URL format (e.g. https://yourdomain/{0}?pwd={1}).
     * This will not work by default, you need to set `Enable Client SDK Customize Invite Url`.
     */
    inviteUrlFormat?: string;
    /**
     * Customization options for the participants panel.
     * @param popper Options for the underlying popper element.
     */
    participants?: {
      popper?: PopperStyle;
    };
    /**
     * Customization options for the settings panel.
     * @param popper Options for the underlying popper element.
     */
    setting?: {
      popper?: PopperStyle;
    };
    /**
     * Customization options for chat notifications and panel.
     * @param notificationCls Options for chat notifications.
     * @param popper Options for the underlying popper element.
     */
    chat?: {
      notificationCls?: PositionStyle;
      popper?: PopperStyle;
    };
    /**
     * Customization options for the meeting info panel.
     * @param popper Options for the underlying popper element.
     */
    meeting?: {
      popper?: PopperStyle;
    };
    /**
     * @param activeApps Customization options for the active apps notifier popper position.
     */
    activeApps?: {
      popper?: PopperStyle;
    };
    /**
     * Customization options for the video or suspension view.
     * @param popper Options for the underlying popper element.
     * @param isResizable Whether the video view is resizable. Default is true.
     * @param viewSizes Sizing options for the ribbon view and all other views.
     * @param defaultViewType default view type for the meeting
     */
    video?: {
      popper?: VideoPopperStyle;
      isResizable?: boolean;
      viewSizes?: {
        ribbon?: CustomSize;
        default?: CustomSize;
      };
      defaultViewType?: SuspensionViewType;
    };
    /**
     * Customization options for screen sharing. Note that audio-sharing is currently only supported for Chrome tabs, and users CANNOT SPEAK
     * while sharing audio. Users can speak by (1) pausing or (2) ending an audio screen share
     */
    sharing?: {
      /**
       * Start-screen-share options
       */
      options?: {
        /**
         * Show (default, false) or hide (true) the "Share tab audio" checkbox when sharing a Chrome tab
         */
        hideShareAudioOption?: boolean;
      };
    };
  };
  /**
   * Maximum participants displayed per screen in gallery view, up to 25.
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
 * Occurs when the video statistics data is changed; decode (received).
 * @param payload The event detail.
 * - `data`
 *  - `encoding`: If encoding is true, the data is encoding video data statistics.
 *  - `avg_loss`: The video's average package loss.
 *  - `jitter`: The video's jitter.
 *  - `max_loss`: The video's maximum package loss.
 *  - `rtt`: The video's round trip time.
 *  - `sample_rate`: The video's sample rate.
 *  - `width`: The video's width.
 *  - `height`: The video's height.
 *  - `fps`: The video's frames per second (fps).
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
   * Message ID.
   */
  msgId: string;
  /**
   * User sending the message.
   */
  userId: number;
  /**
   * Display name.
   */
  displayName: string;
  /**
   * Avatar.
   */
  avatar?: string;
  /**
   * Text content.
   */
  text: string;
  /**
   * Source of the live transcription message.
   */
  source: LiveTranscriptionMessageSource;
  /**
   * Language code of the live translation.
   */
  language: LiveTranscriptionLanguageCode;
  /**
   * Timestamp.
   */
  timestamp: number;
  /**
   * Whether the sentence is done.
   */
  done?: boolean;
}): void;

export declare function event_recording_change(payload: RecordingStatus): void;

export declare function event_local_recording_change(payload: { userId: number; bLocalRecord: boolean }): void;

export declare function event_user_added(payload: ParticipantPropertiesPayload): void;

export declare function event_user_removed(payload: ParticipantPropertiesPayload): void;

export declare function event_user_updated(payload: ParticipantPropertiesPayload): void;

export declare function event_peer_share_state_change(payload: { userId: number; action: string }): void;
export declare function event_audio_active_speaker(payload: Array<ActiveSpeaker>): void;
export declare namespace EmbeddedClient {
  /**
   * Initializes the Meeting SDK for web component view client.
   * @param args Init options.
   */
  function init(args: InitOptions): ExecutedResult;
  /**
   * Joins a meeting and renders the client.
   * @param args Join options.
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
   * @returns Executed promise.
   */
  function stopAudio(): ExecutedResult;
  /**
   * Toggles mute.
   * @param mute True to mute, false to unmute.
   * @param userId User to toggle mute for.
   */
  function mute(mute: boolean, userId?: Number): ExecutedResult;
  /**
   * Mutes all participants.
   * @param muteAll True to mute, false to unmute.
   */
  function muteAll(muteAll: boolean): ExecutedResult;
  /**
   * Renames participant.
   * @param newName New name.
   * @param userId User to rename.
   */
  function rename(newName: string, userId: number): ExecutedResult;
  /**
   * Admits a participant into the meeting from the waiting room.
   * @param userId User to admit.
   */
  function admit(userId: number): ExecutedResult;
  /**
   * Admits all participants into the meeting from the waiting room.
   */
  function admitAll(): ExecutedResult;
  /**
   * Expels a user from the meeting.
   * @param userId User to expel.
   */
  function expel(userId: number): ExecutedResult;
  /**
   * Starts, stops, or pauses cloud recording.
   * @param record
   */
  function record(record: 'start' | 'pause' | 'stop'): ExecutedResult;
  /**
   * Locks meeting.
   * @param lockMeeting True to lock, false to unlock.
   */
  function lockMeeting(lockMeeting: boolean): ExecutedResult;
  /**
   * Leaves the meeting. If leaving as a host, pass in the userId to assign as the new host.
   * @param userId User to assign as the new host (if leaving as a host).
   */
  function leaveMeeting(userId?: number): ExecutedResult;
  /**
   * Ends the meeting.
   */
  function endMeeting(): ExecutedResult;
  /**
   * Toggles if a user is on hold.
   * @param userId User to toggle hold status for.
   * @param hold True to put on hold, false to remove from hold.
   */
  function putOnHold(userId: number, hold: boolean): ExecutedResult;
  /**
   * Toggles if a webinar attendee can talk.
   * @param userId User to toggle the talking permission.
   * @param isAllow True to allow the attendee to talk, false to disable talking.
   */
  function allowAttendeeToTalk(userId: number, isAllow: boolean): ExecutedResult;
  /**
   * Subscribes to the statistic quality of service (QoS) data.
   * @param args.audio If true, subscribe to the audio QoS.
   * @param args.video If true, subscribe to the video QoS.
   */
  function subscribeStatisticData(args?: { audio: boolean; video: boolean }): ExecutedResult;
  /**
   * Unsubscribes to the statistic quality of service (QoS) data.
   * @param args.audio If true, unsubscribe to the audio QoS.
   * @param args.video If true, unsubscribe to the video QoS.
   */
  function unSubscribeStatisticData(args?: { audio: boolean; video: boolean }): ExecutedResult;
  /**
   * Sends private chat message to meeting participants. This API does not support send chat message in webinar.
   * @param chatMessage the chat message to be sent, it cannot be undefined, null, or empty.
   * @param userId the message receiver's userId.
   */
  function sendChat(chatMessage: string, userId: number): Promise<ChatMessage | Error>;
  /**
   * Gets the current status of the virtual background setting.
   * @category VirtualBackground
   */
  function getVirtualBackgroundStatus(): { id: string; isVbOn: boolean; isLock: boolean; vbList: VbImageInfoType[] };
  /**
   * Checks if the device supports the virtual background feature.
   * @category VirtualBackground
   */
  function isSupportVirtualBackground(): Boolean;
  /**
   * Locks the current virtual background image.
   * @param isLock true to lock the current virtual background image, false to unlock.
   * @category VirtualBackground
   */
  function lockVirtualBackground(isLock: boolean): ExecutedResult;
  /**
   * Updates the virtual background (VB) image options.
   * Cannot update the VB image list with the VB settings tab open.
   * Cannot update the VB image if the user selected 'blur' or VB image.
   * 'id' attribute of the image in the list must be unique and cannot be 'blur'.
   * 'id', 'fileName', 'displayName', 'url' are all required for each image of the list.
   * @param vbImageList the image list for VB settings.
   * @category VirtualBackground
   */
  function updateVirtualBackgroundList(vbImageList: VbImageInfoType[]): ExecutedResult;
  /**
   * Sets the virtual background (VB) image by image ID.
   * You cannot remove the VB if a VB image has been selected by a user using the UI or if it has been already set by this API.
   * You cannot set a new VB image if the VB image is locked.
   * The image with vbImageId must exist in the current VB image list.
   * @param vbImageId: the ID of the in the image list for the target VB image, '' for no VB and 'blur' for the blur VB.
   * @category VirtualBackground
   */
  function setVirtualBackground(vbImageId: string): ExecutedResult;
  /**
   * Returns true if the current user is a co-host, false otherwise.
   */
  function isCoHost(): boolean;
  /**
   * Returns true if the current user is the host, false otherwise.
   */
  function isHost(): boolean;
  /**
   * Returns true if the current user is the original meeting host, false otherwise.
   */
  function isOriginHost(): boolean;
  /**
   * Makes the user with the corresponding user ID into a co-host.
   * @param userId A valid user ID in the current meeting.
   */
  function makeCoHost(userId: number): ExecutedResult;
  /**
   * Makes the user with the corresponding user ID into the host.
   * @param userId A valid user ID in the current meeting.
   */
  function makeHost(userId: number): ExecutedResult;
  /**
   * Restores the host status to the current user if the request is valid.
   */
  function reclaimHost(): ExecutedResult;
  /**
   * Allows user to claim the host status using the host key.
   * Only successful in meetings with no host.
   * @param hostKey The host key.
   */
  function claimHostWithHostKey(hostKey: string): ExecutedResult;
  /**
   * Removes the co-host status from the corresponding user.
   * @param userId A valid user ID of a co-host in the current meeting.
   */
  function revokeCoHost(userId: number): ExecutedResult;
  /**
   * Listens for the events and handles them.
   * For example:
   * ```javascript
   * on("connection-change", (payload) => {
   *  if (payload.state === 'Closed) {
   *    console.log("Meeting ended")
   *  }
   * })
   * ```
   * @param event Event name (for meeting end event, set the event to "connection-change").
   * @param callback Event handler (for meeting end event, the payload of the callback is payload.state === 'Closed').
   */
  function on(event: 'connection-change', callback: (payload: any) => void): void;
  function on(event: 'audio-statistic-data-change', callback: typeof event_audio_statistic_data_change): void;
  function on(event: 'video-statistic-data-change', callback: typeof event_video_statistic_data_change): void;
  function on(event: 'caption-message', callback: typeof event_caption_message): void;
  function on(event: 'recording-change', callback: typeof event_recording_change): void;
  function on(event: 'local-recording-change', callback: typeof event_local_recording_change): void;
  function on(event: 'user-added', callback: typeof event_user_added): void;
  function on(event: 'user-removed', callback: typeof event_user_removed): void;
  function on(event: 'user-updated', callback: typeof event_user_updated): void;
  function on(event: 'peer-share-state-change', callback: typeof event_peer_share_state_change): void;
  function on(event: 'active-speaker', callback: typeof event_audio_active_speaker): void;
  /**
   * Removes the event handler. Must be used with on() in pairs.
   * @param event event name. Same as 'on' event name list.
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
  function destroyClient(): void;
}

export default ZoomMtgEmbedded;
