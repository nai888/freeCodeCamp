import React from 'react'
import { Switch, Route } from 'react-router-dom'
import injectSheet from 'react-jss'

import Dashboard from '../Dashboard'
import LoggedIn from '../LoggedIn'
import LogIn from '../LogIn'
import NewPoll from '../NewPoll'
import Poll from '../Poll'

import styles from './styles'

const Main = ({ classes }) => (
  <main className={classes.main}>
    <Switch>
      <Route path='login' component={LogIn} />
      <Route path='loggedin/:login/:name' component={LoggedIn} />
      <Route path='newpoll' component={NewPoll} />
      <Route path='polls/:id' component={Poll} />
      <Route path='/' component={Dashboard} />
    </Switch>
  </main>
)

export default injectSheet(styles)(Main)
