import React from "react";

const CallFuncs = () => {
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    greet() {
      console.log(`Hello! My name is ${this.name} and I am ${this.age} year old`);
    }
  }

  let person = Reflect.construct(Person, ["Deea", 23]);
  // Reflect.apply(MethodToApply, ThisKeywordRefersTo, argumentsOfFunctionIfAny)
  Reflect.apply(person.greet, person, []);
  Reflect.apply(person.greet, { name: "Emy", age: 25 }, []);

  return (
    <div>
      Calling Functions with <code>Reflect.apply()</code>
    </div>
  );
};

export default CallFuncs;
