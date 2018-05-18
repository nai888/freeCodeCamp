import React from 'react'
import { Link } from 'react-router-dom'
import injectSheet from 'react-jss'

import Nav from '../Nav'

import styles from './styles'

const Header = ({ classes }) => (
  <header className={classes.header}>
    <h1 className={classes.title}>
      <Link to='/' className={classes.titleLink}>
        freeCodeCamp Voting App
      </Link>
    </h1>
    <Nav />
  </header>
)

export default injectSheet(styles)(Header)
