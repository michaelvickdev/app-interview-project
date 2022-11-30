const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const db = require('./database')

// Set default port for express app
const PORT = process.env.PORT || 4001

const app = express()

// Apply middleware
app.use(cors())
app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use((req, res, next) => {
  req.db = db
  next()
})

app.use('/auth', require('./routes/authRouter'))
app.use('/registry', require('./routes/registryRouter'))

// Implement 500 error route
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something is broken.')
})

// Implement 404 error route
app.use(function (req, res, next) {
  res.status(404).send('Sorry we could not find that.')
})

// Start express app
app.listen(PORT, function () {
  console.log(`Server is running on: ${PORT}`)
})