'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (callback) {
  var db = _mongoose2.default.connect(_config2.default.mongoUrl);
  callback(db);
};

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
//# sourceMappingURL=db.js.map