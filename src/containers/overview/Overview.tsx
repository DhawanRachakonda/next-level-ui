import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

// local imports
import DivTypography from 'containers/typography/DivTypography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridItemOverView: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 15px',
      border: '1px solid #888',
      borderRadius: '1em',
      '& > .MuiTypography-subtitle2': {
        lineHeight: '2.25',
      },
    },
    selectBatch: {
      '& .MuiSelect-root': {
        borderRadius: 5,
        backgroundColor: '#18a4e0',
        paddingLeft: theme.spacing(1),
        paddingTop: theme.spacing(1),
        paddingbottom: theme.spacing(1),
        color: '#f1f1f1',
        fontWeight: 'normal',
      },
      '&:before': {
        content: 'none',
      },
      '&:after': {
        content: 'none',
      },
    },
    selectEmpty: {
      '& .MuiSelect-root': {
        borderRadius: 5,
        paddingLeft: theme.spacing(1),
        paddingTop: theme.spacing(1),
        paddingbottom: theme.spacing(1),
        fontWeight: 'normal',
      },
      '&:before': {
        content: 'none',
      },
      '&:after': {
        content: 'none',
      },
    },
  }),
);

function Overview() {
  const styles = useStyles();

  return (
    <Grid
      item={true}
      xs={12}
      data-testid="overview-container"
      className={styles.gridItemOverView}>
      <Select value="" displayEmpty={true} className={styles.selectBatch}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <DivTypography variant="subtitle2">Overview</DivTypography>
      <Select value="10" displayEmpty={true} className={styles.selectEmpty}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </Grid>
  );
}

export default Overview;
