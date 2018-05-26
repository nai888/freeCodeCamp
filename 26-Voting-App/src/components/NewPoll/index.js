import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'
import { withRouter } from 'react-router-dom'
import classNames from 'classnames'

import { siteTitle } from '../../App'

import Button from '../Button'
import ButtonsArea from '../ButtonsArea/newPollPage'

import styles from './styles'

class NewPoll extends React.Component {
  constructor (props) {
    super(props)
    this.titleInput = this.titleInput.bind(this)
    this.typeInput = this.typeInput.bind(this)
    this.editableInput = this.editableInput.bind(this)
    this.answerInputs = this.answerInputs.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.deleteAnswer = this.deleteAnswer.bind(this)
    this.addAnswer = this.addAnswer.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleConfirmDelete = this.handleConfirmDelete.bind(this)
    this.handleCancelDelete = this.handleCancelDelete.bind(this)
    this.state = {
      confirmDelete: false,
      question: 'Are you single?',
      type: undefined,
      editable: false,
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

  editableInput () {
    return (
      <div className={this.props.classes.pollEditable}>
        <p className={classNames(this.props.classes.pollEditableLabel, this.props.classes.labelP)}>
          Can users who are logged in add options to this poll?
        </p>
        <div>
          <input
            type='checkbox'
            id='editable'
            name='editable'
            checked={this.state.editable}
            onChange={this.handleChange}
          />
          <label htmlFor='editable'> Poll can be edited</label>
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
    if (e.target.name !== 'type' && e.target.name !== 'editable') {
      e.preventDefault()
    }

    if (e.target.name === 'answers') {
      let answers = this.state.answers.slice()
      const i = e.target.id.slice(7)
      answers[i] = e.target.value
      this.setState({
        [e.target.name]: answers
      })
    } else if (e.target.name === 'editable') {
      this.setState({
        [e.target.name]: e.target.checked
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

  handleSubmit () {
    this.props.addPoll('the poll will go here')
  }

  handleDelete () {
    this.setState({
      confirmDelete: true
    })
  }

  handleConfirmDelete () {
    if (this.state.confirmDelete) {
      this.props.history.push('/')
    }
  }

  handleCancelDelete () {
    this.setState({
      confirmDelete: false
    })
  }

  componentWillUnmount () {
    this.setState({
      confirmDelete: false,
      question: undefined,
      type: undefined,
      editable: false,
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
          {this.editableInput()}
          {this.answerInputs()}
          <Button
            small
            buttonType='primary'
            onClick={this.addAnswer}
          >
            Add
          </Button>
          <ButtonsArea
            confirmDelete={this.state.confirmDelete}
            submitting={this.handleSubmit}
            deleting={this.handleDelete}
            confirmingDelete={this.handleConfirmDelete}
            cancelingDelete={this.handleCancelDelete}
          />
        </form>
      </div>
    )
  }
}

export default withRouter(injectSheet(styles)(NewPoll))
