declare let initArgs: {
    debug?: boolean, //optional
    leaveUrl: string, //required
    webEndpoint?: string, // PSO option
    showMeetingHeader?: boolean, //option
    disableInvite?: boolean, //optional
    disableCallOut?: boolean, //optional
    disableRecord?: boolean, //optional
    disableJoinAudio?: boolean, //optional
    audioPanelAlwaysOpen?: boolean, //optional
    showPureSharingContent?: boolean, //optional
    isSupportAV?: boolean, //optional,
    isSupportChat?: boolean, //optional,
    isSupportQA?: boolean, //optional,
    isSupportCC?: boolean, //optional,
    screenShare?: boolean, //optional,
    rwcBackup?: string, //optional,
    videoDrag?: boolean, //optional,
    sharingMode?: string, //optional,
    videoHeader?: boolean, //optional,
    isLockBottom?: boolean, // optional,
    isSupportNonverbal?: boolean, // optional,
    isShowJoiningErrorDialog?: boolean, // optional,
    inviteUrlFormat?: string, // optional
    loginWindow?: {
        width: string,
        height: string,
    }, // optional,
    meetingInfo?: Array<MeetingInfoType>, // optional
    disableVoIP?: boolean, // optional
    disableReport?: boolean, // optional
    success?: Function,
    error?: Function,
};

declare enum MeetingInfoType {
    'topic',
    'host',
    'mn',
    'pwd',
    'telPwd',
    'invite',
    'participant',
    'dc',
}

declare enum WebSDKInMeetingEvent {
    onUserJoin, // only support meeting
    onUserLeave, // only support meeting
    onUserIsInWaitingRoom, // only support meeting
    onMeetingStatus, // 1(connecting), 2(connected), 3(disconnected), 4(reconnecting)
}

export namespace ZoomMtg {
    function generateSignature(args: {
        apiKey: string,
        apiSecret: string,
        meetingNumber: string,
        role: string,
        success?: Function,
        error?: Function,
    }): string;
    function setZoomJSLib(path?: string, dir?: string): void;
    function preLoadWasm(): void;
    function prepareJssdk(): void;
    function init(args: typeof initArgs): void;
    function join(args: {
        meetingNumber: string,
        userName: string,
        userEmail?: string,
        passWord?: string,
        apiKey: string,
        signature: string,
        success: Function,
        error: Function,
     }): void;
    function showInviteFunction(args: {
        show: boolean
    }): void;
    function showCalloutFunction(args: {
        show: boolean
    }): void;
    function showMeetingHeader(args: {
        show: boolean
    }): void;
    function showRecordFunction(args: {
        show: boolean
    }): void;
    function showJoinAudioFunction(args: {
        show: boolean
    }): void;
    function showPureSharingContent(args: {
        show: boolean
    }): void;
    function getAttendeeslist(args: { // only meeting
        success?: Function,
        error?: Function,
    }): void;
    function getCurrentUser(args: {
        success: Function,
        error?: Function,
    }): void;
    function callOut(args: {
        success?: Function,
        error?: Function,
    }): void;
    function inviteByPhone(args: {
        phoneNumber: string, // +1123456789
        userName: string,
        success?: Function,
        error?: Function,
    }): void;
    function inviteCRCDevice(args: {
        ip: string,
        type: Number
        success?: Function,
        error?: Function,
    }): void;
    function cancelInviteCRCDevice(args: {
        success?: Function,
        error?: Function,
    }): void;
    function mute(args: {
        userId: Number,
        mute: boolean,
        success?: Function,
        error?: Function,
    }): void;
    function muteAll(args: {
        muteAll: boolean,
        success?: Function,
        error?: Function,
    }): void;
    function rename(args: {
        userId: number,
        oldName: string,
        newName: string,
        success?: Function,
        error?: Function,
    }): void;
    function expel(args: {
        userId: number,
        success?: Function,
        error?: Function,
    }): void;
    function record(args: {
        record: boolean,
        success?: Function,
        error?: Function,
    }): void;
    function lockMeeting(args: {
        lockMeeting: boolean,
        success?: Function,
        error?: Function,
    }): void;
    function leaveMeeting(args: {
        success?: Function,
        error?: Function,
    }): void;
    function endMeeting(args: {
        success?: Function,
        error?: Function,
    }): void;
    function putOnHold(args: {
        userId: number,
        hold: boolean,
        success?: Function,
        error?: Function,
    }): void;
    function inMeetingServiceListener(event: string, callback: Function): void;
    function reRender(args: {
        success?: Function,
        error?: Function,
    }): void;
    function getWebSDKVersion(args: {
        success?: Function,
        error?: Function,
    }): void;
}