import React from 'react'
import { Link } from 'react-router-dom'
import injectSheet from 'react-jss'
import { Fetch } from 'react-request'
import classNames from 'classnames'

import env from '../../env'

import ButtonLink from '../Button/ButtonLink'

import styles from './styles'

const Dashboard = (props) => {
  const pollsApi = `${env.REACT_APP_SERVER_API_URL}api/polls`

  const numPolls = () => {
    return (
      <Fetch url={pollsApi}>
        {({ fetching, failed, response, data }) => {
          if (data) {
            return +data
          }
        }}
      </Fetch>
    )
  }

  const chooseRand = (num) => {
    console.log(num)
    const rand = Math.floor(Math.random() * num)
    console.log(rand)
    return rand
  }

  const myPolls = () => {
    return (
      <Fetch url={`${pollsApi}?name=${props.state.userName}`}>
        {({ fetching, failed, data }) => {
          if (fetching) {
            return (
              <div className={classNames(props.classes.polls, props.classes.fetching)}>
                <p className={props.classes.notice}>Loading polls&hellip;</p>
              </div>
            )
          } else if (failed) {
            return (
              <div className={classNames(props.classes.polls, props.classes.failed)}>
                <p className={props.classes.notice}>Unable to fetch your polls.</p>
              </div>
            )
          } else if (data) {
            const questions = data.map((q) => (
              <li className={props.classes.questionTitle} key={q.id}>
                <Link to={`/poll/${q.id}`}>
                  {q.question} &rarr;
                </Link>
              </li>
            ))
            return (
              <div className={classNames(props.classes.polls, props.classes.success)}>
                <ul className={props.classes.questionList}>
                  {questions}
                </ul>
              </div>
            )
          } else {
            return (
              <div className={classNames(props.classes.polls, props.classes.noData)}>
                <p className={props.classes.notice}>You have no polls yet.</p>
              </div>
            )
          }
        }}
      </Fetch>
    )
  }

  const dashboardPage = () => {
    if (props.state.loggedIn) {
      return (
        <div className={props.classes.dashboardPage}>
          <ButtonLink buttonType='success' route='/newpoll'>
            New Poll
          </ButtonLink> <ButtonLink buttonType='primary' route={`/polls/${chooseRand(numPolls())}`}>
            Random Poll
          </ButtonLink>
          <h3>Your Polls</h3>
          <p>{numPolls()}</p>
          {myPolls()}
        </div>
      )
    } else {
      return (
        <div className={props.classes.dashboardPage}>
          <p>To create a new poll, you will need to <Link to='/login'>log in</Link>.</p>
          <p>You may vote on others&rsquo; polls without logging in.</p>
          <ButtonLink buttonType='primary' route='/polls'>Random Poll</ButtonLink>
        </div>
      )
    }
  }

  return (
    <div className={props.classes.dashboard}>
      <h2>Dashboard</h2>
      {dashboardPage()}
    </div>
  )
}

export default injectSheet(styles)(Dashboard)
