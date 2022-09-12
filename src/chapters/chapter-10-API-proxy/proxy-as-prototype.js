import React from "react";

const ProxyAsPrototype = () => {
  let person = {
    name: "Name",
    age: 23,
  };

  let handler = {
    get: function (target, name) {
      return name in target ? target[name] : "Doesn't exist!";
    },
  };

  let proxy = new Proxy({}, handler);
  Reflect.setPrototypeOf(person, proxy);

  console.log(proxy.name);
  console.log(person.name); // I have proxy protection in here

  return <div>Using Proxys As Prototypes</div>;
};

export default ProxyAsPrototype;
