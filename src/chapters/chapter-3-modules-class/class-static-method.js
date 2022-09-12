import React from "react";

class Helper {
  static logTwice(msg) {
    console.log(msg, " 1");
    console.log(msg, " 2");
  }
}

const ClassStaticMeth = () => {
  Helper.logTwice("Hello"); // I can use it like this without making an instance of the class :D
  return <div>Object Static Methods</div>;
};

export default ClassStaticMeth;
