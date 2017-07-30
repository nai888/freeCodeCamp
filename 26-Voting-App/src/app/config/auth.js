'use strict'

module.exports = {
  'githubAuth': {
    'clientID': process.env.gitHubID,
    'clientSecret': process.env.gitHubSecret,
    'callbackURL': process.env.appURL + 'auth/github/callback'
  }
}
