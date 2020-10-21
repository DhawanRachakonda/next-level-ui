import React from 'react';

// Material UI components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

// styles
import { withStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppUtil from 'util/appUtil';
import { useHistory } from 'react-router-dom';
import paths from 'routes/paths';

const NextLevelHeader = withStyles((theme) => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      padding: '1em 0',
    },
  },
}))((props) => <AppBar className="nextLevel-appBar" {...props} />);

interface INextLevelAppBArProps {
  children: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
  appBarToolBarGutters: {
    padding: 'unset',
  },
}));

function NextLevelAppBAr({ children }: INextLevelAppBArProps) {
  const classes = useStyles();

  const history = useHistory();
  const goToHome = () => {
    history.push(paths.home.path);
  };
  return (
    <NextLevelHeader>
      <Toolbar classes={{ gutters: classes.appBarToolBarGutters }}>
        <img
          onClick={goToHome}
          className="brand-img"
          src={AppUtil.getLogoURL()}
          alt="NextLevel logo"
        />
        {children}
      </Toolbar>
    </NextLevelHeader>
  );
}

export default NextLevelAppBAr;
