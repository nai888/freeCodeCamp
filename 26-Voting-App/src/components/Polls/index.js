import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'
import { withRouter } from 'react-router'

import { siteTitle } from '../../App'

import Poll from './Poll'
import Results from './Results'
import styles from './styles'

class Polls extends React.Component {
  constructor (props) {
    super(props)

    this.setLocalPoll = this.setLocalPoll.bind(this)
    this.renderSiteTitle = this.renderSiteTitle.bind(this)
    this.renderPageTitle = this.renderPageTitle.bind(this)
    this.renderOwner = this.renderOwner.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.renderWhichPage = this.renderWhichPage.bind(this)
    this.deleting = this.deleting.bind(this)
    this.confirmingDelete = this.confirmingDelete.bind(this)
    this.cancelingDelete = this.cancelingDelete.bind(this)

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

  renderPageTitle () {
    if (this.state.poll) {
      return <h2>{this.state.poll.question}</h2>
    } else {
      return <h2>Loading&hellip;</h2>
    }
  }

  renderOwner () {
    if (this.props.state.currentPoll) {
      return (
        <p className={this.props.classes.owner}>
          Poll posted by <a
            className={this.props.classes.ownerLink}
            href={`https://github.com/${this.props.state.currentPoll.owner}`}
          >
            @{this.props.state.currentPoll.owner}
          </a>.
        </p>)
    } else {
      return null
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

  renderWhichPage () {
    if (this.state.poll) {
      if (this.props.page === 'poll') {
        return (
          <Poll
            pollState={this.state}
            owned={this.state.poll.owner === this.props.state.userName}
            onChange={this.handleChange}
            deleting={this.deleting}
            confirmingDelete={this.confirmingDelete}
            cancelingDelete={this.cancelingDelete}
            {...this.props}
          />
        )
      } else if (this.props.page === 'results') {
        return (
          <Results
            pollState={this.state}
            owned={this.state.poll.owner === this.props.state.userName}
            deleting={this.deleting}
            confirmingDelete={this.confirmingDelete}
            cancelingDelete={this.cancelingDelete}
            {...this.props}
          />
        )
      } else {
        return null
      }
    } else {
      return null
    }
  }

  deleting () {
    this.setState({
      confirmDelete: true
    })
  }

  confirmingDelete () {
    if (this.state.confirmDelete) { }
  }

  cancelingDelete () {
    this.setState({
      confirmDelete: false
    })
  }

  componentWillUnmount () {
    this.props.onClearPoll()
    this.setState({
      confirmDelete: false,
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
        {this.renderPageTitle()}
        {this.renderOwner()}
        {this.renderWhichPage()}
      </div>
    )
  }
}

export default withRouter(injectSheet(styles)(Polls))
