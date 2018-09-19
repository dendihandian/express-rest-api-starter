const Example = require('../models/Example')

const createExample = function (req, res) {
  let newExample = new Example(req.body);
  newExample.save( function (error, example) {
    if (error) {
      res.send(error)
    }
    res.json(example)
  })
}

module.exports = {
  createExample: createExample,
}
