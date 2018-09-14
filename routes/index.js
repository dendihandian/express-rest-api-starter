const routes = function (app) {
  app.route('/')
    .get( function(req, res, next) {
      res.send('Welcome to Express.js')
    })
}

module.exports = routes
