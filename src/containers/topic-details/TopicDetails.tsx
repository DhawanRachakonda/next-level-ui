import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

// local imports
import DivTypography from 'containers/typography/DivTypography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardRoot: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: '2em',
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      boxShadow: '0px 2px 5px #b3c1cd',
    },
    cardMedia: {
      minHeight: theme.spacing(35),
      position: 'relative',
    },
    detailGrid: {
      padding: '10px 0',
      '& .MuiTypography-body1': {
        fontWeight: 'normal',
      },
      '& .MuiTypography-caption': {
        fontWeight: 'normal',
      },
      '& .MuiButton-root': {
        float: 'right',
      },
    },
    topicMedia: {
      padding: '16px 32px',
      [theme.breakpoints.down('sm')]: {
        padding: '0',
      },
    },
    topicCard: {
      boxShadow: 'none',
      '& > .MuiCardActionArea-root': {
        // position: 'absolute',
        // maxWidth: '400px',
        // marginTop: '-65px',
        borderRadius: '3em',
        overflow: 'hidden',
      },
    },
    cardCaption: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(7),
    },
    playIcon: {
      position: 'absolute',
      bottom: '3px',
      right: theme.spacing(1),
    },
    ratingSection: {
      display: 'flex',
      '& > .MuiTypography-caption': {
        flex: '1',
        textAlign: 'right',
      },
      '& > .MuiTypography-body2': {
        marginTop: '3px',
      },
      '& .MuiSvgIcon-root': {
        color: '#18A4E0',
      },
    },
    avatarContainer: {
      float: 'right',
      textAlign: 'center',
      fontSize: '1.25rem',
      marginBottom: theme.spacing(3),
      '& > .MuiSvgIcon-root': {
        color: '#18A4E0',
        marginBottom: '-3px',
        marginLeft: '4px',
      },
    },
    largeAvatar: {
      width: theme.spacing(12),
      height: theme.spacing(12),
      margin: theme.spacing(3),
      boxShadow: '1px 1px 5px 0px #b3c1cd',
    },
    startButton: {
      minWidth: '125px',
    },
  }),
);

const course = {
  imgUrl: 'http://localhost:3000/assets/images/medical-abortion-2x_dw.png',
  courseName: 'Comprehisive course 1',
  author: 'Dr. ashok chak',
  category: 'BioChemistry',
};

function TopicDetails() {
  const styles = useStyles();
  return (
    <Card className={styles.cardRoot}>
      <Grid container={true}>
        <Grid item={true} xs={12} lg={5} className={styles.topicMedia}>
          <Card className={styles.topicCard}>
            <CardActionArea>
              <CardMedia
                image={course.imgUrl}
                title={course.courseName}
                className={styles.cardMedia}>
                <DivTypography
                  className={styles.cardCaption}
                  variant="subtitle1"
                  component="span">
                  Preview
                </DivTypography>
              </CardMedia>
              <PlayCircleFilledIcon
                fontSize="large"
                className={styles.playIcon}
              />
            </CardActionArea>
          </Card>
          <DivTypography className={styles.ratingSection}>
            <DivTypography variant="subtitle1">Rating</DivTypography>
            <DivTypography variant="caption">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarHalfIcon />
            </DivTypography>
            <DivTypography variant="body2">(25)</DivTypography>
          </DivTypography>
        </Grid>
        <Grid item={true} xs={12} lg={7} className={styles.detailGrid}>
          <Grid container={true} direction="row" justify="space-between">
            <Grid item={true} sm={8}>
              <DivTypography gutterBottom={true} variant="h5">
                BIO Chemistry
              </DivTypography>
              <DivTypography gutterBottom={true} variant="h6">
                Comprehensive course on Bio Chemistry
              </DivTypography>
              <DivTypography gutterBottom={true} variant="body1">
                Dr.Manoj Kumar Bhoomigari
              </DivTypography>
            </Grid>
            <Grid item={true} sm={4}>
              <DivTypography
                gutterBottom={true}
                variant="caption"
                className={styles.avatarContainer}>
                <Avatar
                  alt="Remy Sharp"
                  src="http://localhost:3000/assets/images/Ellipse_2@2x.png"
                  className={styles.largeAvatar}
                />
                4.5
                <StarIcon />
              </DivTypography>
            </Grid>
            <Grid item={true} sm={8}>
              <DivTypography gutterBottom={true} variant="caption">
                In this course, top educator under NEET PG category will be
                discussing important topics under Cardiovascular System.
                Learners Learners preparing for NEET PG and various other
                medical entrance exams can gain benefit from
              </DivTypography>
            </Grid>
            <Grid item={true} sm={4}>
              <Button
                variant="contained"
                color="primary"
                className={styles.startButton}>
                Start
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}

export default TopicDetails;
