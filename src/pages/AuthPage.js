import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import {withRouter} from 'react-router-dom'
import { Context } from '../context'

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

const login = {
  isLogin: true,
  title: "Sing in to Smart Projects",
  subtitle: "Enter your details below",
  button: "Sign in",
}

const register = {
  isLogin: false,
  title: "Get started",
  subtitle: "Enjoy the Smart Community",
  button: "Start",
}

const Name = ({ name, setName}) => <FormControl margin="normal" required fullWidth>
  <InputLabel htmlFor="email">Name</InputLabel>
  <Input id="name" name="name" value={name} onChange={e => setName(e.target.value)} />
</FormControl>

const Email = ({ email, setEmail }) => <FormControl margin="normal" required fullWidth>
  <InputLabel htmlFor="email">Email Address</InputLabel>
  <Input id="email" name="email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} />
</FormControl>

const Password = ({ password, setPassword }) => <FormControl margin="normal" required fullWidth>
  <InputLabel htmlFor="password">Password</InputLabel>
  <Input name="password" type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} autoComplete="current-password" />
</FormControl>

const Remember = () => <FormControlLabel
  control={<Checkbox value="remember" color="primary" />}
  label="Remember me"
/>

const Submit = ({ text, classes }) => <Button
  type="submit"
  fullWidth
  variant="contained"
  color="primary"
  className={classes.submit}
>
  {text}
</Button>

function Auth({ classes, history,  match: { path } }) {
  let {state: { user }, dispatch} = useContext(Context)
  if (user) {
    history.push('/')
  }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { title, subtitle, button, isLogin } = path !== '/register' ? login : register

  const onSubmit = event => {
    event.preventDefault()
    isLogin?
      dispatch({type: 'LOGIN', user: {email, password}})
    :
      dispatch({type: 'REGISTER', user: {name, email, password}})
  }
  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
        <Typography component="h2" variant="h6">
          {subtitle}
        </Typography>
        {isLogin ? (
          <form className={classes.form} onSubmit={onSubmit}>
            <Email email={email} setEmail={setEmail} />
            <Password password={password} setPassword={setPassword} />
            <Remember />
            <Submit classes={classes} text={button} />
            Don't you have an account? <Button onClick={() => history.push('/register')}>Get started</Button>
          </form>
        ) : (
          <form className={classes.form} onSubmit={onSubmit}>
            <Name name={name} setName={setName} />
            <Email email={email} setEmail={setEmail} />
            <Password password={password} setPassword={setPassword} />
            <Remember />
            <Submit classes={classes} text={button} />
          </form>
        )}
      </Paper>
    </main>
  );
}

Auth.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Auth));
