// *** main dependencies *** //
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var swig = require('swig');
var passport = require('passport');
var session = require('express-session');
var mongoose = require('mongoose');
var lessCompiler = require('express-less-middleware');

// *** routes *** //
var routes = require('./routes/index.js');


// *** express instance *** //
var app = express();

// *** less compiler *** //
lessCompiler = lessCompiler(__dirname + '/src/common');

// *** mongoose *** //
mongoose.connect('mongodb://localhost/passport-social-auth');


// *** view engine *** //
var swig = new swig.Swig();
app.engine('html', swig.renderFile);
app.set('view engine', 'html');


// *** static directory *** //
app.set('views', path.join(__dirname, 'views'));


// *** config middleware *** //
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(__dirname + '/build'));
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(lessCompiler);


// *** main routes *** //
app.use('/', routes);


/*************************************************************
 *
 * Webpack Dev Server
 *
 * See: http://webpack.github.io/docs/webpack-dev-server.html
 *
 *************************************************************/

if (!process.env.PRODUCTION) {
  var webpack = require('webpack');
  var WebpackDevServer = require('webpack-dev-server');
  var config = require('./webpack.local.config');

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    noInfo: true,
    historyApiFallback: true
  }).listen(9090, 'localhost', function (err, result) {
    if (err) {
      console.log(err);
    }
  });
}

var port = process.env.PORT || 8080;
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server listening on port %s', port);
});


// // *** main dependencies *** //
// var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// var swig = require('swig');
// var passport = require('passport');
// var passportInstagram = require('./auth/instagram');
// var session = require('express-session');
// var mongoose = require('mongoose');


// var routes = require('./routes/index.js');

// // *** express instance *** //
// var app = express();

// // *** mongoose *** //
// mongoose.connect('mongodb://localhost/react-admin');


// /************************************************************
//  *
//  * Express routes for:
//  *   - app.js
//  *   - style.css
//  *   - index.html
//  *
//  *   Sample endpoints to demo async data fetching:
//  *     - POST /landing
//  *     - POST /home
//  *
//  ************************************************************/

// /*
// // Serve application file depending on environment
// app.get('/app.js', function(req, res) {
//   if (process.env.PRODUCTION) {
//     res.sendFile(__dirname + '/build/app.js');
//   } else {
//     res.redirect('//localhost:9090/build/app.js');
//   }
// });

// // Serve aggregate stylesheet depending on environment
// app.get('/styles.less', function(req, res) {
//   if (process.env.PRODUCTION) {
//     res.sendFile(__dirname + '/src/common/styles/app.less');
//   } else {
//     res.redirect('//localhost:9090/src/common/styles/app.less');
//   }
// });


// app.get('/', function(req, res, next) {
//   res.sendFile(__dirname + '/build/login.html');
// });

// app.get('/login', function(req, res, next) {
//   res.send('Go back and register!');
// });
  
// app.get('/auth/instagram', passportInstagram.authenticate('instagram'));

// app.get('/auth/instagram/callback',
//   passportInstagram.authenticate('instagram', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication
//     res.json(req.user);
//   });
//   */

// // *** config middleware *** //
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname + '/build', __dirname + '/src/common')));
// app.use(session({
//   secret: 'keyboard cat',
//   resave: true,
//   saveUninitialized: true
// }));
// app.use(passport.initialize());
// app.use(passport.session());

// /* Serve index page
// app.get('*', function(req, res) {
//   res.sendFile(__dirname + '/build/index.html');
// });*/

// // *** main routes *** //
// app.use('/', routes);


// /*************************************************************
//  *
//  * Webpack Dev Server
//  *
//  * See: http://webpack.github.io/docs/webpack-dev-server.html
//  *
//  *************************************************************/

// if (!process.env.PRODUCTION) {
//   var webpack = require('webpack');
//   var WebpackDevServer = require('webpack-dev-server');
//   var config = require('./webpack.local.config');

//   new WebpackDevServer(webpack(config), {
//     publicPath: config.output.publicPath,
//     hot: true,
//     noInfo: true,
//     historyApiFallback: true
//   }).listen(9090, 'localhost', function (err, result) {
//     if (err) {
//       console.log(err);
//     }
//   });
// }


// /******************
//  *
//  * Express server
//  *
//  *****************/

// var port = process.env.PORT || 8080;
// var server = app.listen(port, function () {
//   var host = server.address().address;
//   var port = server.address().port;

//   console.log('Server listening on port %s', port);
// });
