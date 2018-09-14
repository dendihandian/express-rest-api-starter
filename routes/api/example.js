const exampleRoutes = function (app) {
  app.route('/api/examples')
    .get( function (req, res) {
      res.status(200).json({
        message: 'Example List',
        data: {}
      })
    })
    .post( function (req, res) {
      res.status(201).json({
        message: 'Example Created',
        data: {}
      })
    })

  app.route('/api/examples/:id')
    .get( function (req, res) {
      res.status(200).json({
        message: 'Example Detail',
        data: {
          id: parseInt(req.params.id)
        }
      })
    })
    .patch( function (req, res) {
      res.status(200).json({
        message: 'Example Updated',
        data: {
          id: parseInt(req.params.id)
        }
      })
    })
    .delete( function (req, res) {
      res.status(200).json({
        message: 'Example Deleted',
        data: {
          id: parseInt(req.params.id)
        }
      })
    })
}

module.exports = exampleRoutes
