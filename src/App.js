import React from 'react'
import NavBar from './components/NavBar'
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import Home from './pages/HomePage'
import Project from './pages/ProjectPage'
import ProjectForm from './pages/ProjectFormPage'
import Auth from './pages/AuthPage'
import { withStyles } from '@material-ui/core/styles';
import './App.css'

const styles = theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      maxWidth: '80%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }
})

function App({classes}) {
  const { t } = useTranslation('App')

  return (
    <Router>
      <div className={classes.root}>
      <NavBar>{t('Smart Projects')}</NavBar>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Auth} />
        <Route path="/register" component={Auth} />
        <Route path="/project/new" component={ProjectForm} />
        <Route path="/project/:id" component={Project} />
        <Route render={() => <Redirect to="/" />}/>
      </Switch>
      </div>
    </Router>
  )
}

export default withStyles(styles)(App)
