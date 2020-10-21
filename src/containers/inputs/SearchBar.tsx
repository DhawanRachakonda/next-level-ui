import React from 'react';

// material UI components
import InputBase from '@material-ui/core/InputBase';

// material UI styles
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// material UI icons
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = withStyles((theme) => ({
  input: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(0.5em + ${theme.spacing(1)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}))(InputBase);

const inputBaseStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: '10vw',
    backgroundColor: '#F1F1F1',
    marginRight: theme.spacing(0),
    width: '17rem',
    marginLeft: theme.spacing(2),
    boxShadow:
      '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    [theme.breakpoints.up('sm')]: {
      width: '18rem',
      marginLeft: theme.spacing(10),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    right: 0,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#2F3D4A',
  },

  inputRoot: {
    color: 'blue',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(0.5em + ${theme.spacing(1)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

function SearchBarComponent() {
  const classes = inputBaseStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <SearchBar
        placeholder={matches ? 'What do you want to learn?' : 'Courses'}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
}

export default SearchBarComponent;
