'use strict';

const sql = require('./db.js');

var Word = function(word){
  this.word = word.word;
};

Word.getWordById = function (wordId, result) {
  sql.query("Select word from dictionary where id = ? ", wordId, function (err, res) {             
    if(err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Word.getWord = function (word, result) {
  sql.query("Select id, word from dictionary where word = ? ", word, function (err, res) {             
    if(err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports= Word;