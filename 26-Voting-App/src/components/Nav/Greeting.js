import React from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

const Greeting = (props) => {
  if (props.loggedIn) {
    return (
      <li className={classNames(props.classes.greeting, props.classes.menuLink)}>
        Welcome, {props.name}! <small>
          <span
            className={props.classes.logOut}
            onClick={props.onLogOut}
            role='button'
            tabindex='0'
          >
            (log out)
          </span>
        </small>
      </li>
    )
  } else {
    return (
      <li className={classNames(props.classes.greeting, props.classes.menuLink)}>
        Welcome! Please <NavLink
          to='/login' activeClassName={props.classes.active}>
          log in
        </NavLink>.
      </li>
    )
  }
}

export default Greeting
