import {
  StreamingDetails,
  IStreamDetailsActions,
  UserNameData,
  ChannelNameData,
  AgoraAuthData,
} from 'nextlevel-stream-module/stores/redux/store';
import {
  INextLevelStreamBaseAction,
  NextLevelStreamActionTypes,
} from '../actionTypes';

function createReducer<T, V>(
  initialState: T,
  handlers: Partial<
    Record<
      NextLevelStreamActionTypes,
      (state: T, action: INextLevelStreamBaseAction<V>) => T
    >
  >,
) {
  return function reducer(state: T, action: INextLevelStreamBaseAction<V>): T {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type]!(state, action);
    } else {
      return state;
    }
  };
}

function setUserName(
  state: StreamingDetails,
  action: INextLevelStreamBaseAction<ChannelNameData>,
) {
  return { ...state };
}

function setChannelName(
  state: StreamingDetails,
  action: INextLevelStreamBaseAction<UserNameData>,
) {
  return { ...state };
}

function setAgoraAuthCode(
  state: StreamingDetails,
  action: INextLevelStreamBaseAction<AgoraAuthData>,
) {
  return { ...state };
}

const actionHandlers = {
  [NextLevelStreamActionTypes.SET_USER_NAME]: setUserName,
  [NextLevelStreamActionTypes.SET_CHANNEL_NAME]: setChannelName,
  [NextLevelStreamActionTypes.SET_AGORA_AUTH_TOKEN]: setAgoraAuthCode,
};

const visibilityReducer = createReducer<
  StreamingDetails,
  IStreamDetailsActions
>({ channelName: '', userName: '', agoraAuth: '' }, actionHandlers);

export default visibilityReducer;
