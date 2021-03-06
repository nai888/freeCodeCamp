import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'
import classNames from 'classnames'

import { siteTitle } from '../../App'

import ButtonLink from '../Button/ButtonLink'

import styles from './styles'

const Dashboard = (props) => {
  const chooseRand = (allPolls) => {
    if (allPolls) {
      const chosen = Math.floor(Math.random() * allPolls.length)
      return allPolls[chosen]._id
    } else {
      return null
    }
  }

  const myPolls = () => {
    if (props.state.userPolls === 'loading') {
      return (
        <p className={classNames(props.classes.notice, props.classes.fetching)}>
          Loading polls&hellip;
        </p>
      )
    } else if (props.state.userPolls === 'error') {
      return (
        <p className={classNames(props.classes.notice, props.classes.failed)}>
          Unable to fetch your polls.
        </p>
      )
    } else if (props.state.userPolls) {
      if (props.state.userPolls.length) {
        const questions = props.state.userPolls.map((q) => (
          <li className={props.classes.questionTitle} key={q._id}>
            <Link to={`/polls/${q._id}`}>
              {q.question} &rarr;
            </Link>
          </li>
        ))
        return (
          <ul className={classNames(props.classes.questionList, props.classes.success)}>
            {questions}
          </ul>
        )
      } else {
        return (
          <p className={classNames(props.classes.notice, props.classes.noPolls)}>
            You have no polls yet.
          </p>
        )
      }
    } else {
      return null
    }
  }

  const dashboardPage = () => {
    if (props.state.loggedIn) {
      return (
        <div className={props.classes.dashboardPage}>
          <ButtonLink buttonType='success' route='/newpoll'>
            New Poll
          </ButtonLink> <ButtonLink buttonType='primary' route={`/polls/${chooseRand(props.state.allPolls)}`}>
            Random Poll
          </ButtonLink>
          <h3>Your Polls</h3>
          {myPolls()}
        </div>
      )
    } else {
      return (
        <div className={props.classes.dashboardPage}>
          <p>To create a new poll, you will need to <Link
            to={{
              pathname: '/login',
              state: { referrer: props.location.pathname }
            }}
          >
            log in
          </Link>.</p>
          <p>You may vote on others&rsquo; polls without logging in.</p>
          <ButtonLink buttonType='primary' route={`/polls/${chooseRand(props.state.allPolls)}`}>
            Random Poll
          </ButtonLink>
        </div>
      )
    }
  }

  return (
    <div className={props.classes.dashboard}>
      <Helmet>
        <title>{siteTitle} Dashboard</title>
      </Helmet>
      <h2>Dashboard</h2>
      {dashboardPage()}
    </div>
  )
}

export default withRouter(injectSheet(styles)(Dashboard))
