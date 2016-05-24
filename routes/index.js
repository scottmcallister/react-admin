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
var rp = require('request-promise');


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

router.get('/dashboard', function(req, res, next){
   res.render('index');
});

router.get('/login', function(req, res, next) {
  res.send('Go back and register!');
});

router.get('/tagsearch', function(req, res, next){
  var text = req.query.q;
  var token = req.session.user.token;
  var options = {
      uri: 'https://api.instagram.com/v1/tags/'+text+'/media/recent?access_token='+token,
      /*qs: {
          access_token: 'xxxxx xxxxx' // 
      },*/
      headers: {
          'User-Agent': 'Request-Promise'
      },
      json: true // Automatically parses the JSON string in the response 
  };
  
  rp(options)
      .then(function (data) {
          res.json(data);
      })
      .catch(function (err) {
          // API call failed... 
          console.log("FAILURE");
          console.log(req.session);
          console.log("token: " + token);
          console.log(text);
          console.log(options);
    });
})
  
router.get('/auth/instagram', passportInstagram.authenticate('instagram'));

router.get('/auth/instagram/callback',
  passportInstagram.authenticate('instagram', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication
    req.session.user = req.user;
    res.redirect('/dashboard');
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