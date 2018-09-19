// import modular routes
const exampleRoutes = require('./api/example')

const router = function (app) {
  // main routes
  app.route('/')
    .get(function (req, res) {
      res.send('Welcome to Express.js')
    })

  app.route('/api')
    .get(function (req, res) {
      res.status(200).json({ message: 'Welcome to Express.js API' })
    })

  // load modular routes
  exampleRoutes(app)
}

module.exports = router
