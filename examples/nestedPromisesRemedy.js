'use strict';

let timer = function (seconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(seconds)
    }, seconds * 1000)
  });
};

Promise.all([timer(2), timer(3)]).then(function (secondsArr) {
  console.log('Seconds: %d have passed', secondsArr[0] + secondsArr[1]);
});
