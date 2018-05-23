import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'

import { siteTitle } from '../../App'
import env from '../../env'

import Button from '../Button'

import styles from './styles'

const LogIn = (props) => {
  let redir = '/'
  const loginApi = `${env.SERVER_API_URL}auth/github`

  const onLogIn = (e) => {
    e.preventDefault()
    window.location = `${loginApi}?url=${redir}`
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

export default injectSheet(styles)(LogIn)
