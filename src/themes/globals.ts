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
      MuiAppBar: {
        colorPrimary: {
          backgroundColor: '#FFF',
          color: '#2F3D4A',
        },
        root: {
          display: 'flex',
          flexDirection: 'column',
          flexBasis: '100%',
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
