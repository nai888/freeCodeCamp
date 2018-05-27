import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'
import { withRouter } from 'react-router-dom'

import { siteTitle } from '../../App'
import env from '../../env'

import Button from '../Button'

import styles from './styles'

const fetch = window.fetch

const LogIn = (props) => {
  let redir = props.location.state.referrer || '/'
  const loginApi = `${env.SERVER_API_URL}api/auth/github`

  const onLogIn = (e) => {
    e.preventDefault()
    fetch(`${loginApi}?url=${redir}`)
      .then(res => {
        return res.json()
      })
      .catch(error => {
        console.error(error)
      })
      .then(url => {
        window.location = url
      })
  }

  return (
    <div className={props.classes.login}>
      <Helmet>
        <title>{siteTitle} Log In</title>
      </Helmet>
      <h2>Log In</h2>
      <p>Several features require that you log in. You can log in with a GitHub account.</p>
      <Button buttonType={'primary'} onClick={onLogIn}>
        Log In With GitHub
      </Button>
    </div>
  )
}

export default withRouter(injectSheet(styles)(LogIn))
