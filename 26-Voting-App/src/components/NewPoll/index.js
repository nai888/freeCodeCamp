import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'

const NewPoll = (props) => (
  <div className={props.classes.newPoll}>
    <h2>New Poll</h2>
  </div>
)

export default injectSheet(styles)(NewPoll)
