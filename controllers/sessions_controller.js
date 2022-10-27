const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

// models
const User = require('../models/user')

router.get('/', (req, res) => {
  if (req.session.userId) {
    User
      .findById(req.session.userId)
      .then(userName => res.json(userName))
  } else {
    res.json({ error: 'no one logged in' })
  }
})

router.post('/', (req, res) => {
  const { email, password } = req.body


  User
  .findByEmail(email)
  .then(user => {
      console.log(user)
      if (email == '' || password == '') {
        res.status(400).json({ error: 'email and/or password cannot be blank' })
      } else 
        
        if (user) {
          const isValidPassword = bcrypt.compareSync(password, user.password_digest)
          if (isValidPassword) {
            req.session.userId = user.id
            res.json({name: user.name, email: user.email, bio: user.bio, photo_url: user.photo_url })
          } else {
            res.status(400).json({ error: 'Invalid Login' })
          }
        } else {
          res.status(400).json({ error: 'Invalid Login' })
        
      }
    })
  })


router.delete('/', (req,res) => {
  delete req.session.userId 
  res.json({message: 'delete successful'})
})



module.exports = router