const expressSession = require('express-session')

const sessions = expressSession({
  key: 'user_sid',
  secret: process.env.EXPRESS_SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 24 }
})

module.exports = sessions