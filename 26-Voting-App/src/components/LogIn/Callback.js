import React from 'react'
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router-dom'

import { siteTitle } from '../../App'
import env from '../../env'

const fetch = window.fetch

class Callback extends React.Component {
  constructor (props) {
    super(props)
    this.splitQuery = this.splitQuery.bind(this)
    this.callbackApi = `${env.SERVER_API_URL}api/auth/github/callback`
    this.code = this.splitQuery(this.props.location.search).code
  }

  splitQuery (query) {
    let qArr = query.split('=')
    let qObj = {}
    for (let i = 0; i < qArr.length; i++) {
      if (i % 2) {
        continue
      } else {
        if (qArr[i][0] === '?' || qArr[i][0] === '&') {
          qArr[i] = qArr[i].slice(1)
        }

        qObj[qArr[i]] = qArr[i + 1]
      }
    }

    return qObj
  }

  componentDidMount () {
    fetch(`${this.callbackApi}?code=${this.code}`)
      .then(res => {
        return res.json()
      })
      .catch(error => {
        console.error(error)
      })
      .then(url => {
        this.props.history.push(url)
      })
  }

  render () {
    return (
      <Helmet>
        <title>{siteTitle} Logging In</title>
      </Helmet>
    )
  }
}

export default withRouter(Callback)
