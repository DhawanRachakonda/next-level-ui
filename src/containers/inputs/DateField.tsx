import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { TextField, InputLabel } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

const useStyles = (width: any) =>
  makeStyles((theme: Theme) =>
    createStyles({
      label: {
        color: '#2f3d4a',
        fontSize: '20px',
      },
      textField: {
        marginTop: 11,
        minWidth: 200,
        width: width === 'md' ? '60%' : width === 'lg' ? '100%' : 'auto',
        '& .MuiInputBase-input': {
          border: '1px solid #ced4da',
          padding: '10px 12px',
          position: 'relative',
          fontSize: '1rem',
          borderRadius: theme.spacing(2),
          backgroundColor: '#fff',
        },
        '& .MuiInput-root': {
          '&:after': {
            content: 'none',
          },
          '&:before': {
            content: 'none',
          },
        },
      },
    }),
  );

export default function DateField({ label, value, width, type }: any) {
  const classes = useStyles(width)();

  return (
    <>
      {label && (
        <InputLabel
          shrink={true}
          htmlFor="bootstrap-input"
          className={classes.label}>
          <FormattedMessage id={label} />
        </InputLabel>
      )}
      <TextField
        id="datetime-local"
        type={type ? type : 'datetime-local'}
        className={classes.textField}
        value={value}
      />
    </>
  );
}
