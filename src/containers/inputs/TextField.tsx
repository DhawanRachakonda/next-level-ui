import React from 'react';
import {
  Theme,
  createStyles,
  withStyles,
  makeStyles,
} from '@material-ui/core/styles';
import {
  FormControl,
  InputLabel,
  InputBase,
  FormHelperText,
} from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

const InputField = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(4),
      },
    },
    input: {
      borderRadius: 16,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 12px',
    },
  }),
)(InputBase);

const InputControl = withStyles(() =>
  createStyles({
    root: {
      '& > label': {
        fontSize: 20,
        color: '#2f3d4a',
      },
    },
  }),
)(FormControl);

const InputHelper = withStyles(() =>
  createStyles({
    root: {
      fontSize: 10,
      fontWeight: 'lighter',
      color: '#2f3d4a',
    },
  }),
)(FormHelperText);

const useStyles = (width: any) =>
  makeStyles(() =>
    createStyles({
      inputFiled: {
        width: width === 'md' ? '60%' : width === 'lg' ? '100%' : 'auto',
      },
    }),
  );

export default function TextField({
  label,
  value,
  helperText,
  width,
  multiLine,
  placeholder,
  type,
}: any) {
  const classes = useStyles(width)();

  return (
    <InputControl className={classes.inputFiled}>
      {label && (
        <InputLabel shrink={true} htmlFor="bootstrap-input">
          <FormattedMessage id={label} />
        </InputLabel>
      )}
      <InputField
        value={value}
        multiline={!!multiLine}
        rows={multiLine && 4}
        placeholder={placeholder}
        type={type}
      />
      {helperText && (
        <InputHelper>
          <FormattedMessage id={helperText} />
        </InputHelper>
      )}
    </InputControl>
  );
}
