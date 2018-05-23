import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'

import { siteTitle } from '../../App'

import styles from './styles'

const LogIn = (props) => (
  <div className={props.classes.login}>
    <Helmet>
      <title>{siteTitle} Log In</title>
    </Helmet>
    <h2>Log In</h2>
  </div>
)

export default injectSheet(styles)(LogIn)
