import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { NextLevelAppState } from 'store/reducers';
import { getPrivileges } from 'store/user/actions';

function VivaScreenRender() {
  const userDetails = useSelector(
    (state: NextLevelAppState) => state.user.userDetails,
  );
  const dispatch = useDispatch();
  const [pageName, setPageName] = useState(() => {
    if (!userDetails || !userDetails.user_name) {
      return '/login';
    }
    return '/home'; // TODO take a previous page from connected router and return, if exists else return default landing page.
  });

  useEffect(() => {
    if (!userDetails || !userDetails.user_name) {
      setPageName('/login');
    } else {
      dispatch(getPrivileges());
    }
  }, [dispatch, userDetails]);

  if (pageName) {
    return <Redirect to={pageName} />;
  }
  return <></>;
}

export default VivaScreenRender;
