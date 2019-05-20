import React from 'react'
import NavBar from './NavBar'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

const styles = theme => ({
  root: {
    color: 'white',
    background: 'black no-repeat center center',
    backgroundSize: 'cover',
    minHeight: "340px",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '10%',
    paddingRight: '10%',
    [theme.breakpoints.up(1800)]:{
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
    color:'white',
    background:'#3A3A3A'
  },
  spacer: {
    width:78
  },
  img: {
    position:'absolute', bottom:0, zIndex:1, width:68
  }
})

const Footer = ({classes}) => (
  <Toolbar className={classes.footer}>
    <a href="http://smart-ib.coop/" className={classes.spacer}>
      <img className={classes.img} src="/images/logo.png" alt="Logo" />
    </a>
    <Typography color="inherit">Smart Coop in Europe:  Deutschland   France   Iberica   Italia   Magyarország   Nederland   Österreich   Sverige</Typography>
  </Toolbar>
)

function Layout({title, subtitle, background, children, classes}) {
  return (
    <div>
      <NavBar />
      <header className={classes.root} style={{backgroundImage: 'url("' + background + '")'}}>
        <Typography color="inherit" variant="h1" align="center">{title}</Typography>
        <Divider variant="middle" light={true} className={classes.divider} />
        <Typography color="inherit" variant="h3" align="center" className={classes.subtitle}>{subtitle}</Typography>
      </header>
      {children}
      <Footer classes={classes} />
    </div>
  )
}

export default withStyles(styles)(Layout);
