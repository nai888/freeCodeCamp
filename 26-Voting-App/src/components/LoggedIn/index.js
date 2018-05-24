import React from 'react'
import { withRouter } from 'react-router'

class LoggedIn extends React.Component {
  constructor (props) {
    super(props)
    const q = props.location.search
    const qArray = q.split('?')[1].split('&')
    let qParams = {}
    for (let i = 0; i < qArray.length; i++) {
      const [key, val] = qArray[i].split('=')
      qParams[key] = val || true
    }
    this.redir = qParams.redir
  }

  componentDidMount () {
    this.props.onLogIn(
      this.props.match.params.name,
      this.props.match.params.login
    )
    setTimeout(() => {
      this.props.history.push(this.redir)
    }, 1000)
  }

  render () {
    return (
      <div className={this.props.classes.loggedIn}>
        <h2>Logged In</h2>
        <p>Redirecting&hellip;</p>
      </div>
    )
  }
}

export default withRouter(LoggedIn)
