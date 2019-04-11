import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
import { Context } from '../context'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function randomUser() {
  const users = ['Silvia', 'Sara', 'Sem', 'Antonio', 'Jordi', 'David', 'Samer', 'Geno', 'Elena']
  return users[Math.floor(Math.random()*users.length)]
}

function ButtonAppBar({ title, classes }) {
  let {state, dispatch} = useContext(Context)
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">

          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {title}{state.user && ' - ' + state.user}
          </Typography>
          { !state.user ?
            <Button color="inherit" onClick={()=>dispatch({type: 'LOGIN', user: randomUser()})}>Login</Button>
          :
            <Button color="inherit" onClick={()=>dispatch({type: 'LOGOUT'})}>Logout</Button>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
