import React from 'react'
import { Switch, Route } from 'react-router-dom'
import injectSheet from 'react-jss'

import Dashboard from '../Dashboard'

import styles from './styles'

const Main = ({ classes }) => (
  <main className={classes.main}>
    <Switch>
      <Route path='/' component={Dashboard} />
    </Switch>
  </main>
)

export default injectSheet(styles)(Main)
