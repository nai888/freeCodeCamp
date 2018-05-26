import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'

import { siteTitle } from '../../../App'
import ButtonsArea from '../../ButtonsArea/pollPage'

import styles from './styles'

const Results = (props) => {
  const renderSiteTitle = () => {
    return props.state.currentPoll
      ? `Results: ${props.state.currentPoll.question}`
      : 'Results'
  }

  const renderChart = () => {
    return <p>This is where results will go.</p>
  }

  const renderResults = () => {
    if (props.pollState.poll && props.pollState.answers !== undefined) {
      return (
        <form name='poll'>
          {renderChart()}
          {<ButtonsArea
            confirmDelete={props.pollState.confirmDelete}
            owned={props.owned}
            page={props.page}
            deleting={props.deleting}
            confirmingDelete={props.confirmingDelete}
            cancelingDelete={props.cancelingDelete}
          />}
        </form>
      )
    } else {
      return <h2>Loading&hellip;</h2>
    }
  }

  return (
    <div className={props.classes.results}>
      <Helmet>
        <title>
          {siteTitle} {renderSiteTitle()}
        </title>
      </Helmet>
      {renderResults()}
    </div>
  )
}

export default injectSheet(styles)(Results)
