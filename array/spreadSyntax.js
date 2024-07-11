/*
  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"
*/

// Spread With String => Expand String
console.log("Hamza");
console.log(..."Hamza");
console.log([..."Hamza"]);

// Concatenate Arrays

let myArray1 = [1, 2, 3];
let myArray2 = [4, 5, 6];
let allArrays = [...myArray1, ...myArray2];
console.log(allArrays);

// Copy Array

let copiedArray = [...myArray1];
console.log(copiedArray);

// Push Inside Array
let allFriends = ["Hamza", "Osama", "Sayed"];
let thiYearFriends = ["Sameh", "Mahmoud"];
allFriends.push(...thiYearFriends)
console.log(allFriends);

// Use With Math Object
let myNums = [10, 20, -100, 100, 1000, 500];
console.log(Math.max(...myNums));

// Spread With Objects => Merge Objects
let ObjOne = {
    a: 1,
    b: 2,
};
let ObjTwo = {
    c: 3,
    d: 4,
};

console.log({...ObjOne, ...ObjTwo});