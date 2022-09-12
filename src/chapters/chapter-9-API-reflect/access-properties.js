import React from "react";

const AccessProperties = () => {
  class Person {
    constructor(name, age) {
      this._name = name;
      this.age = age;
    }

    get name() {
      return this._name;
    }

    set name(val) {
      this._name = val;
    }
  }

  let someone = { _name: "Someone" };
  let person = new Person("Deea", 23);
  /*
  Reflect.set(person, "name", "Emy");
  Reflect.set(person, "name", "Emy", someone);
  */
  //   console.log(Reflect.get(person, "name", someone)); // this will refer to someone
  //   console.log(person.name);
  //   console.log(Reflect.has(person, "name"));
  //   console.log(Reflect.ownKeys(person));

  Reflect.defineProperty(person, "hobbies", {
    writable: true, // let's me change the values inside
    value: ["Art", "Math", "Programming"],
    configurable: true, // let's me delete this property
  });

  person.hobbies.push("hobby1");
  console.log(person.hobbies);

  /*
  delete person.age;
  Reflect.deleteProperty(person, "hobbies");
  console.log(person.age); // undefined
  console.log(person.hobbies); // undefined
  */

  Reflect.preventExtensions(someone); // Locking it from being extended
  Reflect.defineProperty(someone, "hobbies", {
    writable: true,
    value: ["Art", "Math", "Programming"],
    configurable: true,
  });

  console.log(someone.hobbies); // undefined

  console.log(Reflect.isExtensible(person)); // true
  console.log(Reflect.isExtensible(someone)); // false

  return <div>Access Properties with Reflect</div>;
};

export default AccessProperties;
