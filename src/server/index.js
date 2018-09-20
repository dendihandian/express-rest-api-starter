// import and define express app instance
const app = require('express')()

// import and define cors instance
const cors = require('cors')

// enable cors
app.use(cors())

// import and apply router
require('../routes/')(app)

module.exports = app
