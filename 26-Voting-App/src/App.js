import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'
import 'normalize.css/normalize.css'

import * as v from './styles/variables'
import styles from './styles/app'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

export const siteTitle = 'Voting App |'

const App = ({ classes }) => (
  <div className={classes.app}>
    <Helmet>
      <title>{siteTitle} Home</title>
      <meta name='theme-color' content={v.blu.string()} />
    </Helmet>
    <Header />
    <Main />
    <Footer />
  </div>
)

export default injectSheet(styles)(App)
