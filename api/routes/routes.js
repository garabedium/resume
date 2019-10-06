'use strict';
module.exports = function(app) {
  var test = require('../controllers/testController')

  // todoList Routes
  app.route('/api')
    .get(test.data)

}