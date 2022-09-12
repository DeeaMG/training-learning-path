import React from "react";

const Sets = () => {
  /* 
    Sets are like an object, where the key is in fact the value which is stored inside.
    When I want to store a new element inside, I have to verify if the key is not there already.
    And thats why it overwrites.
  */

  /*
  let set = new Set([1, 1, 1]); // === [1]
  set.add(23);
  set.add(2);
  set.add(3);
  */

  //   set.delete(1);

  /*
  for (let elem of set) {
    console.log(elem);
  }
  */

  //   console.log(set.has(3)); // true

  /*
  set.clear();
  console.log(set);
  */

  /*
  for (let elem of set.entries()) {
    console.log(elem); // [key, val] -> where key === val
  }

  for (let elem of set.keys()) {
    console.log(elem); // The keys...which are in fact the values O_O
  }
  */

  let obj1 = { a: 1 };
  let obj2 = { b: 2 };
  let obj3 = { c: 3 };
  let obj4 = { d: 4 };

  // Is not iterable
  let weakSet = new WeakSet([obj1, obj2, obj3, obj3, obj4]);

  // Here we are creating a new obj -> new place in memory
  console.log(weakSet.has({ b: 2 })); // false ???

  // Same place in memory
  console.log(weakSet.has(obj3)); // true :D

  return <div>Sets</div>;
};

export default Sets;
