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

LevelWord.getRandomLevelWord = function (result) {
  sql.query(`
    SELECT w.word, w.frequency
    FROM level_words AS w
    INNER JOIN
        (SELECT ROUND( RAND() *  (SELECT MAX(id) FROM level_words )) AS id) AS x
    WHERE
        w.id >= x.id
    LIMIT 10
  `, function(err, res){
    if(err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports= LevelWord;