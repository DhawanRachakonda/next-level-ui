import {
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import BoxLayout from '../box-layout/BoxLayout';
import './SignUp.scss';

function SignUp() {
  const history = useHistory();
  const handleClose = () => {
    history.replace('home');
  };
  const redirectToSignInPage = () => {
    history.push('login');
  };
  return (
    <BoxLayout>
      <Card className="sign-up-content">
        <img
          className="brand-img"
          src="/assets/images/logo.png"
          alt="NextLevel logo"
        />
        <Button className="sign-up-close-btn" onClick={handleClose}>
          X
        </Button>
        <div className="sign-up-info">
          <h1>Create account</h1>
          <span className="sign-up-msg">
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
  const [isFieldsDisabled, setIsFieldsDisabled] = useState(true);

  const updateIsFieldsDisabled = (flag: boolean) => {
    setIsFieldsDisabled(flag);
  };
  const updateUserName = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const value = event.currentTarget.value;
    updateIsFieldsDisabled(!value);
    setUserName(value);
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
        className={'signup-data-field'}
        id="username"
        label="User name"
        variant="outlined"
        type="text"
        name="username"
        value={username}
        onChange={updateUserName}
      />
      <div className="fname-lanme-combo">
        <TextField
          className={
            isFieldsDisabled
              ? 'signup-data-field left disabled'
              : 'signup-data-field left'
          }
          id="fname"
          label="First name"
          variant="outlined"
          type="text"
          name="fname"
          value={fname}
          onChange={updateFName}
          disabled={isFieldsDisabled}
        />
        <TextField
          className={
            isFieldsDisabled
              ? 'signup-data-field right disabled'
              : 'signup-data-field right'
          }
          id="lname"
          label="Last name"
          variant="outlined"
          type="text"
          name="lname"
          value={lname}
          onChange={updateLName}
          disabled={isFieldsDisabled}
        />
      </div>
      <TextField
        className={
          isFieldsDisabled ? 'signup-data-field disabled' : 'signup-data-field'
        }
        id="emailId"
        label="Email-Id"
        variant="outlined"
        type="emailId"
        name="emailId"
        value={emailId}
        onChange={updateEmailId}
        disabled={isFieldsDisabled}
      />
      <TextField
        className={
          isFieldsDisabled ? 'signup-data-field disabled' : 'signup-data-field'
        }
        id="conatctNo"
        label="Contact No"
        variant="outlined"
        type="number"
        name="conatctNo"
        value={contactNo}
        onChange={updateContactNo}
        disabled={isFieldsDisabled}
      />
      <TextField
        className={
          isFieldsDisabled ? 'signup-data-field disabled' : 'signup-data-field'
        }
        id="pwd"
        label="Password"
        variant="outlined"
        type="password"
        name="password"
        value={password}
        onChange={updatePassword}
        disabled={isFieldsDisabled}
      />
      <Button
        className="signup-btn"
        variant="contained"
        color="primary"
        onClick={signUpUser}>
        <span>
          Sign Up <ArrowForwardIcon className="arr-fwd-icn" />
        </span>
      </Button>
      <FormControlLabel
        className="terms-nd-service"
        control={
          <Checkbox
            className={'terms-nd-services-checkbox'}
            checked={termsNdService}
            onChange={() => setTermsNdService(!termsNdService)}
            name="termsNdService"
          />
        }
        label={
          <span className="terms-nd-service-msg">
            I have read and agree to the{' '}
            <Button className="t-nd-s-link">Terms and Service</Button>
          </span>
        }
      />
    </form>
  );
}

export default SignUp;
