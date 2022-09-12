import React from "react";

const IteratorBasics = () => {
  let arr = [1, 2, 3];
  console.log(typeof arr[Symbol.iterator]);

  arr[Symbol.iterator] = function () {
    let nextValue = 10;
    return {
      next: function () {
        nextValue++;
        return {
          done: nextValue > 15 ? true : false,
          value: nextValue,
        };
      },
    };
  };

  for (let elem of arr) {
    console.log(elem);
  }

  /*
  let it = arr[Symbol.iterator]();
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());
  */
  return <div>Iterators</div>;
};

export default IteratorBasics;
