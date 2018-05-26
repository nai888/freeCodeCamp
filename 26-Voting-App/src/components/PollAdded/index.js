import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'

import { siteTitle } from '../../App'

import styles from './styles'

const Dashboard = (props) => {
  const theLink = () => {
    const relLink = `/polls/${props.match.params.id}`
    const printUrl = window.location.href.slice(0, -props.location.pathname.length) + relLink

    return (
      <div className={props.classes.linkArea}>
        <p>You can access or share your poll with this link:</p>
        <Link
          to={relLink}
          className={props.classes.pollLink}
        >
          {printUrl}
        </Link>
      </div>
    )
  }

  return (
    <div className={props.classes.dashboard}>
      <Helmet>
        <title>{siteTitle} Poll Added</title>
      </Helmet>
      <h2>New Poll Added Successfully</h2>
      {theLink()}
    </div>
  )
}

export default withRouter(injectSheet(styles)(Dashboard))
