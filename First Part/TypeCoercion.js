/*
  Type Coercion (Type Casting)
  - +
  - -
  - "" - 2
  - false - true
*/

let a = "10";
let b = 20;
let c = true;

console.log(+a + b);
console.log(Number(a) + b);
console.log(a - b);

console.log("" - 2);
console.log(false - true);

console.log(a + b + c);
console.log(+a + b + c);