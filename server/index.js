// import express
const express = require('express');

// define express app instance
const app = express()

// add route
app.get('/', (req, res) =>
  // send response message
  res.send('Express.js is great, isn\'t it?')
)

module.exports = app
