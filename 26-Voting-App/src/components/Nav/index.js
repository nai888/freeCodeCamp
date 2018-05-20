import React from 'react'
import { NavLink } from 'react-router-dom'
import injectSheet from 'react-jss'

import Greeting from './Greeting'
import NewPollLink from './NewPollLink'
import styles from './styles'

const Nav = (props) => {
  const loggedIn = props.state.loggedIn

  return (
    <nav className={props.classes.nav}>
      <ul className={props.classes.menu}>
        <Greeting
          classes={props.classes}
          loggedIn={loggedIn}
          name={props.state.displayName}
          onLogOut={props.onLogOut}
        />
        <li className={props.classes.menuLink}>
          <NavLink to='/' exact activeClassName={props.classes.active}>
            Dashboard
          </NavLink>
        </li>
        <NewPollLink classes={props.classes} loggedIn={loggedIn} />
      </ul>
    </nav>
  )
}

export default injectSheet(styles)(Nav)
