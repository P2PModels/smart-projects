import React from 'react'
import { Router, Route, Switch, Redirect } from "react-router-dom"
import { history } from './helpers'
import Home from './pages/HomePage'
import Project from './pages/ProjectPage'
import ProjectForm from './pages/ProjectFormPage'
import Auth from './pages/AuthPage'
import { withStyles } from '@material-ui/core/styles';
import './App.css'

const styles = theme => ({
  /*root: {
    [theme.breakpoints.up('md')]: {
      maxWidth: '80%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }*/
})

function App({classes}) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Auth} />
        <Route path="/register" component={Auth} />
        <Route path="/project/new" component={ProjectForm} />
        <Route path="/project/:id" component={Project} />
        <Route render={() => <Redirect to="/" />}/>
      </Switch>
    </Router>
  )
}

export default withStyles(styles)(App)
