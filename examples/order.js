'use strict';

let resolveFn, rejectFn;

let timerPromise = new Promise(function (resolve, reject) {
  resolveFn = resolve;
  rejectFn = reject;
});

setTimeout(function () {
  resolveFn();
}, 2000);

timerPromise.then(function () {
  console.log('I am done!');
});
