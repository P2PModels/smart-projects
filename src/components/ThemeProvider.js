import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const font = {
  fontFamily: "Helvetica Neue",
  letterSpacing: '-0.84px',
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF4B63',
    },
  },
  overrides: {
    MuiTypography: {
      h1: {
        ...font,
        fontSize: '60px',
        letterSpacing: '-1.7px',
        fontWeight: 'bold',
      },
      h2: {
        ...font,
        fontSize: '40px',
        fontWeight: 'bold',
      },
      h3: {
        ...font,
        fontSize: '30px',
        fontWeight: 'bold',
      },
      h4: {
        ...font,
        fontSize: '20px',
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
