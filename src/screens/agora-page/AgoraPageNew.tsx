import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export interface AgoraCallObject {
  channel: string;
  baseMode: string;
  transcode: string;
  attendeeMode: string;
  videoProfile: string;
  uid?: undefined | string | any;
  userId?: string;
  token?: string;
}

const initObj = {
  channel: '',
  baseMode: 'rtc',
  transcode: 'interop',
  attendeeMode: 'video',
  videoProfile: '480p_4',
  userId: '2082341273',
  token:
    '006a88087f9bdcd468f9b8e28bcdf4d77c2IADUGEOpUQTQ65gQRPSJv3APDIYMQP6aspDv3w5lhBG6a2/A5uNPAoleIgBvJXg7Ag26XwQAAQCSybhfAgCSybhfAwCSybhfBACSybhf',
};
const baseModeOptions = [
  {
    label: 'Agora Video Call',
    value: 'rtc',
    content: 'One to one and group calls',
  },
  {
    label: 'Agora Live',
    value: 'live',
    content:
      'Enabling real-time interactions between the host and the audience',
  },
];

function AgoraPageNew() {
  const history = useHistory();
  const [agoraObj, setAgoraObj] = useState<AgoraCallObject>(initObj);
  const getOptions = (): JSX.Element[] => {
    const list: JSX.Element[] = baseModeOptions.map((item) => {
      return (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      );
    });
    return list;
  };

  const handleChannelChange = (val: any): void => {
    setAgoraObj({ ...agoraObj, channel: val.target.value });
  };

  const handleUserNameChange = (val: any): void => {
    setAgoraObj({ ...agoraObj, userId: val.target.value });
  };

  const handleRandomNumberChange = (val: any): void => {
    setAgoraObj({ ...agoraObj, token: val.target.value });
  };
  const handleBaseModeChange = (val: any): void => {
    setAgoraObj({ ...agoraObj, baseMode: val.target.value });
  };

  const handleJoinBtn = (): void => {
    history.push('agora-call-page', agoraObj);
  };

  return (
    <>
      {
        <div id="aghora_call">
          <div id="inputs">
            <input
              type="text"
              onChange={(e) => {
                handleChannelChange(e);
              }}
              name="channel"
              placeholder="Set Channel Name"
            />
            <br />
            <input
              type="text"
              onChange={(e) => {
                handleUserNameChange(e);
              }}
              name="userId"
              placeholder="Set User Name"
            />
            <br />
            <input
              type="text"
              onChange={(e) => {
                handleRandomNumberChange(e);
              }}
              name="randomId"
              placeholder="Set RandomId Name"
            />
          </div>
          <div id="select_calType">
            Select join As :{' '}
            <select
              onBlur={(e) => {
                handleBaseModeChange(e);
              }}>
              {getOptions()}
            </select>
          </div>
          <div id="join-btn">
            <button onClick={() => handleJoinBtn()}>JOIN</button>
          </div>
        </div>
      }
    </>
  );
}

export default AgoraPageNew;
