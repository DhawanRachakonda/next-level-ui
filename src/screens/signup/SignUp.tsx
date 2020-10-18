import {
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import BoxLayout from '../box-layout/BoxLayout';
import './SignUp.scss';

function SignUp() {
  const history = useHistory();
  const handleClose = () => {
    history.goBack();
  };
  const redirectToSignInPage = () => {
    history.push('login');
  };
  return (
    <BoxLayout>
      <Card className="sign-up-content">
        <Button className="sign-up-close-btn" onClick={handleClose}>
          X
        </Button>
        <div className="sign-up-info">
          <h1>Create account</h1>
          <span className="login-msg">
            Already have an account?{' '}
            <Button onClick={redirectToSignInPage} className="login-btn">
              Sign In
            </Button>
          </span>
        </div>
        <SignUpForm />
      </Card>
    </BoxLayout>
  );
}

function SignUpForm() {
  const [username, setUserName] = useState('');
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [contactNo, setConatctNo] = useState();
  const [password, setPassword] = useState('');
  const [termsNdService, setTermsNdService] = useState(false);

  const updateUserName = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setUserName(event.currentTarget.value);
  };
  const updateFName = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setFName(event.currentTarget.value);
  };
  const updateLName = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setLName(event.currentTarget.value);
  };
  const updateEmailId = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setEmailId(event.currentTarget.value);
  };
  const updateContactNo = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const value = event.currentTarget.value;
    if (typeof value === 'number') {
      setConatctNo(value);
    }
  };
  const updatePassword = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setPassword(event.currentTarget.value);
  };
  const signUpUser = () => {
    console.log('signUpUser');
  };
  return (
    <form id="sign-up-form">
      <TextField
        className="signup-data-field"
        id="outlined-required"
        label="User name"
        variant="outlined"
        type="text"
        name="username"
        value={username}
        onChange={updateUserName}
      />
      <div>
        <TextField
          className="signup-data-field"
          id="outlined-required"
          label="First name"
          variant="outlined"
          type="text"
          name="fname"
          value={fname}
          onChange={updateFName}
        />
        <TextField
          className="signup-data-field"
          id="outlined-required"
          label="Last name"
          variant="outlined"
          type="text"
          name="lname"
          value={lname}
          onChange={updateLName}
        />
      </div>
      <TextField
        className="signup-data-field"
        id="outlined-required"
        label="Email-Id"
        variant="outlined"
        type="emailId"
        name="emailId"
        value={emailId}
        onChange={updateEmailId}
      />
      <TextField
        className="signup-data-field"
        id="outlined-required"
        label="Contact No"
        variant="outlined"
        type="number"
        name="conatctNo"
        value={contactNo}
        onChange={updateContactNo}
      />
      <TextField
        className="signup-data-field"
        id="outlined-required"
        label="Password"
        variant="outlined"
        type="password"
        name="password"
        value={password}
        onChange={updatePassword}
      />
      <Button className="signup-btn" onClick={signUpUser}>
        <span>
          Sign Up <span>&#8594;</span>
        </span>
      </Button>
      <FormControlLabel
        className="keep-me-msg"
        control={
          <Checkbox
            className={'terms-nd-services-checkbox'}
            checked={termsNdService}
            onChange={() => setTermsNdService(!termsNdService)}
            name="keepMeChecked"
          />
        }
        label={
          <span className="terms-nd-service-msg">
            I have read and agree to the <Button>Terms and Service</Button>
          </span>
        }
      />
    </form>
  );
}

export default SignUp;
