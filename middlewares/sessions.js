const expressSession = require("express-session");
require("dotenv").config();
// const crypto = require("crypto");

const sessions = expressSession({
  key: "user_sid",
  secret: process.env.REACT_APP_EXPRESS_SESSION_SECRET,
  secretKey: process.env.CRYPTO_SECRET_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 24 },
});
// const crypto = require("crypto");
// const secret = crypto.randomBytes(32).toString("hex");
// console.log(secret);

module.exports = sessions;
