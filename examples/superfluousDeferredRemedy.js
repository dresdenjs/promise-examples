'use strict';

let timer = function (seconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(seconds)
    }, seconds * 1000)
  });
};

let processTimer = function () {
  return timer(4)
    .then(function () {
      console.log('Timer has run...');
      return true;
  });
};

processTimer().then(function () {
  console.log('I am done');
});




