import React from "react";

const ChainingPromises = () => {
  function waitASec(sec) {
    return new Promise(function (resolve, reject) {
      if (sec > 2) reject("Failed!");
      else {
        setTimeout(() => {
          sec++;
          resolve(sec);
        }, 1000);
      }
    });
  }

  waitASec(2)
    .then(waitASec)
    .then((sec) => {
      console.log(sec);
    })
    .catch((err) => console.log(err));
  return <div>Chaining Promises</div>;
};

export default ChainingPromises;
