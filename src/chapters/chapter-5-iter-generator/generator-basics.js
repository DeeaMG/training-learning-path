import React from "react";

const GeneratorBasics = () => {
  /*
  function* select() {
    yield "House";
    yield "Window";
  }

  let it = select();
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());
  */

  /*
  let obj = {
    [Symbol.iterator]: gen,
  };

  function* gen() {
    yield 1;
    yield 2;
  }

  for (let elem of obj) {
    console.log(elem);
  }
  */

  function* gen(end) {
    for (let i = 1; i <= end; i++) {
      try {
        yield i;
      } catch (err) {
        console.log(err);
      }
    }
  }

  let it = gen(2);
  console.log(it.next());
  console.log(it.throw("This is an ERROR"));
  console.log(it.return("This is an Return"));
  console.log(it.next());
  console.log(it.next());
  return <div>Generator Basics</div>;
};

export default GeneratorBasics;
