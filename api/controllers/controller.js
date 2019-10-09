'use strict';
const Word = require('../models/word');
const LevelWord = require('../models/levelWord');

exports.getWord = function(req, res) {
  Word.getWordById(req.params.wordId, function(err, word) {
    if (err)
      res.send(err);
    res.json(word);
  });
};

exports.validateWord = function(req, res) {
  Word.getWord(req.params.word, function(err, word) {
    if (err)
      res.send(err);
    res.json(word);
  });
}

exports.getLevelWord = function(req, res) {
  LevelWord.getLevelWord(req.params.word, function(err, word) {
    if (err)
      res.send(err);
    res.json(word);
  });
}