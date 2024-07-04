/* 
--- Challenge 5: Using Index Access and charAt ---
 -- Find Character at Position --

 Write a function charAtPosition(str, pos)
  that returns the character at the given 
  position pos in the string str.

*/

function charAtPosition(str, pos) {
    // Your code here
    return str.charAt(pos);
  }
  
  console.log(charAtPosition("hello", 1)); // "e"
  


  /* 
--- Challenge 6: Using length and trim ---
 -- Check String Length after Trim --

Write a function trimAndLength(str) that returns 
the length of the string after trimming 
any leading or trailing whitespace.

*/

function trimAndLength(str) {
    // Your code here
    return str.trim().length;
  }
  
  console.log(trimAndLength("  hello world  ")); // 11
  