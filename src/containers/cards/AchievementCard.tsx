import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

// local imports
import DivTypography from 'containers/typography/DivTypography';

const useStyles = makeStyles(() =>
  createStyles({
    cardRoot: {
      textAlign: 'center',
      borderBottom: '3px solid #00d1ff',
      margin: '12px',
      height: '150px',
      '&.card-2': {
        borderColor: '#6b5acc',
      },
      '&.card-3': {
        borderColor: '#fec144',
      },
      '&.card-4': {
        borderColor: '#de2c27',
      },
    },
    captionText: {
      color: '#b8c5cc',
      textShadow: 'none',
      fontSize: '1rem',
      textTransform: 'uppercase',
    },
  }),
);

function AchievementCard({ data }: any) {
  const styles = useStyles();

  return (
    <Grid item={true} xs={12} sm={6} md={3}>
      <Card className={`${styles.cardRoot} card-${data.id}`}>
        <CardContent>
          <DivTypography variant="h4" gutterBottom={true}>
            {data.count}
          </DivTypography>
          <DivTypography variant="caption" className={styles.captionText}>
            testseetses sete
          </DivTypography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default AchievementCard;
