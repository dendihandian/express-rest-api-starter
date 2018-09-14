// load env constants
require('dotenv').config()

// import express
const server = require('./server');

server.listen(process.env.APP_PORT, () =>
  console.log(`Server is running on port ${process.env.APP_PORT}`)
)
