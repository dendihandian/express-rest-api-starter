import { listExample, createExample, showExample, updatedExample, deleteExample } from '../../app/controllers/ExampleController'

const exampleRoutes = function (app) {
  app.route('/api/examples')
    .get(listExample)
    .post(createExample)

  app.route('/api/examples/:exampleId')
    .get(showExample)
    .patch(updatedExample)
    .delete(deleteExample)
}

module.exports = exampleRoutes
