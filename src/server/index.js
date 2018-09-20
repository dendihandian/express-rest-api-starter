// import and define express app instance
const app = require('express')()

// import and apply router
require('../routes/')(app)

module.exports = app
