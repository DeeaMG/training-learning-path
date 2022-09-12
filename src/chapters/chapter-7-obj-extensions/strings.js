import React from "react";

const Strings = () => {
  let name = "Andreea";
  console.log(name.startsWith("An"));
  console.log(name.endsWith("ea"));
  console.log(name.includes("dre"));
  console.log(name.includes("DRE"));

  return <div>Strings</div>;
};

export default Strings;
