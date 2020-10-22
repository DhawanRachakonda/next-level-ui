import React from 'react';

import './Footer.scss';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import AppUtil from 'util/appUtil';

const useFooterStyles = makeStyles((theme) => ({
  footerContainerRoot: {
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(7),
      paddingTop: 'unset',
    },
  },
  logoContainerRoot: {
    padding: '0.5em 0.5em',
    paddingLeft: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
      padding: '1em 3em',
      marginLeft: 'unset',
    },
  },
}));

function Footer() {
  const styles = useFooterStyles();
  return (
    <Grid
      container={true}
      className="footer-container"
      classes={{ root: styles.footerContainerRoot }}
      item={true}
      xs={12}>
      <Grid
        classes={{ root: styles.logoContainerRoot }}
        item={true}
        xs={4}
        sm={3}>
        <img
          className="brand-img"
          src={AppUtil.getLogoURL()}
          alt="NextLevel logo"
        />
      </Grid>

      <Grid
        container={true}
        className="footer-selfDescription--container"
        item={true}
        xs={12}
        sm={9}>
        <Grid item={true} xs={4}>
          <Card className="footer-selfDescription--card">
            <CardContent>
              <Typography gutterBottom={true}>About us</Typography>
              <Typography
                className="description-item"
                variant="body2"
                component="p">
                Contact
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item={true} xs={4}>
          <Card className="footer-selfDescription--card">
            <CardContent>
              <Typography gutterBottom={true}>Support</Typography>
              <Typography
                className="description-item"
                variant="body2"
                component="p">
                Terms of service
              </Typography>
              <Typography
                className="description-item"
                variant="body2"
                component="p">
                Privacy policy
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item={true} xs={4}>
          <Card className="footer-selfDescription--card">
            <CardContent>
              <Typography color="textSecondary" gutterBottom={true}>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                sdadjl jsndj
              </Typography>
              <Typography color="textSecondary">adjective</Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
