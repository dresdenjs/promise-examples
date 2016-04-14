'use strict';

let Q = require('q');

let timer = function (seconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(seconds)
    }, seconds * 1000)
  });
};

let processTimer = function () {
  let deferred = Q.defer();
  timer(4)
    .then(function (result) {
      deferred.resolve(result);
  })
    .catch(function (error) {
      deferred.reject(error)
  });
  return deferred.promise;
};

processTimer().then(function () {
  console.log('I am done');
});




