import React from "react";

const ConstLet = () => {
  /*
  const val = "Value";
  val = "val"; // ERROR
  */

  const arr = [1, 2, 3]; // -> Holds a pointer to the values
  arr.push(45); // This works
  console.log("arr: ", arr);

  const obj = { a: 1, b: 2, c: 3 };
  obj.a = 23;
  console.log("obj: ", obj);

  return <div>Const and Let</div>;
};

export default ConstLet;
