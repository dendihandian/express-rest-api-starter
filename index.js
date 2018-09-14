// import express
const express = require("express");

// define express app instance
const app = express()

// define port
const port = 3000

// add route
app.get('/', (req, res) =>
  // send response message
  res.send(`Express.js is great, isn't it?`)
)

// definisikan listening server
app.listen(port, () =>
  console.log(`Server is running on port ${port}`)
)
