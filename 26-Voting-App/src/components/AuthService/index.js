class AuthService {
  getLoggedIn () {
    console.log(this.state.loggedIn)
    return this.state.loggedIn
  }

  getDisplayName () {
    return this.state.displayName
  }

  getUserName () {
    return this.state.userName
  }
}

const auth = new AuthService()

export default auth
