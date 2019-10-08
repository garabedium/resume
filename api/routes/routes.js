'use strict';
module.exports = function(app) {
  var controller = require('../controllers/controller')

  // app.route('/api')
  //   .get(controller.data)

  // Get word by id:
  app.route('/api/word/id/:wordId')
  .get(controller.get_word)

  // Get word:
  app.route('/api/word/:word')
  .get(controller.validate_word)

  // Get Level word

}