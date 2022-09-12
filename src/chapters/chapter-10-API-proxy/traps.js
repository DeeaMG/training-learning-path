import React from "react";

const Traps = () => {
  let person = {
    name: "Name",
    age: 23,
  };

  let handler = {
    get: function (target, name) {
      return name in target ? target[name] : "Doesn't exist!";
    },
    set: function (target, property, value) {
      if (value.length >= 2) {
        return Reflect.set(target, property, value);
      } else return -1;
    },
  };

  let proxy = new Proxy(person, handler);
  console.log(proxy.age);
  console.log(proxy.name);

  proxy.name = "A";
  console.log(proxy.name);

  return <div>Traps in Action</div>;
};

export default Traps;
