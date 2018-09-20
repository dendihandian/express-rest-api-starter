import Example from '../models/Example'
import moment from 'moment'

const listExample = (request, response) => {
  Example.find({}, (error, examples) => {
    if (error) {
      response.status(500).json({
        message: error.message,
        code: error.name
      })
    }

    let camelCasedExamples = []
    examples.forEach((example) => {
      camelCasedExamples.push({
        id: example._id,
        stringExample: example.string_example,
        numberExample: example.number_example,
        booleanExample: example.boolean_example,
        createdAt: moment(example.created_at).format('YYYY-DD-MM HH:mm:ss'),
        updatedAt: moment(example.updated_at).format('YYYY-DD-MM HH:mm:ss')
      })
    })

    response.status(200).json({
      message: 'Example List',
      data: camelCasedExamples
    })
  })
}

const createExample = (request, response) => {
  const input = request.body

  let newExample = new Example({
    string_example: input.stringExample,
    number_example: input.numberExample,
    boolean_example: input.booleanExample
  })

  newExample.save((error, example) => {
    if (error) {
      response.status(500).json({
        message: error.message,
        code: error.name
      })
    }
    response.status(201).json({
      message: 'Example Created',
      data: {
        id: example._id,
        stringExample: example.string_example,
        numberExample: example.number_example,
        booleanExample: example.boolean_example,
        createdAt: moment(example.created_at).format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: moment(example.updated_at).format('YYYY-MM-DD HH:mm:ss')
      }
    })
  })
}

const showExample = (request, response) => {
  Example.findOne({ _id: request.params.exampleId }, (error, example) => {
    if (error) {
      response.status(500).json({
        message: error.message,
        code: error.name
      })
    }

    if (example == null) {
      response.status(404).json({
        message: 'Example Not Found',
        code: 'ErrorNotFound'
      })
    } else {
      response.status(200).json({
        message: 'Example Detail',
        data: {
          id: example._id,
          stringExample: example.string_example,
          numberExample: example.number_example,
          booleanExample: example.boolean_example,
          createdAt: moment(example.created_at).format('YYYY-MM-DD HH:mm:ss'),
          updatedAt: moment(example.updated_at).format('YYYY-MM-DD HH:mm:ss')
        }
      })
    }
  })
}

const updateExample = (request, response) => {
  const input = request.body
  const body = {
    string_example: input.stringExample,
    number_example: input.numberExample,
    boolean_example: input.booleanExample
  }
  const options = {
    new: true
  }

  Example.findOneAndUpdate({ _id: request.params.exampleId }, body, options, (error, example) => {
    if (error) {
      response.status(500).json({
        message: error.message,
        code: error.name
      })
    }

    if (example == null) {
      response.status(404).json({
        message: 'Example Not Found',
        code: 'ErrorNotFound'
      })
    } else {
      response.status(200).json({
        message: 'Example Updated',
        data: {
          id: example._id,
          stringExample: example.string_example,
          numberExample: example.number_example,
          booleanExample: example.boolean_example,
          createdAt: moment(example.created_at).format('YYYY-MM-DD HH:mm:ss'),
          updatedAt: moment(example.updated_at).format('YYYY-MM-DD HH:mm:ss')
        }
      })
    }
  })
}

const deleteExample = (request, response) => {
  Example.findOneAndDelete({ _id: request.params.exampleId }, (error, result) => {
    if (error) {
      response.status(500).json({
        message: error.message,
        code: error.name
      })
    }

    if (result == null) {
      response.status(404).json({
        message: 'Example Not Found',
        code: 'ErrorNotFound'
      })
    } else {
      response.status(200).json({
        message: 'Example Deleted'
      })
    }
  })
}

module.exports = {
  listExample: listExample,
  createExample: createExample,
  showExample: showExample,
  updateExample: updateExample,
  deleteExample: deleteExample
}
