import React from "react";

const Prototypes = () => {
  class Person {
    constructor(name) {
      this.name = name;
    }
  }

  let person = new Person("deea");
  Person.prototype.age = 23;

  let proto = {
    age: 25,
    greet() {
      console.log(`Hello!`);
    },
  };

  Reflect.setPrototypeOf(person, proto);
  console.log(Reflect.getPrototypeOf(person));

  Reflect.apply(person.greet, null, []);

  return <div>Reflect and Prototypes</div>;
};

export default Prototypes;
