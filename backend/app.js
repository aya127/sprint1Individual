require('./api/config/DBConnection');
const bodyParser = require('body-parser'),
  compression = require('compression'),
  cookieParser = require('cookie-parser'),
  config = require('./api/config/Config'),
  cors = require('cors'),
  express = require('express'),
  helmet = require('helmet'),
  localStrategy = require('passport-local').Strategy,
  logger = require('morgan'),
  mongoose = require('mongoose'),
  passport = require('passport'),
  path = require('path'),
  routes = require('./api/routes');

const app = express();

app.set('secret', config.SECRET);

app.use(logger(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'DELETE']
  })
);
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(cookieParser());
app.use(require('express-session')({
    secret: config.SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', routes);

// Configure passport
User = mongoose.model('User');
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// 500 internal server error handler
app.use((err, req, res, next) => {
  if (err.statusCode === 404) return next();
  res.status(500).json({
    // Never leak the stack trace of the err if running in production mode
    err: process.env.NODE_ENV === 'production' ? null : err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    msg: '500 Internal Server Error',
    data: null
  });
});

// 404 error handler
app.use((req, res) => {
  res.status(404).json({
    err: null,
    msg: '404 Not Found',
    data: null
  });
});

module.exports = app;
