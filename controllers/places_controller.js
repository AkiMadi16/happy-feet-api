const express = require('express')
const router = express.Router()

//models
const Place = require('../models/place')

// routes
router.get('/', (req, res) => {
  Place
  .findAll()
  .then(allPlaces => res.json(allPlaces))
})

router.post('/', (req, res) => {
  const name = req.body.name
  const image= req.body.image
  const address = req.body.address
 
  Place
  .create(name, image, address)
  .then(place => res.json(place))
})

router.delete('/:id', (req, res) => {
  const placeId = req.params.id

  Place
  .delete(placeId)
  .then(() => res.json({ message: 'deleted successfully'}))
})

module.exports = router 
