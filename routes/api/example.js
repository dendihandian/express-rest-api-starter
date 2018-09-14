const exampleRoutes = function (app) {
  app.get('/api/example', function (req, res, next) {
    res.status(200).json({
      message: 'Example List',
      data: {}
    })
  })
}

module.exports = exampleRoutes
