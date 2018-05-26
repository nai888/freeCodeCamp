import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import injectSheet from 'react-jss'

import Dashboard from '../Dashboard'
import LoggedIn from '../LoggedIn'
import LogIn from '../LogIn'
import NewPoll from '../NewPoll'
import PollAdded from '../PollAdded'
import Polls from '../Polls'

import styles from './styles'

const Main = (props) => (
  <main className={props.classes.main}>
    <Switch>
      <Route path='/login' render={() => (
        !props.state.loggedIn ? ( // If the user is not logged in,
          <LogIn {...props} /> // take them to /login as requested.
        ) : ( // Otherwise,
          <Redirect to='/' /> // redirect them to the dashboard.
        )
      )} />
      <Route path='/loggedin/:login/:name' render={() => <LoggedIn {...props} />} />
      <Route path='/newpoll/:id' render={() => <PollAdded {...props} />} />
      <Route path='/newpoll' render={() => (
        props.state.loggedIn ? ( // If the user is logged in,
          <NewPoll {...props} /> // take them to /newpoll as requested.
        ) : ( // Otherwise,
          <Redirect to='/login' /> // redirect them to /login.
        )
      )} />
      <Route path='/polls/:id' render={() => <Polls page='poll' {...props} />} />
      <Route path='/results/:id' render={() => <Polls page='results' {...props} />} />
      <Route path='/' render={() => <Dashboard {...props} />} />
    </Switch>
  </main>
)

export default injectSheet(styles)(Main)
