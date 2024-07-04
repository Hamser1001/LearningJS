/*
  Higher Order Functions
  ---> is a function that accepts functions as parameters and/or returns a function.

  - Map
  --- method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.

  Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array

  Notes
  - Map Return A New Array

  Examples
  - Anonymous Function
  - Named Function

*/

let myNums = [1, 2, 3, 4, 5, 6];
let newArray = [];

for (let i = 0; i < myNums.length; i++) {
    newArray.push(myNums[i] + myNums[i])
}

console.log(newArray);

// same idea with Map

let addSelf = myNums.map((element, index, array) => {
    /*  console.log(`Current element => ${element}`);
      console.log(`Current element => ${index}`);
      console.log(`Current element => ${array}`);
      console.log(`Current element => ${this}`);*/

    return element + element;
}, 10);

console.log(addSelf);

function addition() {
    return element + element;
}

let add = myNums.map(addition); 
console.log(add);