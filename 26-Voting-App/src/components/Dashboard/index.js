import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'

const Dashboard = ({ classes }) => (
  <div className={classes.dashboard}>
    <h2>Dashboard</h2>
  </div>
)

export default injectSheet(styles)(Dashboard)
