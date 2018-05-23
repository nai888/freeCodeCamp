import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'

import { siteTitle } from '../../App'

import styles from './styles'

const Poll = (props) => (
  <div className={props.classes.poll}>
    <Helmet>
      <title>{siteTitle} Poll</title>
    </Helmet>
    <h2>Poll</h2>
  </div>
)

export default injectSheet(styles)(Poll)
