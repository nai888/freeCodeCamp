'use strict'

import * as mongoose from 'mongoose'
const Schema = mongoose.Schema

const User = new Schema({
  github: {
    id: String,
    displayName: String,
    username: String,
    publicRepos: Number
  },
  polls: Array
})

export default mongoose.model('User', User)
