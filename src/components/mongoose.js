// load env constants
import mongoose from 'mongoose'

require('dotenv').config()

const host = process.env.MONGODB_HOST || 'localhost'
const port = process.env.MONGODB_PORT || 27017
const database = process.env.MONGODB_DATABASE

// mongoose connection
mongoose.Promise = global.Promise
mongoose.connect(`mongodb://${host}:${port}/${database}`, {
  useNewUrlParser: true
})

module.exports = mongoose
