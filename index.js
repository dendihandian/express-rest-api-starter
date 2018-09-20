// load env constants
require('dotenv').config()

// import express
const server = require('./server')

// define port
const port = process.env.APP_PORT || 3000

server.listen(port, () =>
  console.log(`Server is running on port ${port}`)
)
