import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'

import { siteTitle } from '../../../App'
import ButtonsArea from '../../ButtonsArea/pollPage'

import styles from './styles'

const Poll = (props) => {
  const renderSiteTitle = () => {
    return props.state.currentPoll
      ? `Poll: ${props.state.currentPoll.question}`
      : 'Poll'
  }

  const renderAnswers = () => {
    if (props.pollState.poll && props.pollState.answers !== undefined) {
      return props.pollState.poll.answers.map((a) => {
        const checked = props.pollState.poll.type === 'radio'
          ? props.pollState.answers === a.answer
          : props.pollState.answers[a.id]
        return (
          <div key={a.id} className={props.classes.answerDiv}>
            <input
              id={a.id}
              name={props.pollState.poll.question}
              type={props.pollState.poll.type}
              value={a.answer}
              checked={checked}
              onChange={props.onChange}
            />
            <label htmlFor={a.id}>
              {` ${a.answer}`}
            </label>
          </div>
        )
      })
    } else {
      return null
    }
  }

  const renderForm = () => {
    if (props.pollState.poll && props.pollState.answers !== undefined) {
      return (
        <form name='poll'>
          {renderAnswers()}
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
      return null
    }
  }

  return (
    <div className={props.classes.poll}>
      <Helmet>
        <title>
          {siteTitle} {renderSiteTitle()}
        </title>
      </Helmet>
      {renderForm()}
    </div>
  )
}

export default injectSheet(styles)(Poll)
