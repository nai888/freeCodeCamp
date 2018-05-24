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
  }

  componentDidMount () {
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
    if (this.props.state.currentPoll) {
      return `Poll: ${this.props.state.currentPoll.question}`
    } else {
      return 'Poll'
    }
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
