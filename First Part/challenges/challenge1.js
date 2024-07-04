/*
--- Challenge 1: Using indexOf and lastIndexOf ---
-- Find First and Last Occurrence --

Write a function findFirstAndLast(word, char) 
that takes a word and a character as arguments. 
It should return an object with the first and 
last occurrence index of the character in the word.

*/

function findFirstAndLast(word, char) {
    // Your code here
    let firstIndex = word.indexOf(char);
    let lastIndex = word.lastIndexOf(char);
    return {first: firstIndex, last: lastIndex}
  }
  
  console.log(findFirstAndLast("javascript", "a")); // { first: 1, last: 3 }
  