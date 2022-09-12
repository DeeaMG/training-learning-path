import React from "react";

const WrapFuncs = () => {
  function log(msg) {
    console.log(`Log entry created, message: ${msg}`);
  }

  let handler = {
    apply: function (target, thisArg, argList) {
      if (argList.length === 1) {
        return Reflect.apply(target, thisArg, argList);
      }
    },
  };

  let proxy = new Proxy(log, handler);
  proxy("hello", 234, "ert");

  return <div>Wraping Functions</div>;
};

export default WrapFuncs;
