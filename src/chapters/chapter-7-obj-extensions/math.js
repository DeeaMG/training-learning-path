import React from "react";

const MathBuiltInFuncs = () => {
  let plus = 12;
  let minus = -12;
  let zero = 0;
  console.log(Math.sign(minus));
  console.log(Math.sign(zero));
  console.log(Math.sign(plus));
  console.log(Math.sign(NaN));
  console.log(Math.sign("NaN"));

  console.log(Math.trunc(3.78));

  // In this case trunc is better
  console.log(Math.floor(-3.78));
  console.log(Math.trunc(-3.78));
  return <div>Math Built In Funcs</div>;
};

export default MathBuiltInFuncs;
