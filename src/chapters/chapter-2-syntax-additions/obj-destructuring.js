import React from "react";

const ObjDestruct = () => {
  let obj = {
    name: "Deea",
    age: 23,
    sayHello: function () {
      console.log("hello!");
    },
  };

  let { name, sayHello } = obj;
  /* You can skip a value like this
    Var name in destructure has to be same as the one in obj
    else it will Error: functName is not a function 
  */
  sayHello();

  let { name: name1, sayHello: greet } = obj; // usage of ALIAS -> To change name of obj keys
  greet();

  return <div>Object Destructuring</div>;
};

export default ObjDestruct;
