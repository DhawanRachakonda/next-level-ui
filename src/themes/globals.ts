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
    },
    overrides: {
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
      },
      MuiCssBaseline: {
        '@global': {
          html: {
            WebkitFontSmoothing: 'auto',
          },
          body: {
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
