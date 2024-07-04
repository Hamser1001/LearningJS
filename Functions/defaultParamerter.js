/*
  Function
  - Default Function Parameters
  - Function Parameters Default [Undefined]
  - Old Strategies [Condition + Logical Or]
  - ES6 Method
*/

function sayHello(userName, age = "Unknown") {
  /*  if (age === undefined) {
        age = "Unknown";
    }
*/
//  age == age || "Unknown"
    return `Hello ${userName}, your age is ${age}`;
}
console.log(sayHello('Hamza', 30));