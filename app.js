const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const routes = require('./app/controllers');
const db_connect = require('./lib/db_connect')();
const CONSTANTS = require('./config/constants');

const app = express();

app.use(logger('dev'));
//app.use(cookieParser());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(express.static('public'));
app.use(
  session({
    secret: 'My$ecRet@Key',
    resave: true,
    saveUninitialized: true,
  })
);
app.set('view engine', 'hbs');
app.set('views', 'app/views');

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-origin', '*');
//   // res.header('Access-Control-Allow-origin-Methods', 'GET,PUT,POST,DELETE');
//   // res.header('Access-Control-Allow-origin-Headers', 'Content-type');
//   next();
// });

app.get('/', function(req, res) {
  if (req.session && req.session.user) {
    res.render('dashboard');
  }
  res.render('login');
});
app.use('/', routes);
module.exports = app;
