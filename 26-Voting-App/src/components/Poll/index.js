import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'
import { withRouter } from 'react-router'

import { siteTitle } from '../../App'

import Button from '../Button'

import styles from './styles'

class Poll extends React.Component {
  constructor (props) {
    super(props)
    this.setLocalPoll = this.setLocalPoll.bind(this)
    this.renderSiteTitle = this.renderSiteTitle.bind(this)
    this.renderPoll = this.renderPoll.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.renderButtons = this.renderButtons.bind(this)
    this.onVote = this.onVote.bind(this)
    this.onDelete = this.onDelete.bind(this)
    this.onConfirmDelete = this.onConfirmDelete.bind(this)
    this.onCancelDelete = this.onCancelDelete.bind(this)
    this.props.onLoadPoll(this.props.match.params.id, this.setLocalPoll)
    this.state = {
      confirmDelete: false,
      poll: undefined,
      answers: undefined
    }
  }

  setLocalPoll () {
    if (this.props.state.currentPoll) {
      this.setState({
        poll: JSON.parse(JSON.stringify(this.props.state.currentPoll))
      }, () => {
        let answersArr = JSON.parse(JSON.stringify(this.state.poll.answers))
        let answers = {}
        let choice

        for (let i = 0; i < answersArr.length; i++) {
          let a = answersArr[i]

          if (this.state.poll.type === 'radio' && a.userVotes.includes(this.props.state.userName)) {
            choice = a.answer
            break
          }

          answers[a.id] = a.userVotes.includes(this.props.state.userName)
        }

        if (this.state.poll.type === 'radio') {
          if (choice === undefined) {
            choice = false
          }

          this.setState({
            answers: choice
          })
        } else if (this.state.poll.type === 'checkbox') {
          this.setState({
            answers: answers
          })
        }
      })
    }
  }

  renderSiteTitle () {
    return this.props.state.currentPoll
      ? `Poll: ${this.props.state.currentPoll.question}`
      : 'Poll'
  }

  renderPoll () {
    if (this.state.poll && this.state.answers !== undefined) {
      const answers = this.state.poll.answers.map((a) => {
        const checked = this.state.poll.type === 'radio'
          ? this.state.answers === a.answer
          : this.state.answers[a.id]
        return (
          <div key={a.id} className={this.props.classes.answerDiv}>
            <input
              id={a.id}
              name={this.state.poll.question}
              type={this.state.poll.type}
              value={a.answer}
              checked={checked}
              onChange={this.handleChange}
            />
            <label htmlFor={a.id}>
              {` ${a.answer}`}
            </label>
          </div>
        )
      })

      return (
        <form name='poll'>
          <h2>{this.state.poll.question}</h2>
          {answers}
          {this.renderButtons()}
        </form>
      )
    } else {
      return <h2>Loading&hellip;</h2>
    }
  }

  handleChange (e) {
    let answers = JSON.parse(JSON.stringify(this.state.answers))
    if (this.state.poll.type === 'checkbox') {
      answers[+e.target.id] = e.target.checked
    } else if (this.state.poll.type === 'radio') {
      answers = e.target.value
    }
    this.setState({
      answers: answers
    })
  }

  renderButtons () {
    if (this.state.poll.owner === this.props.state.userName) {
      if (this.state.confirmDelete) {
        return (
          <div className={this.props.classes.buttons}>
            <p className={this.props.classes.confirmation}>
              Are you sure you want to delete this poll?
            </p>
            <Button buttonType='danger' onClick={this.onConfirmDelete}>
              Delete Poll
            </Button>
            <Button buttonType='primary' onClick={this.onCancelDelete}>
              Cancel
            </Button>
          </div>
        )
      } else {
        return (
          <div className={this.props.classes.buttons}>
            <Button buttonType='success' onClick={this.onVote}>
              Vote
            </Button>
            <Button buttonType='warning' onClick={this.onDelete}>
              Delete Poll
            </Button>
          </div>
        )
      }
    } else {
      return (
        <div className={this.props.classes.buttons}>
          <Button buttonType='success' onClick={this.onVote}>
            Vote
          </Button>
        </div>
      )
    }
  }

  onVote (e) {
    e.preventDefault()
  }

  onDelete (e) {
    e.preventDefault()
    this.setState({
      confirmDelete: true
    })
  }

  onConfirmDelete (e) {
    e.preventDefault()
    if (this.state.confirmDelete) { }
  }

  onCancelDelete (e) {
    e.preventDefault()
    this.setState({
      confirmDelete: false
    })
  }

  componentWillUnmount () {
    this.props.onClearPoll()
    this.setState({
      poll: undefined,
      answers: undefined
    })
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

export default withRouter(injectSheet(styles)(Poll))
