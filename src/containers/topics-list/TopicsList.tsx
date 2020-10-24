import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: '480px',
      backgroundColor: theme.palette.background.paper,
    },
    listItem: {
      margin: '5px 0',
      '&:hover': {
        borderRadius: '0.75em',
        boxShadow: '0px 1px 11px -4px #2F3D4A',
        backgroundColor: '#fff',
      },
    },
    listItemText: {
      flex: '1 1 60%',
    },
    listItemHeading: {
      fontSize: '1.625rem',
      color: '#2F3D4A',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },
    listItemDuration: {
      fontSize: '1.625rem',
      fontFamily: 'times new roman',
      color: '#24A7EB',
      textAlign: 'right',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },
  }),
);

interface ListItem {
  heading: string;
  duration: string;
}

interface ListProps {
  topicList: ListItem[];
}

function TopicsList({ topicList }: ListProps) {
  const styles = useStyles();
  return (
    <List className={styles.root} data-testid="topics-index">
      {topicList.map((topicItem) => (
        <ListItem
          className={styles.listItem}
          key={topicItem.heading}
          role={undefined}
          dense={true}
          button={true}>
          <ListItemIcon>
            <PlayCircleOutlineIcon />
          </ListItemIcon>
          <ListItemText
            className={styles.listItemText}
            primaryTypographyProps={{ className: styles.listItemHeading }}
            primary={topicItem.heading}
          />
          <ListItemText
            primaryTypographyProps={{ className: styles.listItemDuration }}
            primary={topicItem.duration}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default TopicsList;
