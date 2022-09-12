import React from "react";

const Funcs = () => {
  /*
  let bttn = document.querySelector("button");
  function fn() {
    console.log(this);
  }
  fn(); // returns undefined

  let fn2 = () => console.log(this);
  fn2(); // returns undefined

  bttn.addEventListener("click", fn); // returns the button "<button>Test2</button>"
  bttn.addEventListener("click", fn2); // returns undefined
*/

  //   function isEqual(number = compare, compare = 10) {
  function isEqual(number = 10, compare = number) {
    console.log(number);
    console.log(compare);
    return number === compare;
  }

  console.log(isEqual()); // ReferenceError: Cannot access 'compare' before initialization

  return (
    <div>
      <h6>Functions</h6>
      <button>Test2</button>
    </div>
  );
};

export default Funcs;
