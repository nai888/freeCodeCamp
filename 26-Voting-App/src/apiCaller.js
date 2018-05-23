import env from './env'

const fetch = window.fetch

class ApiCaller {
  constructor () {
    this.pollsApi = `${env.REACT_APP_SERVER_API_URL}api/polls`
  }

  getNumQuestions () {
    fetch(this.pollsApi)
      .then(res => {
        return res.json()
      })
  }
}

const apiCaller = new ApiCaller()

export default apiCaller
