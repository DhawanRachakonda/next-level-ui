import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

// local imports
import Accordion from 'containers/accordions/Accordion';
import AccordionSummary from 'containers/accordions/AccordionSummary';
import AccordionDetails from 'containers/accordions/AccordionDetails';
import DivTypography from 'containers/typography/DivTypography';
import BorderLinearProgress from 'containers/progress-bars/LinearProgressBar';
import QuizCard from 'containers/cards/QuizCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    listItem: {
      padding: '10px 0',
      '& .MuiSvgIcon-root': {
        marginRight: '5px',
      },
      '&:nth-child(odd)': {
        backgroundColor: '#fbfeff',
      },
    },
    listItemText: {
      flex: '8',
    },
    listItemHeading: {
      fontSize: '1.125rem',
      textTransform: 'capitalize',
      color: '#2F3D4A',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },
    listItemDuration: {
      fontSize: '1.125rem',
      fontFamily: 'times new roman',
      color: '#747474',
      textAlign: 'right',
      fontWeight: 'normal',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },
    listItemStatus: {
      fontSize: '0.875rem',
      color: '#20A2E5',
      fontWeight: 'normal',
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.75rem',
      },
    },
    accordionHeading: {
      flex: 1,
    },
    accordionDuration: {
      margin: 'auto',
      color: '#747474',
    },
    accordionProgress: {
      minWidth: '100px',
      padding: theme.spacing(2),
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
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    newExpanded: boolean,
  ) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Accordion
        square={true}
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1d-content"
          id="panel1d-header">
          <DivTypography variant="h6" className={styles.accordionHeading}>
            1. The First steps in program
          </DivTypography>
          <DivTypography
            variant="subtitle2"
            display="block"
            className={styles.accordionProgress}>
            <BorderLinearProgress variant="determinate" value={50} />
          </DivTypography>
          <DivTypography
            variant="subtitle2"
            display="block"
            className={styles.accordionDuration}>
            0/6 lessons, 1h 19min
          </DivTypography>
        </AccordionSummary>
        <AccordionDetails>
          <List className={styles.root} data-testid="topics-index">
            {topicList.map((topicItem) => (
              <ListItem
                className={styles.listItem}
                key={topicItem.heading}
                role={undefined}
                dense={true}
                button={true}>
                <ListItemIcon>
                  <PlayCircleFilledWhiteOutlinedIcon fontSize="small" />
                  <AttachFileIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText
                  className={styles.listItemText}
                  primaryTypographyProps={{ className: styles.listItemHeading }}
                  primary={topicItem.heading}
                />
                <ListItemText
                  primaryTypographyProps={{ className: styles.listItemStatus }}
                  primary={'completed'}
                />
                <ListItemText
                  primaryTypographyProps={{
                    className: styles.listItemDuration,
                  }}
                  primary={topicItem.duration}
                />
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square={true}
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1d-content"
          id="panel1d-header">
          <DivTypography variant="h6" className={styles.accordionHeading}>
            2. Topics to learn
          </DivTypography>
          <DivTypography
            variant="subtitle2"
            display="block"
            className={styles.accordionProgress}>
            <BorderLinearProgress variant="determinate" value={50} />
          </DivTypography>
          <DivTypography
            variant="subtitle2"
            display="block"
            className={styles.accordionDuration}>
            0/6 lessons, 1h 19min
          </DivTypography>
        </AccordionSummary>
        <AccordionDetails>
          <List className={styles.root} data-testid="topics-index">
            {topicList.map((topicItem) => (
              <ListItem
                className={styles.listItem}
                key={topicItem.heading}
                role={undefined}
                dense={true}
                button={true}>
                <ListItemIcon>
                  <PlayCircleFilledWhiteOutlinedIcon fontSize="small" />
                  <AttachFileIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText
                  className={styles.listItemText}
                  primaryTypographyProps={{ className: styles.listItemHeading }}
                  primary={topicItem.heading}
                />
                <ListItemText
                  primaryTypographyProps={{ className: styles.listItemStatus }}
                  primary={topicItem.heading}
                />
                <ListItemText
                  primaryTypographyProps={{
                    className: styles.listItemDuration,
                  }}
                  primary={topicItem.duration}
                />
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
      <QuizCard />
    </>
  );
}

export default TopicsList;
