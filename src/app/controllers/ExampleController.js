import Example from '../models/Example'

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
        dateExample: example.date_example
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
    boolean_example: input.booleanExample,
    date_example: input.dateExample
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
        dateExample: example.date_example
      }
    })
  })
}

const showExample = (request, response) => {
  response.status(200).json({
    message: 'Example Detail'
  })
}

const updatedExample = (request, response) => {
  response.status(200).json({
    message: 'Example Updated'
  })
}

const deleteExample = (request, response) => {
  response.status(200).json({
    message: 'Example Deleted'
  })
}

module.exports = {
  listExample: listExample,
  createExample: createExample,
  showExample: showExample,
  updatedExample: updatedExample,
  deleteExample: deleteExample
}
