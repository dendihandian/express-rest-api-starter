import { check } from 'express-validator/check'

const exampleValidator = [
  check('stringExample').exists().withMessage('stringExample is required'),
  check('stringExample').isString().withMessage('stringExample must be a string'),

  check('numberExample').exists().withMessage('numberExample is required'),
  check('numberExample').matches(/\d/).withMessage('numberExample must be a integer'),

  check('booleanExample').exists().withMessage('booleanExample is required'),
  check('booleanExample').isBoolean().withMessage('booleanExample must be a boolean value')
]

module.exports = exampleValidator
