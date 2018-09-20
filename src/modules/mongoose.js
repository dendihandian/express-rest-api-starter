// load env constants
import mongoose from 'mongoose'

require('dotenv').config()

const host = process.env.MONGODB_HOST || 'localhost'
const port = process.env.MONGODB_PORT || 27017
const collection = process.env.MONGODB_COLLECTION

// mongoose connection
mongoose.Promise = global.Promise
mongoose.connect(`mongodb://${host}:${port}/${collection}`, {
  useNewUrlParser: true
})

module.exports = mongoose
