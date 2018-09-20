// import and define express app instance
const app = require('express')()

// import and enable cors
const cors = require('cors')
app.use(cors())

// import and use bodyParser
var bodyParser = require('body-parser')
app.use(bodyParser.json()) // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}))

// import and apply router
require('../routes/')(app)

module.exports = app
