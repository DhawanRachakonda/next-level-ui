import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import DivTypography from 'containers/typography/DivTypography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      borderRadius: '2em',
      border: '1px solid #dde4e7',
      padding: theme.spacing(1),
    },
    gridItem: {
      display: 'flex',
      justifyContent: 'space-around',
      padding: theme.spacing(3),
    },
  }),
);

export default function Users() {
  const classes = useStyles();

  return (
    <>
      <Grid item={true} xs={12} className={classes.gridItem}>
        <DivTypography variant="h6">Users</DivTypography>
        <DivTypography variant="caption">Active</DivTypography>
      </Grid>
      <List dense className={classes.root}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem key={value}>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar ${value + 1}`}
                  src={`/static/images/avatar/${value + 1}.jpg`}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`User ${value + 1}`} />
              <ListItemText id={labelId} secondary={'active'} />
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
