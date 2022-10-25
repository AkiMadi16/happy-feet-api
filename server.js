const express = require('express')
const app = express()
const port = process.env.PORT || 3001;


// middlewares
const logger = require('./middlewares/logger')
const sessions = require('./middlewares/sessions')

// controllers

const placesController = require('./controllers/places_controller')
const usersController = require('./controllers/users_controller')
const sessionsController = require('./controllers/sessions_controller')

app.listen(port, () => console.log(`Server listening on ${port}`))

app.use(logger)
app.use(express.json())
app.use(sessions)

app.use('/api/allPlaces', placesController)
app.use('/api/users', usersController)
app.use('/api/sessions', sessionsController)

// // You can replace this with a database
// let places = []

// fetch('/places')
//  .then(res => res.json())
//  .then(res => console.log(res))



// Routes
app.get('/places', (req, res) => {
  console.log(res)
  res.json({ places: 'hello world' })
})

app.post('/places', (req, res) => {
  places = req.body.places
  res.json({ places })
})

if (process.env.NODE_ENV === 'production') {
  const path = require('path')
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

app.get('/bingMapsKey', (req, res) => {
  res.json(process.env.BING_API_KEY)
})