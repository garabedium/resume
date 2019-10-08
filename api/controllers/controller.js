'use strict';
const Model = require('../model/model');

exports.get_word = function(req, res) {
  Model.getWordById(req.params.wordId, function(err, word) {
    if (err)
      res.send(err);
    res.json(word);
  });
};

exports.validate_word = function(req, res) {
  Model.getWord(req.params.word, function(err, word) {
    if (err)
      res.send(err);
    res.json(word);
  });
}