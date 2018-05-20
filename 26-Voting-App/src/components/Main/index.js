import React from 'react'
import { Switch, Route } from 'react-router-dom'
import injectSheet from 'react-jss'

import Dashboard from '../Dashboard'
import LoggedIn from '../LoggedIn'
import LogIn from '../LogIn'
import NewPoll from '../NewPoll'
import Poll from '../Poll'

import styles from './styles'

const Main = (props) => (
  <main className={props.classes.main}>
    <Switch>
      <Route path='/login' render={(props) => <LogIn {...props} />} />
      <Route path='/loggedin/:login/:name' render={(props) => <LoggedIn {...props} />} />
      <Route path='/newpoll' render={(props) => <NewPoll {...props} />} />
      <Route path='/polls/:id' render={(props) => <Poll {...props} />} />
      <Route path='/' render={(props) => <Dashboard {...props} />} />
    </Switch>
  </main>
)

export default injectSheet(styles)(Main)
