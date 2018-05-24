import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'
import { withRouter } from 'react-router'

import { siteTitle } from '../../App'

import styles from './styles'

const Poll = (props) => {
  props.onLoadPoll(props.match.params.id)

  const renderPoll = () => {
    if (props.state.currentPoll) {
      return (
        <h2>{props.state.currentPoll.question}</h2>
      )
    } else {
      return <h2>Loading&hellip;</h2>
    }
  }

  return (
    <div className={props.classes.poll}>
      <Helmet>
        <title>{siteTitle} Poll</title>
      </Helmet>
      {renderPoll()}
    </div>
  )
}

export default injectSheet(styles)(withRouter(Poll))
