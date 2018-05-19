import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'

const LogIn = ({ classes }) => (
  <div className={classes.login}>
    <h2>Log In</h2>
  </div>
)

export default injectSheet(styles)(LogIn)
