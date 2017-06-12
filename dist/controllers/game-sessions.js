'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _gameSession = require('../model/game-session');

var _gameSession2 = _interopRequireDefault(_gameSession);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var config = _ref.config,
      db = _ref.db;

  var api = (0, _express.Router

  // '/v1/game-sessions' - Create
  )();api.post('/', function (req, res) {
    var newGameSession = new _gameSession2.default();
    newGameSession.name = req.body.name;

    newGameSession.save(function (err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Game session created successfully' });
    });
  }

  // '/v1/game-sessions' - Read
  );api.get('/', function (req, res) {
    _gameSession2.default.find({}, function (err, gameSessions) {
      if (err) {
        res.send(err);
      }
      res.json(gameSessions);
    });
  }

  // '/v1/game-sessions/:id' - Read 1
  );api.get('/:id', function (req, res) {
    _gameSession2.default.findById(req.params.id, function (err, gameSession) {
      if (err) {
        res.send(err);
      }
      res.json(gameSession);
    });
  }

  // '/v1/game-sessions/:id' - Update
  );api.put('/:id', function (req, res) {
    _gameSession2.default.findById(req.params.id, function (err, gameSession) {
      if (err) {
        res.send(err);
      }
      gameSession.name = req.body.name;
      gameSession.save(function (err) {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'Game session updated successfully' });
      });
    });
  }

  // '/v1/game-sessions/:id' - Delete
  );api.delete('/:id', function (req, res) {
    _gameSession2.default.remove({
      _id: req.params.id
    }, function (err, gameSession) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Game session removed successfully' });
    });
  });

  return api;
};
//# sourceMappingURL=game-sessions.js.map