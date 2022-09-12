import React from "react";

const Arrays = () => {
  let emptyArr = Array(5); // empty array with length of 5
  let crazyArr = Array.of(5, 20, 39); // normal array
  let normalArr = [1, 2, 3, 4];

  /*
  let newArr = Array.from(normalArr, (val) => val + 2);
  console.log(newArr);
  */

  /*
  // Start from->to and fill with first argument
  crazyArr.fill(12, 1, 3);
  console.log(crazyArr);
  */

  /*
  // Stop after first match
  console.log(normalArr.find((val) => val >= 3));
  */

  /*
  let store = [
    { name: "Tomato", quantity: 5 },
    { name: "Peach", quantity: 5 },
    { name: "Salad", quantity: 5 },
  ];

  function findPeaches(fruit) {
    return fruit.name === "Peach";
  }

  console.log(store.find(findPeaches));
  */

  /*
  // copy on index 0, elements from index 2 until end
  console.log(normalArr.copyWithin(0, 2)); // -> [3, 4, 3, 4]
  console.log(normalArr); // -> [3, 4, 3, 4]
  */

  let it = normalArr.entries();
  for (let elem of it) {
    console.log(elem);
  }

  return <div>Arrays</div>;
};

export default Arrays;
