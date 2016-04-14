'use strict';

let timer = function (seconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let fail = Math.floor(Math.random() * 2);
      if (fail) {
        reject(seconds)
      } else {
        resolve(seconds)
      }
    }, seconds * 1000)
  });
};

timer(1)
  .then(function (success) {
    console.log(`Success after ${success} seconds.`);
  })
  .catch(function(error) {
    console.log(`It failed after: ${error} seconds.`);
  });
