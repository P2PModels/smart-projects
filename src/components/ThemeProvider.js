import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const font = {
  fontFamily: "Helvetica Neue",
  letterSpacing: '-0.84px',
}

const primary = '#FF4B63'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
    },
  },
  overrides: {
    MuiTypography: {
      h1: {
        ...font,
        fontSize: '60px',
        letterSpacing: '-1.7px',
        fontWeight: 'bold',
        marginTop: '35px',
      },
      h2: {
        ...font,
        fontSize: '40px',
        fontWeight: 'bold',
        marginTop: '35px',
      },
      h3: {
        ...font,
        fontSize: '30px',
        fontWeight: 'bold',
        marginTop: '35px',
      },
      h4: {
        ...font,
        fontSize: '20px',
        marginTop: '35px',
      },
      subtitle1: {
        ...font,
        fontSize: '20px',
        color: '#A7A2A6',
      }
    },
    MuiButton: {
      root: {
        ...font,
        fontWeight: 'bold',
        textTransform: 'none',
        borderRadius: '24px',
      },
      outlinedPrimary: {
        borderWidth: '2px !important'
      },
      sizeLarge: {
        fontSize: '1.3rem',
      }
    },
    MuiGridListTileBar: {
      root: {
        alignItems: 'flex-end',
        background: 'rgba(0,0,0,0.4)',
      },
      rootSubtitle: {
        height: '100%',
      },
      titleWrap: {
        marginBottom: '22px',
      },
      title: {
        ...font,
        fontSize: '40px',
        lineHeight: '45px',
        fontWeight: 'bold',
      },
      subtitle: {
        color: primary,
      }
    }
  },
  typography: { useNextVariants: true },
});

export default function ThemeProvider({children}) {
  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  );
}
