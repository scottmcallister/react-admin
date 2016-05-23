/* -------------------------------------------- 
 *            EXPRESS SERVER ROUTING
 * 
 * Routing in dashboard is handled through react 
 * router in /src/routers/Routes.jsx
 * ---------------------------------------------
*/


var express = require('express');
var router = express.Router();

var passportInstagram = require('../auth/instagram');


// Serve application file depending on environment
router.get('/app.js', function(req, res) {
  if (process.env.PRODUCTION) {
    res.sendFile(__dirname + '/build/app.js');
  } else {
    res.redirect('//localhost:9090/build/app.js');
  }
});

// Serve aggregate stylesheet depending on environment
router.get('/style.css', function(req, res) {
  if (process.env.PRODUCTION) {
    res.sendFile(__dirname + '/build/style.css');
  } else {
    res.redirect('//localhost:9090/build/style.css');
  }
});

router.get('/', function(req, res, next) {
  res.render('login', { title: 'Social Commerce' });
});

router.get('/login', function(req, res, next) {
  res.send('Go back and register!');
});
  
router.get('/auth/instagram', passportInstagram.authenticate('instagram'));

router.get('/auth/instagram/callback',
  passportInstagram.authenticate('instagram', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication
    res.json(req.user);
  });

module.exports = router;



/*
var express = require('express');
var path = require('path');
var router = express.Router();

var passportInstagram = require('../auth/instagram');

// Serve application file depending on environment
router.get('/app.js', function(req, res) {
  if (process.env.PRODUCTION) {
    res.sendFile(path.resolve('/build/app.js'));
  } else {
    res.redirect('//localhost:9090/build/app.js');
  }
});

// Serve aggregate stylesheet depending on environment
router.get('/styles.less', function(req, res) {
  if (process.env.PRODUCTION) {
    res.sendFile(path.resolve('/src/common/styles/app.less'));
  } else {
    res.redirect('//localhost:9090/src/common/styles/app.less');
  }
});

router.get('/', function(req, res, next) {
  res.sendFile(path.resolve('/build/login.html'));
});

router.get('/login', function(req, res, next) {
  res.send('Go back and register!');
});
  
router.get('/auth/instagram', passportInstagram.authenticate('instagram'));

router.get('/auth/instagram/callback',
  passportInstagram.authenticate('instagram', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication
    res.json(req.user);
  });

module.exports = router;*/