import React from 'react';

// material UI styles
import { makeStyles, withStyles } from '@material-ui/core/styles';

// Material UI components
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import AppUtil from 'util/appUtil';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

interface IScrollTopProps {
  rootElement: string;
  children: React.ReactNode;
  window: any;
}

function ScrollTop(props: IScrollTopProps) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: any) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      props.rootElement,
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

const BottomFab = withStyles((theme) => ({
  root: {
    [theme.breakpoints.only('xs')]: {
      bottom: `${theme.spacing(7)}px`,
    },
  },
}))((props: any) => {
  return <Fab {...props} />;
});

function ScrollToTop(props: any) {
  return (
    <ScrollTop {...props}>
      <BottomFab color="primary" size="medium" aria-label="scroll back to top">
        <img
          style={{ width: '30px' }}
          src={AppUtil.getNextLevelSmallImage()}
          alt="next_level_small_logo"
        />
      </BottomFab>
    </ScrollTop>
  );
}

export default ScrollToTop;
