import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'

import { siteTitle } from '../../App'

import styles from './styles'

const NewPoll = (props) => (
  <div className={props.classes.newPoll}>
    <Helmet>
      <title>{siteTitle} New Poll</title>
    </Helmet>
    <h2>New Poll</h2>
    <p>This is where we&rsquo;ll create a new poll.</p>
  </div>
)

export default injectSheet(styles)(NewPoll)
