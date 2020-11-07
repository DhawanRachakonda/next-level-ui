import AgoraRTC from 'agora-rtc-sdk';
import React, { useState, useEffect } from 'react';
import { options } from '../agora-page/environment';
import { AgoraCallObject } from '../agora-page/AgoraPageNew';
import { merge } from 'lodash';
import './agoracall.scss';
import { useHistory } from 'react-router-dom';

function AgoraCallWindow(data: any) {
  const sampleObj = {
    attendeeMode: 'video',
    baseMode: 'rtc',
    channel: 'aa',
    transcode: 'interop',
    videoProfile: '480p_4',
  };
  const history = useHistory();
  const props: AgoraCallObject = data?.history?.location?.state || sampleObj;
  const [streamList, setStreamList] = useState<AgoraRTC.Stream[]>([]);
  const [displayMode, setDisplayMode] = useState<string>('pip');
  const [readyState, setReadyState] = useState(false);
  const [change, setChange] = useState(false);
  let _toolbarToggle: any;
  const config: AgoraRTC.ClientConfig = {
    mode:
      props.baseMode === 'rtc' || props.baseMode === 'live'
        ? props.baseMode
        : 'rtc',
    codec: 'h264',
  };
  const appId = options.appId;
  let client: AgoraRTC.Client | null = null;
  const [localStream, setLocalStream] = useState<any>({});

  const removeStream = (uid: string) => {
    streamList.map((item: any, index) => {
      if (item.getId && item.getId() === uid) {
        item.close();
        const element = document.querySelector('#ag-item-' + uid);
        !!element &&
          element.parentNode &&
          element.parentNode.removeChild(element);
        const tempList = [...streamList];
        tempList.splice(index, 1);
        setStreamList(tempList);
      }
    });
  };

  useEffect(() => {
    const canvas = document.querySelector('#ag-canvas');
    // pip mode (can only use when less than 4 people in channel)
    if (displayMode === 'pip') {
      const no = streamList.length;
      if (no > 4) {
        setDisplayMode('tile');
        return;
      }
      streamList.map((item, index) => {
        const id = item.getId();
        let dom = document.querySelector('#ag-item-' + id);
        if (!dom) {
          dom = document.createElement('section');
          dom.setAttribute('id', 'ag-item-' + id);
          dom.setAttribute('class', 'ag-item');
          canvas && canvas.appendChild(dom);
          item.play('ag-item-' + id);
        }
        if (index === no - 1) {
          dom.setAttribute('style', `grid-area: span 12/span 24/13/25`);
        } else {
          dom.setAttribute(
            'style',
            `grid-area: span 3/span 4/${4 + 3 * index}/25;
             z-index:1;width:calc(100% - 20px);
             height:calc(100% - 20px)`,
          );
        }

        // item.player.resize && item.player.resize();
      });
    }
    // tile mode
    else if (displayMode === 'tile') {
      // const no = streamList.length;
      streamList.map((item, index) => {
        const id = item.getId();
        let dom = document.querySelector('#ag-item-' + id);
        if (!dom) {
          dom = document.createElement('section');
          dom.setAttribute('id', 'ag-item-' + id);
          dom.setAttribute('class', 'ag-item');
          canvas && canvas.appendChild(dom);
          item.play('ag-item-' + id);
        }
        // dom.setAttribute('style', `grid-area: ${tile_canvas[no][index]});
        // item.player.resize && item.player.resize();
      });
    }
    // screen share mode (tbd)
    else if (displayMode === 'share') {
    }
  }, [displayMode, streamList]); // componenetDidUpdate

  useEffect(() => {
    const canvas = document.querySelector('#ag-canvas');
    const btnGroup = document.querySelector('.ag-btn-group');
    canvas &&
      canvas.addEventListener('mousemove', () => {
        if (_toolbarToggle) {
          clearTimeout(_toolbarToggle);
        }
        btnGroup && btnGroup.classList.add('active');
        _toolbarToggle = setTimeout(function () {
          btnGroup && btnGroup.classList.remove('active');
        }, 2000);
      });
  }, [change]);

  useEffect(() => {
    client = AgoraRTC.createClient(config);
    // const shareClient = {};
    // const shareStream = {};

    client.init(appId, () => {
      console.log('AgoraRTC client initialized');
      client &&
        client.on('stream-added', (evt: any) => {
          const stream = evt.stream;
          client && client.subscribe(stream);
        });

      client &&
        client.on('peer-leave', function (evt) {
          removeStream(evt.uid);
        });

      client &&
        client.on('stream-subscribed', function (evt) {
          const stream = evt.stream;
          addStream(stream);
        });

      client &&
        client.on('stream-removed', function (evt) {
          const stream = evt.stream;
          removeStream(stream.getId());
        });
      client &&
        client.join(appId, props.channel, props.uid, (uid) => {
          const _localStream = streamInit(
            uid,
            props.attendeeMode,
            props.videoProfile,
          );
          _localStream.init(
            () => {
              if (props.attendeeMode !== 'audience') {
                addStream(_localStream, true);
                client &&
                  client.publish(_localStream, (err) => {
                    console.error('Publish local stream error: ' + err);
                  });
              }
              setReadyState(true);
              setLocalStream(_localStream);
            },
            (err: any) => {
              console.error('getUserMedia failed', err);
              setReadyState(true);
            },
          );
          setLocalStream(_localStream);
        });
    });
    setChange(true);
    return () => {
      client && client.unpublish(localStream);
      localStream && localStream.close && localStream.close();
      client &&
        client.leave &&
        client.leave(
          () => {
            console.log('Client succeed to leave.');
          },
          () => {
            console.log('Client failed to leave.');
          },
        );
    };
  }, []); // conmponentDidMount

  const streamInit = (
    uid: any,
    attendeeMode: string,
    videoProfile: any,
    config?: any,
  ) => {
    const defaultConfig = {
      streamID: uid,
      audio: true,
      video: true,
      screen: false,
    };

    switch (attendeeMode) {
      case 'audio-only':
        defaultConfig.video = false;
        break;
      case 'audience':
        defaultConfig.video = false;
        defaultConfig.audio = false;
        break;
      default:
      case 'video':
        break;
    }

    const stream = AgoraRTC.createStream(merge(defaultConfig, config));
    stream.setVideoProfile(videoProfile);
    return stream;
  };

  const addStream = (stream: AgoraRTC.Stream, push = false) => {
    const repeatition = streamList.some((item: any) => {
      return item.getId() === stream.getId();
    });
    if (repeatition) {
      return;
    }
    if (push) {
      setStreamList(streamList.concat([stream]));
    } else {
      setStreamList([stream].concat(streamList));
    }
  };

  const handleCamera = (e: any) => {
    e.currentTarget.classList.toggle('off');
    localStream.isVideoOn()
      ? localStream.disableVideo()
      : localStream.enableVideo();
  };

  const handleMic = (e: any) => {
    e.currentTarget.classList.toggle('off');
    localStream.isAudioOn()
      ? localStream.disableAudio()
      : localStream.enableAudio();
  };

  const style = {
    display: 'grid',
    gridGap: '10px',
    alignItems: 'center',
    justifyItems: 'center',
    gridTemplateRows: 'repeat(12, auto)',
    gridTemplateColumns: 'repeat(24, auto)',
  };
  const videoControlBtn: JSX.Element =
    props.attendeeMode === 'video' ? (
      <>
        <button
          onClick={(e) => handleCamera(e)}
          className="ag-btn videoControlBtn"
          title="Enable/Disable Video">
          Video on/off
        </button>
      </>
    ) : (
      <span />
    );

  const audioControlBtn: JSX.Element =
    props.attendeeMode !== 'audience' ? (
      <button
        onClick={(e) => handleMic(e)}
        className="ag-btn audioControlBtn"
        title="Enable/Disable Audio">
        Audio On/Off
      </button>
    ) : (
      <span />
    );

  const handleExit = (e: any) => {
    if (e.currentTarget.classList.contains('disabled')) {
      return;
    }
    try {
      client && client.unpublish(localStream);
      localStream && localStream.close();
      client &&
        client.leave(
          () => {
            console.log('Client succeed to leave.');
          },
          () => {
            console.log('Client failed to leave.');
          },
        );
    } finally {
      setReadyState(false);
      client = null;
      setLocalStream({});
      history.push('agora-page');
      // redirect to index
    }
  };
  // const switchDisplayBtn = (
  //   <span
  //     onClick={this.switchDisplay}
  //     className={
  //       streamList.length > 4
  //         ? 'ag-btn displayModeBtn disabled'
  //         : 'ag-btn displayModeBtn'
  //     }
  //     title="Switch Display Mode">
  //     <i className="ag-icon ag-icon-switch-display"/>
  //   </span>
  // );
  // const hideRemoteBtn: JSX.Element = (
  //   <span
  //     className={
  //       streamList.length > 4
  //         ? 'ag-btn disableRemoteBtn disabled'
  //         : 'ag-btn disableRemoteBtn'
  //     }
  //     onClick={(e) => hideRemote(e)}
  //     title="Hide Remote Stream">
  //     <i className="ag-icon ag-icon-remove-pip" />
  //   </span>
  // );
  const exitBtn: JSX.Element = (
    <button
      onClick={(e) => handleExit(e)}
      className={readyState ? 'ag-btn exitBtn' : 'ag-btn exitBtn disabled'}
      title="Exit">
      Leave
    </button>
  );

  return (
    <>
      <div id="ag-canvas" style={style}>
        <div className="ag-btn-group">
          {exitBtn}

          {videoControlBtn}
          {audioControlBtn}
          {
            <span className="ag-btn shareScreenBtn" title="Share Screen">
              Share Screen
            </span>
          }
          {/*switchDisplayBtn*/}
          {/*hideRemoteBtn*/}
        </div>
      </div>
    </>
  );
}

export default AgoraCallWindow;
