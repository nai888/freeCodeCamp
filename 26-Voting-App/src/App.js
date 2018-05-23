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
    this.logIn = this.logIn.bind(this)
    this.logOut = this.logOut.bind(this)
    this.getNumPolls = this.getNumPolls.bind(this)
    this.getUserPolls = this.getUserPolls.bind(this)
    this.state = {
      loggedIn: true,
      displayName: 'Ian',
      userName: 'nai888',
      numPolls: undefined,
      userPolls: undefined,
      currentPoll: undefined
    }
    this.getNumPolls()
    if (this.state.loggedIn) this.getUserPolls()
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

  getUserPolls () {
    fetch(`${this.pollsApi}?name=${this.state.userName}`)
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

  logIn (dName, uName) {
    this.setState(prevState => ({
      loggedIn: true,
      displayName: dName,
      userName: uName
    }))
    this.getUserPolls()
  }

  logOut (e) {
    e.preventDefault()
    this.setState(prevState => ({
      loggedIn: false
    }))
    this.getUserPolls()
  }

  render () {
    return (
      <div className={this.props.classes.app}>
        <Helmet>
          <title>{siteTitle} Home</title>
          <meta name='theme-color' content={v.blu.string()} />
        </Helmet>
        <Header state={this.state} onLogOut={this.logOut} />
        <Main state={this.state} onLogIn={this.logIn} />
        <Footer />
      </div>
    )
  }
}

export default injectSheet(styles)(App)
