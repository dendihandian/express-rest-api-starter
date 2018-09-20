import mongoose from '../../modules/mongoose'
const Schema = mongoose.Schema

let exampleSchema = new Schema({
  string_example: { type: String, required: true },
  number_example: { type: Number, required: true },
  boolean_example: { type: Boolean, default: true },
  date_example: { type: Date, default: Date.now }
})

const Example = mongoose.model('Example', exampleSchema)

module.exports = Example
