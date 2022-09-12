import React from "react";

const PromisesBasics = () => {
  let promiseResolve = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Done!");
    }, 2000);
  });

  let promiseReject = new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject("Failed!");
    }, 4000);
  });

  promiseResolve.then((val) => {
    console.log(val);
  });

  promiseReject.then(
    (val) => console.log(val),
    (err) => console.log(err)
  );

  return <div>Resolving Promises</div>;
};

export default PromisesBasics;
