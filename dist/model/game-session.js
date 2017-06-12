'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var gameSessionSchema = new Schema({
  name: String
});

exports.default = _mongoose2.default.model('GameSession', gameSessionSchema

// import Sequelize from 'sequelize'
//
// const gameSessionModel = Sequelize.define('GameSession', {
//   name: {
//     type: Sequelize.STRING
//   }
// });
//
// export default gameSessionModel
);
//# sourceMappingURL=game-session.js.map