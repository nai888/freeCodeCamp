import React from 'react'
import { Link } from 'react-router-dom'
import injectSheet from 'react-jss'

import ButtonLink from '../Button/ButtonLink'

import styles from './styles'

const Dashboard = (props) => {
  const dashboardPage = () => {
    if (props.state.loggedIn) {
      return (
        <div className={props.classes.dashboardPage}>
          <ButtonLink buttonType='success' route='/newpoll'>
            New Poll
          </ButtonLink> <ButtonLink buttonType='primary' route='/polls'>
            Random Poll
          </ButtonLink>
          <h3>Your Polls</h3>
          <p className={props.classes.noPolls}>You have no polls yet.</p>
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
