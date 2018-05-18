import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import injectSheet from 'react-jss'

import styles from './styles/global'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

const Router = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

const Style = injectSheet(styles)(Router)

ReactDOM.render(<Style />, document.getElementById('root'))

registerServiceWorker()
