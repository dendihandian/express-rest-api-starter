import { listExample, createExample, showExample, updateExample, deleteExample } from '../../app/controllers/ExampleController'
import exampleValidator from '../../app/validators/exampleValidator'

const exampleRoutes = function (app) {
  app.route('/api/examples')
    .get(listExample)
    .post(exampleValidator, createExample)

  app.route('/api/examples/:exampleId')
    .get(showExample)
    .patch(exampleValidator, updateExample)
    .delete(deleteExample)
}

module.exports = exampleRoutes
