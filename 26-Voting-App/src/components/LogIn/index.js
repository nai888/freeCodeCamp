import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'

const LogIn = (props) => (
  <div className={props.classes.login}>
    <h2>Log In</h2>
  </div>
)

export default injectSheet(styles)(LogIn)
