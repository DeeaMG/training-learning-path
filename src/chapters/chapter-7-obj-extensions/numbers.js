import React from "react";

const Numbers = () => {
  // Those work without instantiating the Number class
  console.log("No instance: ", isNaN(NaN));
  console.log("No instance: ", isNaN("NaN"));
  console.log("No instance: ", isNaN("Deea"));

  // Number.isNaN it's more strict and precise
  console.log("Instance: ", Number.isNaN(NaN));
  console.log("Instance: ", Number.isNaN("NaN"));
  console.log("Instance: ", Number.isNaN("Deea"));

  console.log("Is finite: ", isFinite(56));
  console.log("Is finite: ", isFinite(Infinity));
  console.log("Is finite: ", isFinite(-Infinity));

  // Those don't work without instantiating the Number class
  console.log("Is integer: ", Number.isInteger(20.657));
  console.log("Is integer: ", Number.isInteger(20657));

  return <div>Numbers</div>;
};

export default Numbers;
