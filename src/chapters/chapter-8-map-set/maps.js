import React from "react";

const Maps = () => {
  let cardAce = { name: "Ace of Spades" };
  let cardKing = { name: "King of Clubs" };

  // The keys are unique
  //   let deck = new Map();
  /*let deck = new Map([
    ["as", cardAce],
    ["kc", cardKing],
  ]);*/

  /*
  deck.set("as", cardAce);
  deck.set("kc", cardKing);
  console.log(deck.size); // 2
  */

  /*
  deck.set("as", cardAce); // Overwrites
  console.log(deck.size); // 2
  */

  //console.log(deck.get("kc")); // cardKing object

  /*
  deck.delete("as"); // deletes specified item -> returns undefined
  console.log(deck);
  */

  /*
  deck.clear(); // deletes entire map
  console.log(deck);
  */

  /*
  for (let value of deck.values()) {
    console.log(value);
  }

  for (let entries of deck.entries()) {
    console.log(entries);
  }

  // This same as above -> but destructured
  for (let [key, value] of deck.entries()) {
    console.log([key, value]);
  }
  */

  let key1 = { a: 1 };
  let key2 = { b: 2 };
  // Can't loop through it(it doesn't have an iterator)
  // The size is not known(you don't have the property)
  let deck2 = new WeakMap();
  deck2.set(key1, cardAce);
  deck2.set(key2, cardKing);

  console.log(deck2.get(key1));

  return <div>Maps</div>;
};

export default Maps;
