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

export const siteTitle = 'Voting App |'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.logIn = this.logIn.bind(this)
    this.logOut = this.logOut.bind(this)
    this.state = {
      loggedIn: false,
      displayName: undefined,
      userName: undefined
    }
  }

  logIn () {
    this.setState(prevState => ({
      loggedIn: true
    }))
  }

  logOut () {
    this.setState(prevState => ({
      loggedIn: false
    }))
  }

  render () {
    return (
      <div className={this.props.classes.app}>
        <Helmet>
          <title>{siteTitle} Home</title>
          <meta name='theme-color' content={v.blu.string()} />
        </Helmet>
        <Header state={this.state} onLogOut={this.logOut} />
        <Main state={this.state} />
        <Footer />
      </div>
    )
  }
}

export default injectSheet(styles)(App)
