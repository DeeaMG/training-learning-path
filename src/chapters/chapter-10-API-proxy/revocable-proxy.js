import React from "react";

const RevocableProxy = () => {
  let person = {
    name: "Name",
  };

  let handler = {
    get: function (target, property) {
      return Reflect.get(target, property);
    },
  };

  let { proxy, revoke } = new Proxy.revocable(person, handler);
  console.log(proxy.name);

  revoke();
  console.log(proxy.name);

  return <div>Revocable Proxies</div>;
};

export default RevocableProxy;
