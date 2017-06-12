import mongoose from 'mongoose'
import config from './config'

export default callback => {
  let db = mongoose.connect(config.mongoUrl)
  callback(db)
}

// import Sequelize from 'sequelize'
//
// const sequelize = new Sequelize('mysql://sql10179427:ryCTEWiteS@sql10.freemysqlhosting.net:3306/sql10179427')
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });
// export default sequelize
