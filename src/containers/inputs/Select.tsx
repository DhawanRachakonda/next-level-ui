import React from 'react';
import { createStyles, withStyles, makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  MenuItem,
} from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

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
        minWidth: 140,
        width: width === 'md' ? '60%' : width === 'lg' ? '100%' : 'auto',
        '& .MuiInputBase-root': {
          marginTop: 32,
        },
      },
    }),
  );

export default function SelectField({
  label,
  value,
  helperText,
  width,
  handleChange,
  options,
}: any) {
  const classes = useStyles(width)();

  return (
    <InputControl className={classes.inputFiled}>
      {label && (
        <InputLabel shrink={true} htmlFor="bootstrap-input">
          <FormattedMessage id={label} />
        </InputLabel>
      )}
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        onChange={handleChange}>
        {options.map((option: any) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {helperText && (
        <InputHelper>
          <FormattedMessage id={helperText} />
        </InputHelper>
      )}
    </InputControl>
  );
}
