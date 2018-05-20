import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'

const NewPoll = (props) => (
  <div className={props.classes.newPoll}>
    <h2>New Poll</h2>
    <p>This is where we&rsquo;ll create a new poll.</p>
  </div>
)

export default injectSheet(styles)(NewPoll)
