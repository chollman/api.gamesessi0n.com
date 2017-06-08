import mongoose from 'mongoose'
let Schema = mongoose.Schema

let gameSessionSchema = new Schema({
  name: String
})

module.exports = mongoose.model('GameSession', gameSessionSchema)
