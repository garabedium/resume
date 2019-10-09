'use strict';

const sql = require('./db.js');

var LevelWord = function(word){
  this.word = word.word;
  this.frequency = word.frequency;
};

LevelWord.getLevelWord = function (word, result) {
  sql.query("Select word, frequency from level_words where word = ? ", word, function (err, res) {             
    if(err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports= LevelWord;