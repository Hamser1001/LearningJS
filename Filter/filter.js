/*
  Filter
  - Filter Longest Word By Number
*/

// Filter Words More Than 4 Characters

let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];
let numbers = [11, 20, 2, 5, 17, 10];


// test Map vs Filter

let addMap = numbers.map((el) => el + el);
console.log(addMap);

let addFilter = numbers.filter((el) => el + el);
console.log(addFilter); 

let filterdFriends = friends.filter((el) => el.startsWith("A"));
console.log(filterdFriends);

let evenNumerbs = numbers.filter((el) => el % 2 === 0);
console.log(evenNumerbs);