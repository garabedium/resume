'use strict';
const Model = require('../model/model');

exports.get_word = function(req, res) {
  Model.getWordById(req.params.wordId, function(err, word) {
    if (err)
      res.send(err);
    res.json(word);
  });
};

// exports.data = function(req, res) {
//   console.log('return some data');
//   var test = {lorem:'ipsum'}
//   res.json(test);  
  // res.writeHead(200, {'Content-Type': 'text/plain'});
  // var message = 'It works!\n',
  //     version = 'NodeJS ' + process.versions.node + '\n',
  //     response = [message, version].join('\n');
  // res.end(response);
// };