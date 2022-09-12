import React from "react";

const CreatingObjs = () => {
  class Person {
    constructor(name) {
      this.name = name;
    }
  }

  function TopObj() {
    this.age = 23;
  }

  let person1 = Reflect.construct(Person, ["Deea"]);
  let person2 = Reflect.construct(Person, ["Deea"], TopObj);
  console.log(person1 instanceof Person); // true
  console.log(person2 instanceof Person); // false
  console.log(person2 instanceof TopObj); // true

  return <div>Creating Objects with Reflect API</div>;
};

export default CreatingObjs;
