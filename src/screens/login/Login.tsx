import React, { useState } from 'react';
import {
  Button,
  Card,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import './Login.scss';

interface LoginProps {
  isOpen?: boolean;
}

function Login(props: LoginProps) {
  const history = useHistory();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [keepMeChecked, setKeepMeChecked] = useState(false);
  const handleClose = () => {
    history.goBack();
  };
  const login = () => {
    console.log('user logged in');
  };
  const updateUserName = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setUserName(event.currentTarget.value);
  };

  const updatePassword = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setPassword(event.currentTarget.value);
  };

  return (
    <Container>
      <div className="login-model">
        <Card className="login-content">
          <Button className="login-close-btn" onClick={handleClose}>
            X
          </Button>
          <div className="login-info">
            <h2 id="form-dialog-title">Welcome</h2>
            <span className="login-msg">
              Login to your <span className="brand-name">Nextlevel</span>{' '}
              account.
            </span>
          </div>
          <form id="login-form">
            <TextField
              className="login-data-field"
              id="outlined-required"
              label="User name/Email-Id"
              variant="outlined"
              type="text"
              name="username"
              value={username}
              onChange={updateUserName}
            />
            <TextField
              className="login-data-field"
              id="outlined-required"
              label="Password"
              variant="outlined"
              type="Password"
              name="password"
              value={password}
              onChange={updatePassword}
            />
            <Button className="login-btn" onClick={login}>
              {' '}
              LOGIN{' '}
            </Button>
          </form>
          <div className="login-help">
            <FormControlLabel
              className="keep-me-msg"
              control={
                <Checkbox
                  className={
                    keepMeChecked
                      ? 'keep-me-checkbox checked'
                      : 'keep-me-checkbox'
                  }
                  checked={keepMeChecked}
                  onChange={() => setKeepMeChecked(!keepMeChecked)}
                  name="keepMeChecked"
                />
              }
              label={<span className="keep-me-msg">Keep me signed in</span>}
            />
            <Button className="forgot-pwd-btn">Forgot Password?</Button>
          </div>
          <div className="sign-up-msg">
            Not account yet? <span className="sign-up-link">sign up</span>
          </div>
        </Card>
      </div>
    </Container>
  );
}

export default Login;
