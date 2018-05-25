import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'

import { siteTitle } from '../../App'

import styles from './styles'

class Results extends React.Component {
  constructor (props) {
    super(props)
    this.renderSiteTitle = this.renderSiteTitle.bind(this)
  }

  renderSiteTitle () {
    return this.props.state.currentPoll
      ? `Results: ${this.props.state.currentPoll.question}`
      : 'Results'
  }

  render () {
    return (
      <div className={this.props.classes.results}>
        <Helmet>
          <title>
            {siteTitle} {this.renderSiteTitle()}
          </title>
        </Helmet>
        <h2>Results</h2>
        <p>This is where we&rsquo;ll show the results of a poll.</p>
      </div>
    )
  }
}

export default injectSheet(styles)(Results)
