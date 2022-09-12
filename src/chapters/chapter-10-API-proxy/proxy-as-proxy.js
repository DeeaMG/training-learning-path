import React from "react";

const ProxyAsProxy = () => {
  let person = {
    name: "Name",
    age: 23,
  };

  let handler = {};

  let protoHandler = {
    get: function (target, name) {
      return name in target ? target[name] : "Doesn't exist!";
    },
  };

  let proxy = new Proxy({}, handler);
  let protoProxy = new Proxy(proxy, protoHandler);

  Reflect.setPrototypeOf(person, protoProxy);

  console.log(person.hobbies);
  return <div>Proxies As Proxies</div>;
};

export default ProxyAsProxy;
