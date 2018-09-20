const mongoose = require('mongoose')
const Schema = mongoose.Schema

let exampleSchema = new Schema({
  stringExample: { type: String, required: true },
  numberExample: { type: Number, required: true },
  booleanExample: { type: Boolean, default: true },
  dateExample: { type: Date, default: Date.now }
})

const Example = mongoose.model('Example', exampleSchema)

module.exports = Example
