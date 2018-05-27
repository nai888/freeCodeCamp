import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'
import classNames from 'classnames'

import { siteTitle } from '../../../App'
import Button from '../../Button'
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

  const editArea = () => {
    if (props.state.loggedIn) {
      if (props.editable) {
        if (props.pollState.editing) {
          return answerInputs()
        } else {
          return (
            <div className={props.classes.addButton}>
              <Button
                small
                buttonType='primary'
                onClick={props.onAddOptions}
              >
                Add Options
              </Button>
            </div>
          )
        }
      } else {
        return null
      }
    } else {
      return null
    }
  }

  const answerInputs = () => {
    const answers = props.pollState.addingAnswers
      ? props.pollState.addingAnswers.map((a, index) => (
        <div key={index}>
          <input
            type='text'
            id={`answer-${index}`}
            className={classNames(props.classes.textInput, props.classes.answersInput)}
            name='addingAnswers'
            value={props.pollState.addingAnswers[index]}
            onChange={props.onHandleOptionEdit}
          />
          <Button
            id={`button-${index}`}
            buttonType='danger'
            small
            onClick={props.deleteAnswer}
          >
            Del
          </Button>
        </div>
      ))
      : null

    return (
      <div>
        {answers}
        <Button
          small
          buttonType='primary'
          onClick={props.addAnswer}
        >
          Add
        </Button>
      </div>
    )
  }

  const renderForm = () => {
    if (props.pollState.poll && props.pollState.answers !== undefined) {
      return (
        <form name='poll'>
          {renderAnswers()}
          {editArea()}
          {<ButtonsArea
            confirmDelete={props.pollState.confirmDelete}
            editing={props.pollState.editing}
            onSaveEdit={props.onSaveEdit}
            onCancelEdit={props.onCancelEdit}
            owned={props.owned}
            page={props.page}
            voting={props.voting}
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
