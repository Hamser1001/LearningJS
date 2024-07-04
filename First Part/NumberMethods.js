/*
  Number Methods
  - Two Dots To Call A Methods
  - toString()
  - toFixed()
  - parseInt()
  - parseFloat()
  - isInteger() [ES6]
  - isNaN() [ES6]
*/

console.log((100).toString());
console.log(100..toString());
console.log((100.5555).toFixed(2));
console.log(parseInt("100.55 Hamza"));
console.log(parseFloat("100.55 Hamza"));

console.log(Number.isInteger("100"));
console.log(Number.isInteger(100.500));
console.log(Number.isInteger(100));

console.log(Number.isNaN(100));