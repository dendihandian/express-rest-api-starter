import Example from '../models/Example'

const listExample = (request, response) => {
  response.status(200).json({
    message: 'Example List'
  })
}
const createExample = (request, response) => {
  let newExample = new Example(request.body)

  newExample.save((error, example) => {
    if (error) {
      response.status(500).json({
        message: error
      })
    }
    response.status(201).json({
      message: 'Example Created',
      data: example
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
