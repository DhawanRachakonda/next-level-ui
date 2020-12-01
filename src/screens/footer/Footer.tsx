import React from 'react';
// import './Footer.scss';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { FormattedMessage } from 'react-intl';
import { List, ListItem, ListItemText, Divider } from '@material-ui/core';

import DivTypography from 'containers/typography/DivTypography';
import AppUtil from 'util/appUtil';

const useFooterStyles = makeStyles((theme: Theme) => ({
  footerContainerRoot: {
    backgroundColor: '#18a4e1',
    color: theme.palette.background.paper,
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(7),
      paddingTop: 'unset',
    },
  },
  gridItem: {
    '& .MuiTypography-root': {
      color: theme.palette.background.paper,
    },
  },
  copyRightGrid: {
    display: 'flex',
    paddingTop: theme.spacing(3),
    '& .MuiTypography-root': {
      flex: 1,
      color: theme.palette.background.paper,
    },
    '& img': {
      padding: 2,
      margin: '0 4px',
    },
  },
  listItem: {
    padding: theme.spacing(0.5, 0),
  },
  listRoot: {
    margin: theme.spacing(2, 0),
  },
  footerGrid: {
    maxWidth: 1200,
    margin: 'auto',
    padding: theme.spacing(5, 2),
  },
}));

const listItemsData = {
  company: ['About', 'Careers', 'Press', 'Blog', 'Affiliates'],
  community: [
    'Go Premium',
    'Team Plans',
    'Refer a Friend',
    'Gift Cards',
    'Scholorships',
    'Free Classes',
  ],
  teaching: ['Become a Teacher', 'Academy', 'Handbook'],
  support: [
    'Support',
    'Contact Us',
    'System Requirements',
    'Register Activation',
    'Key',
    'Site Feedback',
  ],
};

function FooterColumn({ heading, listItems }: any) {
  const styles = useFooterStyles();
  return (
    <Grid item={true} xs={12} md={3} className={styles.gridItem}>
      <DivTypography variant="h5">
        <FormattedMessage id={heading} />
      </DivTypography>
      <List dense={false} className={styles.listRoot}>
        {listItems.map((item: string) => (
          <ListItem key={item} className={styles.listItem}>
            <ListItemText secondary={item} />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
}

function Footer() {
  const styles = useFooterStyles();
  return (
    <section className={styles.footerContainerRoot}>
      <Grid
        container={true}
        justify="space-evenly"
        className={styles.footerGrid}>
        <FooterColumn
          heading="footer.company.label"
          listItems={listItemsData.company}
        />
        <FooterColumn
          heading="footer.community.label"
          listItems={listItemsData.community}
        />
        <FooterColumn
          heading="footer.teaching.label"
          listItems={listItemsData.teaching}
        />
        <FooterColumn
          heading="footer.support.label"
          listItems={listItemsData.support}
        />
        <Grid item={true} xs={12}>
          <Divider />
        </Grid>
        <Grid item={true} xs={12} className={styles.copyRightGrid}>
          <DivTypography variant="h6">
            © 2020 Nextlevel Education Private Limited. All rights reserved
          </DivTypography>
          <img src={AppUtil.getFbURL()} className="Layer-2" alt="facebook" />
          <img
            src={AppUtil.getTwitterURL()}
            className="Layer-2"
            alt="twitter"
          />
          <img src={AppUtil.getGoogleURL()} className="Layer-2" alt="google" />
          <img
            src={AppUtil.getLinkedInURL()}
            className="Layer-2"
            alt="linked in"
          />
        </Grid>
      </Grid>
    </section>
  );
}

export default Footer;
