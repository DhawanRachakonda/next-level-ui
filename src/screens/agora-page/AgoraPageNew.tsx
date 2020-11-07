import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export interface AgoraCallObject {
  channel: string;
  baseMode: string;
  transcode: string;
  attendeeMode: string;
  videoProfile: string;
  uid?: undefined | string | any;
}

const initObj = {
  channel: '',
  baseMode: 'rtc',
  transcode: 'interop',
  attendeeMode: 'video',
  videoProfile: '480p_4',
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

  const handleBaseModeChange = (val: any): void => {
    setAgoraObj({ ...agoraObj, channel: val.target.value });
  };

  const handleJoinBtn = (): void => {
    history.push('agora-call-page', agoraObj);
  };

  return (
    <>
      {
        <div id="aghora_call">
          <div id="set_channel">
            <input
              type="text"
              onChange={(e) => {
                handleChannelChange(e);
              }}
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
