/*
--- Challenge 2: Using slice ---
-- Extract Substring -- 
Write a function extractSubstring(str, start, end) 
that extracts and returns a substring from the given string str, 
starting at the index start and ending at the index end 
(but not including end).

*/

function extractSubstring(str, start, end) {
    // Your code here
    return str.slice(start, end);

  }
  
  console.log(extractSubstring("hello world", 0, 5)); // "hello"
  