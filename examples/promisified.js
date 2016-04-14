'use strict';

let fs = require('fs');

let Promise = require('bluebird');
Promise.promisifyAll(fs);

let myFile = '/tmp/test';
fs.readFileAsync(myFile, 'utf8')
  .then(function(txt) {
    txt = txt + '\nAppended something!';
    fs.writeFile(myFile, txt);
  })
  .then(function() {
    console.log('Appended text!');
  })
  .catch(function(err) {
    console.log(err);
});
