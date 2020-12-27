export enum NextLevelStreamActionTypes {
  SET_USER_NAME = 'setUserName',
  SET_CHANNEL_NAME = 'setChannelName',
  SET_AGORA_AUTH_TOKEN = 'setAgoraAuthToken',
}

export type INextLevelStreamBaseAction<V> = {
  type: NextLevelStreamActionTypes;
  payload: V;
};
