import React from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

const NewPollLink = (props) => {
  if (props.loggedIn) {
    return (
      <li className={props.classes.menuLink}>
        <NavLink to='/newpoll' activeClassName={props.classes.active}>New Poll</NavLink>
      </li>
    )
  } else {
    return (
      <li className={classNames(props.classes.menuLink, props.classes.disabled)}>
        New Poll
      </li>
    )
  }
}

export default NewPollLink
