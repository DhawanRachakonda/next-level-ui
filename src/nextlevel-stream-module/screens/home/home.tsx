import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  FormControl,
  InputLabel,
  Input,
  makeStyles,
  Theme,
  Button,
} from '@material-ui/core';

type SessionInfo = {
  roomName: string;
  roomType: number;
  userName: string;
  role: string;
};

const defaultState: SessionInfo = {
  roomName: '',
  roomType: 2,
  role: 'teacher',
  userName: '',
};

const useStyles = makeStyles((theme: Theme) => ({
  formControl: {
    minWidth: '240px',
    maxWidth: '240px',
  },
}));

function FacultyClassInputs() {
  const [session, setSessionInfo] = useState<SessionInfo>(defaultState);

  const classes = useStyles();
  const history = useHistory();

  const onRoomNameChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setSessionInfo({
      ...session,
      roomName: event.currentTarget.value,
    });
  };

  const onUserNameChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setSessionInfo({
      ...session,
      userName: event.currentTarget.value,
    });
  };

  const handleSubmit = () => {
    history.push('/classRoom');
  };

  return (
    <div className="position-content flex-direction-column">
      <FormControl className={classes.formControl}>
        <InputLabel>Room Name</InputLabel>
        <Input
          value={session.roomName}
          inputProps={{
            maxLength: 20,
          }}
          onChange={onRoomNameChange}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>User Name</InputLabel>
        <Input
          value={session.userName}
          inputProps={{
            maxLength: 20,
          }}
          onChange={onUserNameChange}
        />
      </FormControl>
      <Button
        variant="contained"
        className="custom-button"
        color="primary"
        onClick={handleSubmit}>
        Join
      </Button>
    </div>
  );
}

function Home() {
  return <FacultyClassInputs />;
}

export default Home;
