import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'
import { withRouter } from 'react-router'

import { siteTitle } from '../../App'

import styles from './styles'

class Poll extends React.Component {
  constructor (props) {
    super(props)
    this.renderPoll = this.renderPoll.bind(this)
    this.props.onLoadPoll(this.props.match.params.id)
  }

  renderPoll () {
    if (this.props.state.currentPoll) {
      return (
        <h2>{this.props.state.currentPoll.question}</h2>
      )
    } else {
      return <h2>Loading&hellip;</h2>
    }
  }

  renderSiteTitle () {
    return this.props.state.currentPoll
      ? `Poll: ${this.props.state.currentPoll.question}`
      : 'Poll'
  }

  componentWillUnmount () {
    this.props.onClearPoll()
  }

  render () {
    return (
      <div className={this.props.classes.poll}>
        <Helmet>
          <title>
            {siteTitle} {this.renderSiteTitle()}
          </title>
        </Helmet>
        {this.renderPoll()}
      </div>
    )
  }
}

export default injectSheet(styles)(withRouter(Poll))
