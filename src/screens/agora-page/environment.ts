import {
  IAgoraRTCClient,
  ICameraVideoTrack,
  IMicrophoneAudioTrack,
} from 'agora-rtc-sdk-ng';

declare type RTCTypes = {
  client: IAgoraRTCClient | null;
  // For the local audio and video tracks
  localAudioTrack: IMicrophoneAudioTrack | null;
  localVideoTrack: ICameraVideoTrack | null;
};

export const rtc: RTCTypes = {
  // For the local client
  client: null,
  // For the local audio and video tracks
  localAudioTrack: null,
  localVideoTrack: null,
};

export const options = {
  // Pass your app ID here
  appId: process.env.REACT_APP_AGORA_APP_ID!,
  // Pass a token if your project enables the App Certificate
  token: process.env.REACT_APP_AGORA_APP_TOKEN!,
};
