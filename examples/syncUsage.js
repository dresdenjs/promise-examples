'use strict';

let answerRandomly = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(Math.floor(Math.random() * 100));
    }, 2000)
  });
};

let answer = function (question) {
  //poor man's check for multiple words in a string :)
  if ((question.indexOf('life') + question.indexOf('universe') + question.indexOf('everything')) > -3) {
    return Promise.resolve(42);
  } else {
    return answerRandomly();
  }
};

answer(process.argv[2] || process.argv[1]).then(function (answer) {
  console.log(`The answer is: ${answer}`);
});
