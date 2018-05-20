import React from 'react'
import { Link } from 'react-router-dom'
import injectSheet from 'react-jss'

import Nav from '../Nav'

import styles from './styles'

const Header = (props) => {
  return (
    <header className={props.classes.header}>
      <h1 className={props.classes.title}>
        <Link to='/' className={props.classes.titleLink}>
          freeCodeCamp Voting App
        </Link>
      </h1>
      <Nav state={props.state} onLogOut={props.onLogOut} />
    </header>
  )
}

export default injectSheet(styles)(Header)
