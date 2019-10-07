'use strict';
module.exports = function(app) {
  var controller = require('../controllers/controller')

  // app.route('/api')
  //   .get(controller.data)

  // Validate word:
  app.route('/api/word/:wordId')
  .get(controller.get_word)

  // Get Level word

}