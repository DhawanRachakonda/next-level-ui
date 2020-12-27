import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

////// local imports
import { logout } from 'store/user/actions';

function Logout() {
  const dispatch = useDispatch();
  dispatch(logout());
  return <Redirect to="/login" />;
}

export default Logout;
