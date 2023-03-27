var express = require('express');
const mock = require('../assets/mock');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json(mock.users);
});

router.get('/user/:id', function (req, res, next) {});

module.exports = router;
