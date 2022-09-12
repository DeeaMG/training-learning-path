import React from "react";

const BuiltInMethods = () => {
  let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1000);
  });

  let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Failed!");
    }, 2000);
  });

  // Only if all promises are resolved we will log success msg
  Promise.all([promise1, promise2])
    .then((success) => {
      console.log(success);
    })
    .catch((err) => console.log(err));

  // Only if all promises are rejected we will log the Error
  Promise.race([promise1, promise2])
    .then((success) => {
      console.log(success);
    })
    .catch((err) => console.log(err));
  return <div>Built In Promises Methods</div>;
};

export default BuiltInMethods;
