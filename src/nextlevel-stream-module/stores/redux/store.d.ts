import {
  INextLevelStreamBaseAction,
  NextLevelStreamActionTypes,
} from './actionTypes';

declare type StreamingDetails = {
  channelName: string;
  userName: string;
  agoraAuth: string;
};

export type ChannelNameData = {
  channelName: string;
};

export type ISetChannelAction = INextLevelStreamBaseAction<ChannelNameData>;

export type UserNameData = {
  userName: string;
};

export type ISetUserName = INextLevelStreamBaseAction<UserNameData>;

export type AgoraAuthData = {
  authToken: string;
};

export type ISetAgoraAuth = INextLevelStreamBaseAction<AgoraAuthData>;

export type IStreamDetailsActions = ChannelNameData &
  UserNameData &
  AgoraAuthData;
