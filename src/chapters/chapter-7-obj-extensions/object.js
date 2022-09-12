import React from "react";

const ObjectBuiltInFuncs = () => {
  /*
  let obj = { a: 1 };
  let obj1 = { b: 2 };
  let obj2 = Object.assign(obj, obj1);
  console.log(obj2);
  */

  /*
  class Obj1 {
    constructor() {
      this.a = 1;
    }
  }

  class Obj2 {
    constructor() {
      this.b = "ASD";
    }
  }

  let object1 = new Obj1();
  let object2 = new Obj2();

  // The first obj passed in here is the base obj
  // Has the prototype and instanceof of that class obj
  var object3 = Object.assign(object1, object2);
  console.log(object1 instanceof Obj1); // true
  console.log(object2 instanceof Obj2); // true
  console.log(object3 instanceof Obj1); // true
  console.log(object3 instanceof Obj2); // false

  // Instantiate with an empty obj class
  // It will inherit the prototype and instanceof of Object class
  var object4 = Object.assign({}, object1, object2);
  console.log(object4 instanceof Object); //true
  */

  let person1 = {
    // name: "Deea", // if this is commented(***)
  };

  let person2 = {
    name: "Emy",
  };
  console.log(person1.__proto__ === Object.prototype);
  console.log(person1);

  Object.setPrototypeOf(person1, person2);
  console.log(person1.__proto__ === person2);
  console.log(person1);
  console.log(person1.name); // Then this is gonna log "Emy"(***)

  return <div>Object Built In Funcs</div>;
};

export default ObjectBuiltInFuncs;
