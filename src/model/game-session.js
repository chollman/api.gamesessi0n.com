import mongoose from 'mongoose'
let Schema = mongoose.Schema

let gameSessionSchema = new Schema({
  name: String
})

export default mongoose.model('GameSession', gameSessionSchema)

// import Sequelize from 'sequelize'
//
// const gameSessionModel = Sequelize.define('GameSession', {
//   name: {
//     type: Sequelize.STRING
//   }
// });
//
// export default gameSessionModel
