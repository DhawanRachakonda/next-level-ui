/* eslint-disable no-console */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AgoraRTC from 'agora-rtc-sdk-ng';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { options, rtc } from './environment';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      margin: theme.spacing(2),
      padding: theme.spacing(2),
      minHeight: '250px',
      textAlign: 'center',
      '& input': {
        display: 'block',
        textAlign: 'center',
        margin: '0.5em auto',
        padding: '0.5em',
      },
    },
    stream: {
      width: '480px',
      height: '320px',
      margin: '25px auto',
    },
  }),
);

function AgoraApp() {
  async function handleSubmit(e: any) {
    try {
      if (channelRef.current.value === '') {
        return console.log('Please Enter Channel Name');
      }

      setJoined(true);

      rtc.client = AgoraRTC.createClient({ mode: 'rtc', codec: 'h264' });
      await rtc.client.join(
        options.appId,
        channelRef.current.value,
        null,
        null,
      );

      // Create an audio track from the audio captured by a microphone
      rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
      // Create a video track from the video captured by a camera
      rtc.localVideoTrack = await AgoraRTC.createCameraVideoTrack();

      rtc.localVideoTrack.play('local-stream');

      await rtc.client.publish([rtc.localAudioTrack, rtc.localVideoTrack]);

      rtc.client.on('user-published', async (user, mediaType) => {
        // Subscribe to a remote user
        await rtc.client!.subscribe(user, mediaType);
        console.log('subscribe success');

        if (mediaType === 'video') {
          // Dynamically create a container in the form of a DIV element for playing the remote video track.
          const PlayerContainer = React.createElement('div', {
            id: user.uid.toString(),
            className: 'stream',
          });
          ReactDOM.render(
            PlayerContainer,
            document.getElementById('remote-stream'),
          );

          user?.videoTrack?.play(`${user.uid}`);
        }

        if (mediaType === 'audio') {
          // Get `RemoteAudioTrack` in the `user` object.
          const remoteAudioTrack = user.audioTrack;
          // Play the audio track. Do not need to pass any DOM element
          remoteAudioTrack?.play();
        }
      });

      rtc.client.on('user-unpublished', (user) => {
        // Get the dynamically created DIV container
        const playerContainer = document.getElementById(String(user.uid));
        // Destroy the container
        playerContainer?.remove();
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function handleLeave() {
    try {
      const localContainer = document.getElementById('local-stream');

      rtc.localAudioTrack?.close();
      rtc.localVideoTrack?.close();

      setJoined(false);

      // tslint:disable-next-line: no-unused-expression
      localContainer && (localContainer.textContent = '');

      // Traverse all remote users
      rtc.client?.remoteUsers.forEach((user) => {
        // Destroy the dynamically created DIV container
        const playerContainer = document.getElementById(String(user.uid));
        // tslint:disable-next-line: no-unused-expression
        playerContainer && playerContainer.remove();
      });

      // Leave the channel
      await rtc.client?.leave();
    } catch (err) {
      console.error(err);
    }
  }
  const [joined, setJoined] = useState(false);
  const channelRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const remoteRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const leaveRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const styles = useStyles();

  return (
    <>
      <div className={styles.container}>
        <input
          type="text"
          ref={channelRef}
          id="channel"
          placeholder="Enter Channel name"
        />
        <input
          type="submit"
          value="Join"
          onClick={handleSubmit}
          disabled={joined ? true : false}
        />
        <input
          type="button"
          ref={leaveRef}
          value="Leave"
          onClick={handleLeave}
          disabled={joined ? false : true}
        />
      </div>
      {joined ? (
        <>
          <div id="local-stream" className={styles.stream} />
          <div
            id="remote-stream"
            ref={remoteRef}
            className="stream remote-stream"
          />
        </>
      ) : null}
    </>
  );
}

export default AgoraApp;
