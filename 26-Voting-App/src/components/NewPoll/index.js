import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'
import classNames from 'classnames'

import { siteTitle } from '../../App'

import Button from '../Button'

import styles from './styles'

class NewPoll extends React.Component {
  constructor (props) {
    super(props)
    this.titleInput = this.titleInput.bind(this)
    this.typeInput = this.typeInput.bind(this)
    this.answerInputs = this.answerInputs.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.deleteAnswer = this.deleteAnswer.bind(this)
    this.addAnswer = this.addAnswer.bind(this)
    this.state = {
      question: 'Are you single?',
      type: undefined,
      answers: ['Yes', 'No', "I'm not sure"]
    }
  }

  titleInput () {
    return (
      <div className={this.props.classes.pollQuestion}>
        <label htmlFor='question'>
          <p className={classNames(this.props.classes.pollQuestionLabel, this.props.classes.labelP)}>
            Question
          </p>
        </label>
        <input
          type='text'
          id='question'
          className={this.props.classes.textInput}
          name='question'
          value={this.state.question}
          onChange={this.handleChange}
        />
      </div>
    )
  }

  typeInput () {
    return (
      <div className={this.props.classes.pollType}>
        <p className={classNames(this.props.classes.pollTypeLabel, this.props.classes.labelP)}>
          Poll Type
        </p>
        <div>
          <input
            type='radio'
            id='radio'
            name='type'
            value='radio'
            checked={this.state.type === 'radio'}
            onChange={this.handleChange}
          />
          <label htmlFor='radio'> Single-Select (radio)</label>
        </div>
        <div>
          <input
            type='radio'
            id='checkbox'
            name='type'
            value='checkbox'
            checked={this.state.type === 'checkbox'}
            onChange={this.handleChange}
          />
          <label htmlFor='checkbox'> Multi-Select (checkbox)</label>
        </div>
      </div>
    )
  }

  answerInputs () {
    const solitary = this.state.answers.length === 1

    const answers = this.state.answers
      ? this.state.answers.map((a, index) => {
        const delButton = !solitary
          ? (
            <Button
              id={`button-${index}`}
              buttonType='danger'
              small
              onClick={this.deleteAnswer}
            >
              Del
            </Button>
          ) : null

        return (
          <div key={index}>
            <input
              type='text'
              id={`answer-${index}`}
              className={classNames(this.props.classes.textInput, this.props.classes.answersInput)}
              name='answers'
              value={this.state.answers[index]}
              onChange={this.handleChange}
            />
            {delButton}
          </div>
        )
      })
      : null

    return (
      <div className={this.props.classes.pollAnswers}>
        <p className={classNames(this.props.classes.pollAnswersLabel, this.props.classes.labelP)}>
          Answers
        </p>
        {answers}
      </div>
    )
  }

  handleChange (e) {
    if (e.target.name !== 'type') {
      e.preventDefault()
    }

    if (e.target.name === 'answers') {
      let answers = this.state.answers.slice()
      const i = e.target.id.slice(7)
      answers[i] = e.target.value
      this.setState({
        [e.target.name]: answers
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }

  deleteAnswer (e) {
    e.preventDefault()
    let answers = this.state.answers.slice()
    const i = e.target.id.slice(7)
    answers.splice(i, 1)
    this.setState({
      answers: answers
    })
  }

  addAnswer (e) {
    e.preventDefault()
    let answers = this.state.answers.slice()
    answers.push('')
    this.setState({
      answers: answers
    })
  }

  componentWillUnmount () {
    this.setState({
      question: undefined,
      type: undefined,
      answers: undefined
    })
  }

  render () {
    return (
      <div className={this.props.classes.newPoll}>
        <Helmet>
          <title>{siteTitle} New Poll</title>
        </Helmet>
        <h2>New Poll</h2>
        <form className={this.props.classes.newPollForm}>
          {this.titleInput()}
          {this.typeInput()}
          {this.answerInputs()}
          <Button
            small
            buttonType='primary'
            onClick={this.addAnswer}
          >
            Add
          </Button>
        </form>
      </div>
    )
  }
}

export default injectSheet(styles)(NewPoll)
