const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

// models
const User = require('../models/user')

// routes
router.post('/', (req, res) => {
    const { name, email, password, photoUrl, bio } = req.body
  
    // using bcrypt to create password digest
    const passwordDigest = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
  
    User
      .create(name, email, passwordDigest, photoUrl, bio)
      .then(userName => res.json(userName))
  })
  module.exports = router