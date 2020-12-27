import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import UserServices from 'services/user';

const loginEventsChannel = new BroadcastChannel('login-events-channel');

function BroadcastListener() {
  const history = useHistory();
  const loginEventsListener = useCallback(
    (msg: any) => {
      if (msg.data === 'login') {
        UserServices.logout();
        history.push('login');
      } else if (msg.data === 'authorizedUser') {
        history.push('dashboard');
      }
    },
    [history],
  );

  React.useEffect(() => {
    loginEventsChannel.addEventListener('message', loginEventsListener);
    return () => {
      loginEventsChannel.removeEventListener('message', loginEventsListener);
      loginEventsChannel.close();
    };
  }, [loginEventsListener]);

  return <></>;
}

export default BroadcastListener;
