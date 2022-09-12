import React from "react";

const SymbolBasics = () => {
  /*
  let symbol1 = Symbol("debug"); // msg just for debug purposes
  console.log(symbol1); // -> Symbol(debug)
  console.log(typeof symbol1); // -> symbol

  let symbol2 = Symbol("debug2");
  console.log(symbol1 === symbol2); // -> false - They are unique

  let obj = {
    name: "Deea",
    [symbol1]: 23,
  };
  console.log(obj[symbol1]); // -> 23
  */

  /*
  let symbol3 = Symbol.for("age");
  let symbol4 = Symbol.for("age");
  console.log(symbol3 === symbol4); // -> true - Same ID's

  let person = {
    name: "Deea",
  };

  function makeAge(person) {
    let ageSymbol = Symbol.for("age");
    person[ageSymbol] = 27;
  }

  makeAge(person);
  console.log(person[symbol3]); // -> 27
  */

  /*
  class Person {}
  // [[Prototype]]: Person -> without it: [[Prototype]]: Object
  Person.prototype[Symbol.toStringTag] = "Person";
  let person1 = new Person();
  console.log(person1);
  */

  let numbers = [1, 2, 3];
  numbers[Symbol.toPrimitive] = function () {
    return 999;
  };

  console.log(numbers + 1); // -> 1000

  return <div>Symbol Basics</div>;
};

export default SymbolBasics;
