import { createMuiTheme } from '@material-ui/core/styles';

import defaultTheme from './defaultTheme';

function GlobalStyles(mode = 'default') {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#2F3D4A',
      },
    },
    typography: {
      fontFamily: [
        'Poppins-Light',
        'Poppins-Black',
        'Poppins-ExtraLight',
        'Poppins-Bold',
        'Poppins-ExtraBold',
        'Poppins-SemiBold',
        'Poppins-Italic',
        'Poppins-ExtraLightItalic',
        'Poppins-ExtraBoldItalic',
        'Poppins-LightItalic',
        'Poppins-MediumItalic',
        'Poppins-SemiBoldItalic',
        'Poppins-ThinItalic',
        'Poppins-BlackItalic',
        'Poppins-BoldItalic',
        'Poppins-Medium',
        'Poppins-Regular',
        'Poppins-Thin',
        'sans-serif',
      ].join(','),
      h3: {
        textShadow: '0px 1px, 1px 0px, 1px 1px',
      },
      h4: {
        textShadow: '0px 1px, 1px 0px, 1px 1px',
      },
      allVariants: {
        fontWeight: 'bolder',
        textShadow: '0px 0.2px, 0.2px 0px, 0.2px 0.2px',
        color: '#2F3D4A',
      },
    },
    overrides: {
      MuiIconButton: {
        root: {
          color: '#2F3D4A',
        },
      },
      MuiDivider: {
        root: {
          backgroundColor: '#b3c1cd',
          height: '2px',
        },
      },
      MuiContainer: {
        root: {
          backgroundColor: '#FFF',
        },
      },
      MuiInputBase: {
        input: {
          color: '#2F3D4A',
          '&::placeholder': {
            fontWeight: 'bolder',
          },
        },
      },
      MuiButton: {
        root: {
          fontWeight: 'bolder',
          textTransform: 'initial',
        },
        containedPrimary: {
          backgroundColor: '#18A4E0',
          color: '#F1F1F1',
          '&:hover': {
            backgroundColor: '#18A4E0',
            boxShadow:
              '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
          },
        },
        containedSecondary: {
          color: '#2F3D4A',
          backgroundColor: '#FFF',
          '&:hover': {
            backgroundColor: '#FFF',
          },
        },
        contained: {
          padding: '0.5em 1.5em',
          boxShadow: 'unset',
          borderRadius: '0.5em',
          '&:hover': {
            boxShadow: 'unset',
          },
        },
      },
      MuiAppBar: {
        colorPrimary: {
          backgroundColor: '#FFF',
          color: '#2F3D4A',
        },
        root: {
          display: 'flex',
          flexDirection: 'column',
          flexBasis: '100%',
          boxShadow: 'unset',
        },
        positionFixed: {
          position: 'unset',
        },
      },
      MuiTextField: {
        root: {
          borderRadius: '15px',
        },
      },
      MuiInputLabel: {
        root: {
          color: '#9aa2a8',
          fontWeight: 500,
          fontSize: '14px',
          '&$disabled': {
            color: '#9aa2a8',
          },
        },
        shrink: {
          outlined: {
            transform: 'translate(14px, -6px) scale(0.75)',
          },
        },
        outlined: {
          transform: 'translate(14px, 12px) scale(1)',
        },
      },
      MuiOutlinedInput: {
        root: {
          borderRadius: '10px',
          boxShadow: '0px 2px 2px 0px #b3c1cd',
          '&$disabled': {
            boxShadow: 'none',
          },
        },
        input: {
          fontSize: '14px',
          fontWeight: 500,
          padding: '10px',
        },
        notchedOutline: {
          border: 'none',
        },
      },
      MuiListItemText: {
        secondary: {
          fontWeight: 500,
          fontSize: 'large',
        },
        primary: {
          color: '#18A4E0',
          fontWeight: 'bolder',
          fontSize: 'x-large',
        },
      },
      MuiFab: {
        primary: {
          backgroundColor: '#18A4E0',
          '&:hover': {
            backgroundColor: '#18A4E0',
          },
        },
      },
      MuiBottomNavigationAction: {
        root: {
          color: '#2F3D4A',
        },
      },
      MuiCssBaseline: {
        '@global': {
          html: {
            WebkitFontSmoothing: 'auto',
          },
          body: {
            display: 'block',
            background: defaultTheme.body,
            color: defaultTheme.text,
            fontFamily: `Poppins-Light, Poppins-Black, Poppins-ExtraLight, Poppins-Bold,
    Poppins-ExtraBold, Poppins-SemiBold, Poppins-Italic,
    Poppins-ExtraLightItalic, Poppins-ExtraBoldItalic, Poppins-LightItalic,
    Poppins-MediumItalic, Poppins-SemiBoldItalic, Poppins-ThinItalic,
    Poppins-BlackItalic, Poppins-BoldItalic, Poppins-Medium, Poppins-Regular,
    Poppins-Thin, sans-serif`,
          },
        },
      },
    },
  });
  return theme;
}

export { GlobalStyles };
