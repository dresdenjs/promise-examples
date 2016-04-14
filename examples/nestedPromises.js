'use strict';

let timer = function (seconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(seconds)
    }, seconds * 1000)
  });
};

timer(2).then(function (firstTimerSeconds) {
  timer(3).then(function (secondTimerSeconds) {
    console.log('Seconds: %d have passed', firstTimerSeconds + secondTimerSeconds);
  })
});
