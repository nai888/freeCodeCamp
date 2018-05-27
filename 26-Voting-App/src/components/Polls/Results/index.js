import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'

import { siteTitle } from '../../../App'
import ButtonsArea from '../../ButtonsArea/pollPage'

import ResultsChart from './Chart'
import styles from './styles'

const Results = (props) => {
  const renderSiteTitle = () => {
    return props.state.currentPoll
      ? `Results: ${props.state.currentPoll.question}`
      : 'Results'
  }

  const renderChart = () => {
    let answers = []

    for (let i = 0; i < props.pollState.poll.answers.length; i++) {
      answers.push(JSON.parse(JSON.stringify(props.pollState.poll.answers[i])))
    }

    return (
      <div className={props.classes.chartContainer}>
        <ResultsChart answers={answers} classes={props.classes} />
      </div>
    )
  }

  const renderResults = () => {
    if (props.pollState.poll && props.pollState.answers !== undefined) {
      return (
        <div className={props.classes.resultsArea}>
          {renderChart()}
          {<ButtonsArea
            confirmDelete={props.pollState.confirmDelete}
            owned={props.owned}
            page={props.page}
            deleting={props.deleting}
            confirmingDelete={props.confirmingDelete}
            cancelingDelete={props.cancelingDelete}
          />}
        </div>
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
