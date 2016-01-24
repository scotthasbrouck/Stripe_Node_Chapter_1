var express = require('express');
var router = express.Router();
var User = require('../models/user.js');

var templateProps = { title: 'School of Knife Throwing' };

router.post('/create', function(req, res) {
  var user = new User(req.body);
  user.save(function(err, user) {
    if (err) { templateProps.errors = [ err ]; }
    res.render('signup', templateProps);
  });
});

router.post('/login', function(req, res) {
  var user = new User(req.body);
  user.authenticate(function(err, user) {
     if (err) { templateProps.errors = [ err ]; }
     res.render('login', templateProps);
  });
});

module.exports = router;
