'use strict';

let _cache = {};

let _getData = function (id) {
  return new Promise(function (resolve, reject) {
    console.log(`Fetching data for: ${id}`);
    setTimeout(function () {
      console.log(`Data for: ${id} arrived, setting in cache.`);
      resolve(Math.floor(Math.random() * 100));
    }, 2000);
  });
};

let getDataFromCache = function (dataId) {
  if (_cache[dataId]) {
    console.log(`Cache hit for: ${dataId}`);
    return Promise.resolve(_cache[dataId]);
  } else {
    console.log(`Cache miss for: ${dataId}`);
    //we need to fetch the data and put it into a promise-producting function
    return _getData(dataId)
      .then(function (rawData) {
        _cache[dataId] = rawData;
        return rawData
      });
  }
};

getDataFromCache(1)
  .then(function (result) {
    console.log(`Result is ${result}`);
    return getDataFromCache(2)
  })
  .then(function (result) {
    console.log(`Result is ${result}`);
    return getDataFromCache(1)
  })
  .then(function (result) {
    console.log(`Result is ${result}`);
  });

