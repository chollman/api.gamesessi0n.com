'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _middleware = require('../middleware');

var _middleware2 = _interopRequireDefault(_middleware);

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _gameSessions = require('../controllers/game-sessions');

var _gameSessions2 = _interopRequireDefault(_gameSessions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express2.default

// connect to db
)();(0, _db2.default)(function (db) {
  // internal middleware
  router.use((0, _middleware2.default)({ config: _config2.default, db: db })

  // api routes
  );router.use('/game-sessions', (0, _gameSessions2.default)({ config: _config2.default, db: db }));
});

exports.default = router;
//# sourceMappingURL=index.js.map