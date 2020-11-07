/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import AgoraRTC from 'agora-rtc-sdk';
import React, { useState, useEffect } from 'react';
import { options, agoraVal } from '../agora-page/environment';
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
  const [streamListObject, setStreamListObject] = useState<{
    streamList: AgoraRTC.Stream[];
  }>({ streamList: [] });
  const [displayMode, setDisplayMode] = useState<string>('pip');
  const [readyState, setReadyState] = useState(false);
  const [, setChange] = useState(false);
  const [streamAdded, setStreamAdded] = useState(false);
  // const [client, setClient] = useState<AgoraRTC.Client | null>(null);
  // const [agoraVal.localStream, setagoraVal.localStream] = useState<any>(undefined);
  const config: AgoraRTC.ClientConfig = {
    mode:
      props.baseMode === 'rtc' || props.baseMode === 'live'
        ? props.baseMode
        : 'rtc',
    codec: 'h264',
  };
  const appId = options.appId;
  // const [client, setClient] = useState<>(null)
  // let client: AgoraRTC.Client | null = null;
  // let agoraVal.localStream: any;

  const removeStream = (uid: string) => {
    streamListObject.streamList.forEach((item: any, index) => {
      if (item.getId && item.getId() === uid) {
        item.close();
        const element = document.querySelector('#ag-item-' + uid);
        if (element && element.parentNode) {
          element.parentNode.removeChild(element);
        }
        const tempList = [...streamListObject.streamList];
        tempList.splice(index, 1);
        setStreamListObject({ streamList: tempList });
      }
    });
  };

  useEffect(() => {
    const canvas = document.querySelector('#ag-canvas');
    // pip mode (can only use when less than 4 people in channel)
    if (displayMode === 'pip') {
      const no = streamListObject.streamList.length;
      if (no > 4) {
        setDisplayMode('tile');
        return;
      }
      streamListObject.streamList.forEach((item, index) => {
        const id = item.getId();
        let dom = document.querySelector('#ag-item-' + id);
        if (!dom) {
          dom = document.createElement('section');
          dom.setAttribute('id', 'ag-item-' + id);
          dom.setAttribute('class', 'ag-item');
          if (canvas) {
            canvas.appendChild(dom);
          }
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
      // const no = streamListObject.streamList.length;
      streamListObject.streamList.forEach((item, index) => {
        const id = item.getId();
        let dom = document.querySelector('#ag-item-' + id);
        if (!dom) {
          dom = document.createElement('section');
          dom.setAttribute('id', 'ag-item-' + id);
          dom.setAttribute('class', 'ag-item');
          if (canvas) {
            canvas.appendChild(dom);
          }
          item.play('ag-item-' + id);
        }
        // dom.setAttribute('style', `grid-area: ${tile_canvas[no][index]});
        // item.player.resize && item.player.resize();
      });
    }
    // screen share mode (tbd)
    // else if (displayMode === 'share') {
    // }
  }, [displayMode, streamListObject, streamAdded]); // componenetDidUpdate

  // useEffect(() => {
  //   const canvas = document.querySelector('#ag-canvas');
  //   const btnGroup = document.querySelector('.ag-btn-group');
  //   if (canvas) {
  //     canvas.addEventListener('mousemove', () => {
  //       if (_toolbarToggle) {
  //         clearTimeout(_toolbarToggle);
  //       }
  //       if (btnGroup) {
  //         btnGroup.classList.add('active');
  //       }
  //       setToolBarToggel(
  //         setTimeout(() => {
  //           if (btnGroup) {
  //             btnGroup.classList.remove('active');
  //           }
  //         }, 2000),
  //       );
  //     });
  //   }
  // }, [_toolbarToggle, change]);

  useEffect(() => {
    agoraVal.client = AgoraRTC.createClient(config);
    agoraVal.client?.init(appId, () => {
      console.log('AgoraRTC client initialized');
      agoraVal.client?.on('stream-added', (evt: any) => {
        const stream = evt.stream;
        agoraVal.client?.subscribe(stream);
      });

      agoraVal.client?.on('peer-leave', (evt) => {
        removeStream(evt.uid);
      });

      agoraVal.client?.on('stream-subscribed', (evt) => {
        const stream = evt.stream;
        addStream(stream);
      });

      agoraVal.client?.on('stream-removed', (evt) => {
        const stream = evt.stream;
        removeStream(stream.getId());
      });
      agoraVal.client?.join(appId, props.channel, props.uid, (uid) => {
        agoraVal.localStream = streamInit(
          uid,
          props.attendeeMode,
          props.videoProfile,
        );
        agoraVal.localStream?.init(
          () => {
            if (props.attendeeMode !== 'audience') {
              addStream(agoraVal.localStream, true);
              agoraVal.client?.publish(agoraVal.localStream, (err) => {
                console.error('Publish local stream error: ' + err);
              });
            }
            setReadyState(true);
            // setagoraVal.localStream(agoraVal.localStream);
          },
          (err: any) => {
            console.error('getUserMedia failed', err);
            setReadyState(true);
          },
        );
      });
    });
    setChange(true);
    return () => {
      agoraVal?.client?.unpublish(agoraVal.localStream);
      if (agoraVal?.localStream?.close) {
        agoraVal?.localStream?.close();
      }

      agoraVal?.client?.leave(
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
    // tslint:disable-next-line: no-shadowed-variable
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
    const repeatition = streamListObject.streamList.some((item: any) => {
      return item.getId() === stream.getId();
    });
    if (repeatition) {
      return;
    }
    if (push) {
      streamListObject.streamList = streamListObject.streamList.concat([
        stream,
      ]);
      // setStreamListObject({
      //   streamList: streamListObject.streamList.concat([stream]),
      // });
    } else {
      streamListObject.streamList = [stream].concat(
        streamListObject.streamList,
      );
      // setStreamListObject({
      //   streamList: [stream].concat(streamListObject.streamList),
      // });
    }
    setStreamAdded(!streamAdded);
  };

  const handleCamera = (e: any) => {
    e.currentTarget.classList.toggle('off');
    agoraVal.localStream?.isVideoOn()
      ? agoraVal.localStream.disableVideo()
      : agoraVal.localStream.enableVideo();
  };

  const handleMic = (e: any) => {
    e.currentTarget.classList.toggle('off');
    agoraVal.localStream?.isAudioOn()
      ? agoraVal.localStream.disableAudio()
      : agoraVal.localStream.enableAudio();
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
      agoraVal.client?.unpublish(agoraVal.localStream);
      agoraVal.localStream?.close();
      agoraVal.client?.leave(
        () => {
          console.log('Client succeed to leave.');
        },
        () => {
          console.log('Client failed to leave.');
        },
      );
    } finally {
      setReadyState(false);
      agoraVal.client = null;
      agoraVal.localStream = {};
      history.push('agora-page');
      // redirect to index
    }
  };

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
