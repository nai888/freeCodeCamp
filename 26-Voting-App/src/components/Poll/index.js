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
    this.renderSiteTitle = this.renderSiteTitle.bind(this)
    this.renderPoll = this.renderPoll.bind(this)
    this.renderButtons = this.renderButtons.bind(this)
    this.onVote = this.onVote.bind(this)
    this.onDelete = this.onDelete.bind(this)
    this.onConfirmDelete = this.onConfirmDelete.bind(this)
    this.onCancelDelete = this.onCancelDelete.bind(this)
    this.props.onLoadPoll(this.props.match.params.id)
    this.state = {
      confirmDelete: false
    }
    this.poll = undefined
  }

  renderSiteTitle () {
    return this.props.state.currentPoll
      ? `Poll: ${this.props.state.currentPoll.question}`
      : 'Poll'
  }

  renderPoll () {
    if (this.props.state.currentPoll) {
      this.poll = JSON.parse(JSON.stringify(this.props.state.currentPoll))
      const qs = this.poll.answers.map((a) => (
        <div key={a.id} className={this.props.classes.answerDiv}>
          <input
            id={a.id}
            name={this.poll.question}
            type={this.poll.type}
            value={a.answer}
          />
          <label htmlFor={a.id}>
            {` ${a.answer}`}
          </label>
        </div>
      ))

      return (
        <form>
          <h2>{this.poll.question}</h2>
          {qs}
          {this.renderButtons()}
        </form>
      )
    } else {
      return <h2>Loading&hellip;</h2>
    }
  }

  renderButtons () {
    if (this.poll.owner === this.props.state.userName) {
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
