module.exports = function (app) {

  //cart routes
  require('./cart')(app)
  require('./checkout')(app)
  require('./auth')(app)
  require('./order')(app)
  require('./product')(app)

}