import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// local imports
import AchievementCard from 'containers/cards/AchievementCard';

const useStyles = makeStyles(() =>
  createStyles({
    gridItemAchievements: {
      padding: '32px 0',
    },
  }),
);

const cardsData = {
  first: {
    id: 1,
    count: 4,
    caption: 'courses completed',
  },
  second: {
    id: 2,
    count: 12,
    caption: 'courses in',
  },
  third: {
    id: 3,
    count: 8,
    caption: 'Quizzes',
  },
  fourth: {
    id: 4,
    count: 2,
    caption: 'Quiz in progress',
  },
};

function Achievements() {
  const styles = useStyles();

  return (
    <Grid
      item={true}
      xs={12}
      data-testid="achievements-container"
      className={styles.gridItemAchievements}>
      <Grid container>
        <AchievementCard data={cardsData.first} />
        <AchievementCard data={cardsData.second} />
        <AchievementCard data={cardsData.third} />
        <AchievementCard data={cardsData.fourth} />
      </Grid>
    </Grid>
  );
}

export default Achievements;
