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
  let fileStream = fs.createReadStream('./api/word-sets.json')
  let jsonStream = StreamArray.withParser();

  const processingStream = new Writable({
    write({key,value}, encoding, callback){
      // async action / save to db
      setTimeout(() => {
        console.log(key)
        console.log(value);
        //Next record will be read only current one is fully processed
        callback();
    }, 250);      
    },
    objectMode:true
  })

  //Pipe the streams as follows
  fileStream.pipe(jsonStream.input);
  jsonStream.pipe(processingStream);

//So we're waiting for the 'finish' event when everything is done.
  processingStream.on('finish', () => console.log('All done'));

  // readStream.on('open',function(req,res){
  // readStream.pipe()
  // })
  // readStream.on('error', function(err) {
  //   if (err) return console.log(err)
  // });  
  // sql.query(`SELECT * FROM level_words`,
  //   function (err, res) {
  //   if(err) {
  //     console.log("error: ", err);
  //     result(err, null);
  //   } else {
  //     result(null, res);
  //     getAnagramCount(res)
  //   }
  // });
};

function getAnagramCount(data){
  data = JSON.parse(JSON.stringify(data))
  // data = data.slice(0,5)

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

  let word;
  let permutations = data.map((obj) => {
    word = obj.word
    return getPermutations(word.split('')).map(function(str) { return str.join('') }).filter(item => { return item.length >= 3 })
  });

  // console.log(permutations.length)
  // permutations = permutations.slice(0,5)
  // console.log(permutations[0])
  permutations.map(set => {
    set.map(word => {
      sql.query("SELECT id, word FROM dictionary WHERE word = ? ", word, function (err, result) {             
        if(err) return console.log("error: ", err)
        if (result.length > 0){
          // console.log(`parent: ${set[0]}, child: ${word}`)
          checkValidWord(set[0],word)
        }
      })
    })
  })
  // let validWords = {}
  function checkValidWord(levelWord,word) {
    console.log('adding word...')
    sql.query("INSERT INTO levelword_anagrams (level_word, word) VALUES (?,?)", [levelWord, word], function(err,result){
      if (err) return console.log("error: ", err)
      console.log('success!')
    })
    // if (!validWords[parent]) {
    //   validWords[parent] = []
    // } else {
    //   if (!validWords[parent].includes(child))
    //     validWords[parent].push(child)
    // }
    // console.log('--------------------------------')
    // console.log(validWords)
  }

  // store all anagrams
  // levelword_anagrams
    // join of dictionary and level_words
    // contains all of the anagrams (dictionary words) that belong to a level_word

  // Write to JSON file::
  /////////////////////////////////////////////////////////////////////////////
  // let sets = {}
  // permutations.map( (set,i) => {
  //   sets[set[i]] = set.slice(1,set.length)
  // })
  // fs.writeFileSync('word-permutation-sets.json', JSON.stringify(sets))

}


module.exports= LevelWord;