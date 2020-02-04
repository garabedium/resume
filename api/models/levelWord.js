'use strict';

const sql = require('./db.js');
const fs = require('fs');
const StreamArray = require('stream-json/streamers/StreamArray');
const {Writable} = require('stream');

var LevelWord = function(word){
  this.word = word.word;
  this.zipf = word.zipf_value;
};

LevelWord.validate = function (word, result) {
  sql.query("SELECT word, zipf_value FROM level_words WHERE word = ? ", word, 
  function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

LevelWord.random = function (result) {
  sql.query(`
    SELECT w.word, w.zipf_value
    FROM level_words AS w
    INNER JOIN
        (SELECT ROUND( RAND() * (SELECT MAX(id) FROM level_words)) AS id) AS x
    WHERE
        w.id >= x.id
    LIMIT 1
  `, function(err, res){
    if(err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

LevelWord.randomByRange = function (min,max,result) {
  sql.query(`
    SELECT id,word FROM level_words
    WHERE zipf_value BETWEEN ? and ?
    ORDER BY RAND()
    LIMIT 10
    `, [min,max],
    function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

LevelWord.all = function (result) {

  // READ ANAGRAMS
  let anagrams = JSON.parse(fs.readFileSync('./api/level-words-permutations.json'))
  anagrams.map(set =>{
    set[Object.keys(set)[0]].map((word,i,self) => {
      validateWord(self[0],word)
    })
  })

  // VALIDATE ANAGRAM
  function validateWord(levelWord,word){
    sql.query("SELECT id, word FROM dictionary WHERE word = ? ", word, function (err, res) {     
      if(err) return console.log("error: ", err)
      if (res.length > 0) insertWord(levelWord,word)
    })
  }

  // INSERT VALID ANAGRAM
  function insertWord(levelWord,word){
    sql.query("INSERT INTO levelword_anagrams (level_word, word) VALUES (?,?)", [levelWord, word], function(err,result){
      if (err) return console.log("error: ", err)
      console.log('success!')
    })
  }

}

module.exports= LevelWord;