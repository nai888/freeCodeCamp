import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'

const Poll = ({ classes }) => (
  <div className={classes.poll}>
    <h2>Poll</h2>
  </div>
)

export default injectSheet(styles)(Poll)
