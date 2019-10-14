'use strict';
module.exports = function(app) {
  var controller = require('../controllers/controller')

  // Get word by id:
  app.route('/api/word/id/:wordId')
  .get(controller.getWord)

  //  Validate word:
  app.route('/api/word/:word')
  .get(controller.validateWord)

  // Get Level word
  app.route('/api/levelWord/:word')
  .get(controller.getLevelWord)

  // Get Random Level word
  app.route('/api/random')
  .get(controller.getRandomLevelWord)

}

