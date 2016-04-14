'use strict';

let timer = function (seconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(seconds)
    }, seconds * 1000)
  });
};

let produceTimer = function (seconds) {
  return function () {
    return timer(seconds).then(function (seconds) {
      console.log(`${seconds} have passed!`);
    });
  };
};

let timerArr = [produceTimer(2), produceTimer(3)];

let alltimersProcessed = Promise.resolve();

timerArr.forEach(function (produceFn) {
  alltimersProcessed = alltimersProcessed.then(produceFn)
});

alltimersProcessed.then(function () {
  console.log('All timers have been processed...');
});

