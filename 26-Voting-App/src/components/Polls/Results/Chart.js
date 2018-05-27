import React from 'react'
import { Bar } from 'react-chartjs'

import * as v from '../../../styles/variables'

const ResultsChart = (props) => {
  let labels = []
  let data = []

  for (let i = 0; i < props.answers.length; i++) {
    labels.push(props.answers[i].answer)

    let votes = props.answers[i].guestVotes + props.answers[i].userVotes.length

    data.push(votes)
  }

  return (
    <Bar
      className={props.classes.chart}
      data={{
        labels: labels,
        datasets: [
          {
            label: 'Votes',
            fillColor: v.blu.alpha(0.5).string(),
            strokeColor: v.blu.string(),
            highlightFill: v.blu.lighten(0.1).alpha(0.5).string(),
            highlightStroke: v.blu.lighten(0.1).string(),
            data: data
          }
        ]
      }}
      options={{
        scaleLineColor: v.black.alpha(0.1).string(),
        scaleIntegersOnly: true,
        scaleBeginAtZero: true,
        scaleFontColor: v.black.string(),
        responsive: true,
        maintainAspectRatio: false,
        tooltipFillColor: v.black.alpha(0.75).string(),
        tooltipFontColor: v.white.string(),
        tooltipTitleFontColor: v.white.string(),
        scaleShowGridLines: true,
        scaleGridLineColor: v.black.alpha(0.25).string(),
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: true,
        scaleShowVerticalLines: false,
        barShowStroke: true,
        barStrokeWidth: 1,
        barValueSpacing: 10,
        barDatasetSpacing: 5
      }}
    />
  )
}

export default ResultsChart
