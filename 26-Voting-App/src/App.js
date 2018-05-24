import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'
import 'normalize.css/normalize.css'

import * as v from './styles/variables'
import styles from './styles/app'

// import auth from './components/AuthService'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import env from './env'

export const siteTitle = 'Voting App |'

const fetch = window.fetch

class App extends React.Component {
  constructor (props) {
    super(props)
    this.pollsApi = `${env.SERVER_API_URL}api/polls`
    this.pollApi = `${env.SERVER_API_URL}api/poll`
    this.logOutApi = `${env.SERVER_API_URL}api/logout`
    this.logIn = this.logIn.bind(this)
    this.logOut = this.logOut.bind(this)
    this.getNumPolls = this.getNumPolls.bind(this)
    this.getUserPolls = this.getUserPolls.bind(this)
    this.getCurrentPoll = this.getCurrentPoll.bind(this)
    this.state = {
      loggedIn: true,
      displayName: 'Ian',
      userName: 'nai888',
      numPolls: undefined,
      userPolls: undefined,
      currentPoll: undefined
    }
    this.getNumPolls()
    if (this.state.userName) this.getUserPolls(this.state.userName)
  }

  getNumPolls () {
    fetch(this.pollsApi)
      .then(res => {
        return res.json()
      })
      .catch(error => {
        console.error(error)
      })
      .then(data => {
        this.setState(prevState => ({
          numPolls: data
        }))
      })
  }

  getUserPolls (username) {
    fetch(`${this.pollsApi}?name=${username}`)
      .then(res => {
        this.setState(prevState => ({
          userPolls: 'loading'
        }))
        return res.json()
      })
      .catch(error => {
        this.setState(prevState => ({
          userPolls: 'error'
        }))
        console.error(error)
      })
      .then(data => {
        this.setState(prevState => ({
          userPolls: data
        }))
      })
  }

  getCurrentPoll (id) {
    fetch(`${this.pollApi}?id=${id}`)
      .then(res => {
        return res.json()
      })
      .catch(error => {
        console.error(error)
      })
      .then(data => {
        this.setState(prevState => ({
          currentPoll: data
        }))
      })
  }

  logIn (dName, uName) {
    this.setState(prevState => ({
      loggedIn: true,
      displayName: dName,
      userName: uName
    }))
    this.getUserPolls(uName)
  }

  logOut (e) {
    e.preventDefault()
    this.setState(prevState => ({
      loggedIn: false,
      displayName: undefined,
      userName: undefined,
      userPolls: undefined
    }))
    fetch(this.logOutApi)
  }

  render () {
    return (
      <div className={this.props.classes.app}>
        <Helmet>
          <title>{siteTitle} Home</title>
          <meta name='theme-color' content={v.blu.string()} />
        </Helmet>
        <Header
          state={this.state}
          onLogOut={this.logOut}
        />
        <Main
          state={this.state}
          onLogIn={this.logIn}
          onLoadPoll={this.getCurrentPoll}
        />
        <Footer />
      </div>
    )
  }
}

export default injectSheet(styles)(App)
