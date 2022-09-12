import React from "react";

const ObjLiteral = () => {
  let name = "Deea";
  let age = 23;
  let ageField = "age";

  let obj = {
    name: "Emi",
    [ageField]: 25,
    greet() {
      console.log(`I'm ${this.name} and I have ${this.age} years`); // reference to the obj
      console.log(`I'm ${name} and I have ${age} years`); // reference to the global vars
    },
  };
  console.log(obj);
  obj.greet();

  return <div>Object Literals</div>;
};

export default ObjLiteral;
