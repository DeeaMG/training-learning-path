import React from "react";

const CustomIterator = () => {
  let person = {
    name: "Deea",
    hobbies: ["Sports", "Cooking"],
    [Symbol.iterator]: function () {
      let i = 0;
      let hobbies = this.hobbies;
      return {
        next: function () {
          let value = hobbies[i];
          i++;
          return {
            done: i > hobbies.length ? true : false,
            value: value,
          };
        },
      };
    },
  };

  for (let hobby of person) {
    console.log(hobby);
  }
  return <div>Custom Iterator</div>;
};

export default CustomIterator;
