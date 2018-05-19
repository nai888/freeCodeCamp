import React from 'react'
import { NavLink } from 'react-router-dom'
import injectSheet from 'react-jss'
import classNames from 'classnames'

import styles from './styles'

const Greeting = ({ classes, name }) => {
  if (name) {
    return (
      <li className={classNames(classes.greeting, classes.menuLink)}>
        Welcome, {name}! <small>
          <NavLink to='/logout' activeClassName={classes.active}>
            (log out)
          </NavLink>
        </small>
      </li>
    )
  } else {
    return (
      <li className={classNames(classes.greeting, classes.menuLink)}>
        Welcome! Please <NavLink
          to='/login' activeClassName={classes.active}>
          log in
        </NavLink>.
      </li>
    )
  }
}

const NewPollLink = ({ classes, loggedIn }) => {
  if (loggedIn) {
    return (
      <li className={classes.menuLink}>
        <NavLink to='/newpoll' activeClassName={classes.active}>New Poll</NavLink>
      </li>
    )
  } else {
    return (
      <li className={classNames(classes.menuLink, classes.disabled)}>
        New Poll
      </li>
    )
  }
}

const Nav = ({ classes, name, loggedIn }) => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.menu}>
        <Greeting classes={classes} username={name} />
        <li className={classes.menuLink}>
          <NavLink to='/' exact activeClassName={classes.active}>Dashboard</NavLink>
        </li>
        <NewPollLink classes={classes} loggedIn={loggedIn} />
      </ul>
    </nav>
  )
}

export default injectSheet(styles)(Nav)
