/*
  - Map vs WeakMap
  "
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only
  --
*/

let mapUser = {
    name: "Hamza"
};

let myMap = new Map();
myMap.set(mapUser, "Object Value");

mapUser = null; // override the reference
console.log(myMap);

console.log("#".repeat(20));

let wMapUser = {
    name: "Hamza"
};

let myWeakMap = new WeakMap();
myWeakMap.set(myWeakMap, "Object Value");
myWeakMap = null; // override the reference


console.log(myWeakMap);