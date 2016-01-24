var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('signup', { title: 'School of Knife Throwing' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'School of Knife Throwing' });
});

module.exports = router;
