'use strict';

let timerPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(true);
  }, 2000);
});

timerPromise.then(function (result) {
  console.log('We are done!');
});
