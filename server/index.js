// import express
const express = require('express');

// define express app instance
const app = express()

// import routes
const routes = require('../routes/')

// apply routes
routes(app)

module.exports = app
