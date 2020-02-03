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
  sql.query(`SELECT * FROM level_words`,
    function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      let data = JSON.parse(JSON.stringify(res))
      data = data.map((obj) => {
        return obj.word
      })
      fs.writeFileSync('./api/level-words.json', JSON.stringify(data))
    }
  })
 
  let data = JSON.parse(fs.readFileSync('./api/level-words.json'))

  let getPermutations =  function(leafs) {
    var branches = [];
    if (leafs.length == 1) return leafs;
    for (var k in leafs) {
      var leaf = leafs[k];
      getPermutations(leafs.join('').replace(leaf, '').split('')).concat("").map(function(subtree) {
        branches.push([leaf].concat(subtree));
      });
    }
    return branches;
  };

  let sets = data.map((word,i,arr) => {
    let output = {}
    let permutations = getPermutations(word.split('')).map(function(str) { return str.join('') }).filter(item => { return item.length >= 3 })
    output[word] = permutations
    return output
  })

  fs.writeFileSync('./api/level-words-permutations.json', JSON.stringify(sets))

}

module.exports= LevelWord;