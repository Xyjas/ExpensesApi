const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

const apiRoutes = require('./routes')

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(bodyParser.json())

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

//connect to mongoose
const dbPath =
  'mongodb+srv://admin:Ostrava123*@cluster0.rdnnc.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority'
const options = { useNewUrlParser: true, useUnifiedTopology: true }
const mongo = mongoose.connect(dbPath, options)

mongo.then(
  () => {
    console.log('connected')
  },
  (error) => {
    console.log(error, 'error')
  }
)
var db = mongoose.connection

//Check DB Connection
if (!db) console.log('Error connecting db')
else console.log('DB Connected Successfully')

// Server Port
var port = process.env.PORT || 8080

//Use API routes in the App
app.use('/api', apiRoutes)

// Launch app to the specified port
app.listen(port, function () {
  console.log('Running Expenses API ' + port)
})
