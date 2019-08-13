import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import { userActions } from '../actions'
import { useSelector, useDispatch } from 'react-redux'
import { BlankLayout } from '../components/Layout'

const useStyles = makeStyles(theme => ({
  background: {
    background: '#FF4B63 no-repeat center center fixed',
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 6}px ${theme.spacing.unit * 4}px`,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  marginTop: {
    marginTop: theme.spacing.unit * 3,
  },
}))

const login = {
  isLogin: true,
  title: 'Sign in to Smart Projects',
  subtitle: 'Enter your details below',
  button: 'Sign in',
  otherLink: {
    question: "Don't you have an account?",
    button: 'Get started',
    link: '/register',
  },
}

const register = {
  isLogin: false,
  title: 'Get started',
  subtitle: 'Enjoy the Smart Community',
  button: 'Start',
  otherLink: {
    question: 'Already you have an account?',
    button: 'Sign in',
    link: '/login',
  },
}

const Name = ({ name, setName }) => (
  <FormControl margin="normal" required fullWidth>
    <InputLabel htmlFor="email">Name</InputLabel>
    <Input
      id="name"
      name="name"
      value={name}
      onChange={e => setName(e.target.value)}
    />
  </FormControl>
)

const Email = ({ email, setEmail }) => (
  <FormControl margin="normal" required fullWidth>
    <InputLabel htmlFor="email">Email Address</InputLabel>
    <Input
      id="email"
      name="email"
      autoComplete="email"
      value={email}
      onChange={e => setEmail(e.target.value)}
    />
  </FormControl>
)

const Password = ({ password, setPassword }) => (
  <FormControl margin="normal" required fullWidth>
    <InputLabel htmlFor="password">Password</InputLabel>
    <Input
      name="password"
      type="password"
      id="password"
      value={password}
      onChange={e => setPassword(e.target.value)}
      autoComplete="current-password"
    />
  </FormControl>
)

const Remember = () => (
  <FormControlLabel
    control={<Checkbox value="remember" color="primary" />}
    label="Remember me"
  />
)

const Submit = ({ text }) => {
  const classes = useStyles()
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={classes.marginTop}
    >
      {text}
    </Button>
  )
}

const LinkToOtherForm = ({ question, button, onClick }) => {
  const classes = useStyles()
  return (
    <div className={classes.marginTop}>
      <Typography align="center">
        {question}{' '}
        <Button variant="outlined" color="primary" onClick={onClick}>
          {button}
        </Button>
      </Typography>
    </div>
  )
}

function Auth({ history, match: { path } }) {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  if (user) {
    history.push('/')
  }

  const classes = useStyles()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { title, subtitle, button, isLogin, otherLink } =
    path !== '/register' ? login : register

  const onSubmit = event => {
    event.preventDefault()
    isLogin
      ? dispatch(userActions.login(email, password, history))
      : dispatch(userActions.register({ name, email, password }, history))
  }
  return (
    <BlankLayout
      className={classes.background}
      style={{
        backgroundImage:
          'url(/images/' +
          (isLogin ? 'login' : 'register') +
          '-background.jpg)',
      }}
    >
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h3" align="center">
            {title}
          </Typography>
          <Typography component="h2" variant="subtitle1">
            {subtitle}
          </Typography>
          <form className={classes.form} onSubmit={onSubmit}>
            {!isLogin && <Name name={name} setName={setName} />}
            <Email email={email} setEmail={setEmail} />
            <Password password={password} setPassword={setPassword} />
            {false && <Remember />}
            <Submit classes={classes} text={button} />
            <Divider className={classes.marginTop} />
            <LinkToOtherForm
              classes={classes}
              {...otherLink}
              onClick={() => history.push(otherLink.link)}
            />
          </form>
        </Paper>
      </main>
    </BlankLayout>
  )
}

export default withRouter(Auth)
