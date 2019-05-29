import React from 'react'
import NavBar from './NavBar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'

import { ThemeProvider } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    color: 'white',
    background: 'transparent no-repeat center center',
    backgroundSize: 'cover',
  },
  wrapper: {
    minHeight: '340px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '10%',
    paddingRight: '10%',
    [theme.breakpoints.up(1800)]: {
      paddingLeft: '25%',
      paddingRight: '25%',
    },
  },
  divider: {
    background: 'white',
    margin: '20px',
    height: '3px',
    width: '150px',
  },
  subtitle: {
    fontWeight: 200,
  },
  footer: {
    position: 'relative',
    minHeight: 48,
    marginTop: '30px',
    color: 'white',
    background: '#3A3A3A',
  },
  spacer: {
    width: 78,
  },
  img: {
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    width: 68,
  },
}))

const Footer = ({ classes }) => (
  <Toolbar className={classes.footer}>
    <a href="http://smart-ib.coop/" className={classes.spacer}>
      <img className={classes.img} src="/images/logo.png" alt="Logo" />
    </a>
    <Typography color="inherit">{process.env.REACT_APP_FOOTER}</Typography>
  </Toolbar>
)

function Layout({ title, subtitle, background, overlay = true, children }) {
  const backgroundColor = overlay && 'rgba(0,0,0,0.5)'
  background = '#1E4B4D url("' + background + '")'
  const classes = useStyles()
  const theme = outerTheme => ({
    ...outerTheme,
    palette: {
      ...outerTheme.palette,
      type: 'dark',
    },
    overrides: {
      ...outerTheme.overrides,
      MuiOutlinedInput: {
        input: {
          color: 'white',
        },
      },
    },
  })
  return (
    <div>
      <NavBar />
      <ThemeProvider theme={theme}>
        <header className={classes.root} style={{ background }}>
          <div className={classes.wrapper} style={{ backgroundColor }}>
            <Typography color="inherit" variant="h1" align="center">
              {title}
            </Typography>
            <Divider variant="middle" light className={classes.divider} />
            <Typography
              color="inherit"
              variant="h3"
              align="center"
              className={classes.subtitle}
            >
              {subtitle}
            </Typography>
          </div>
        </header>
      </ThemeProvider>
      {children}
      <Footer classes={classes} />
    </div>
  )
}

export default Layout
