import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

// local imports
import AppUtil from 'util/appUtil';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      borderRadius: '2em',
      border: '1px solid #dde4e7',
      padding: theme.spacing(1),
    },
    listHeading: {
      display: 'flex',
      justifyContent: 'space-around',
      padding: theme.spacing(3),
      textAlign: 'center',
      '& .MuiListItemText-primary': {
        color: '#2F3D4A',
      },
      '& .MuiListItemText-secondary': {
        color: '#93a9bb',
      },
    },
    listItem: {
      '& .MuiListItemText-primary': {
        color: '#2F3D4A',
        fontSize: '1rem',
      },
      '& .MuiListItemText-secondary': {
        color: '#93a9bb',
        fontSize: '.85rem',
        textAlign: 'center',
      },
    },
  }),
);

export default function Users() {
  const classes = useStyles();

  return (
    <List dense={true} className={classes.root}>
      <ListItem className={classes.listHeading}>
        <ListItemText primary={'Users'} />
        <ListItemText secondary={'Status'} />
      </ListItem>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => {
        const labelId = `user-label-${value}`;
        return (
          <ListItem key={value} className={classes.listItem}>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar ${value + 1}`}
                src={AppUtil.getUserImageURL()}
              />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={`User ${value + 1}`} />
            <ListItemText id={labelId} secondary={'active'} />
          </ListItem>
        );
      })}
    </List>
  );
}
