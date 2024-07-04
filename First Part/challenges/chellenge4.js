/* 
--- Challenge 4: Using split ---
 -- Split and Count Words --

 Write a function countWords(sentence) that takes a sentence 
 and returns the number of words in it.

*/

function countWords(sentence) {
    // Your code here
    return sentence.split(" ").length;
  }
  
  console.log(countWords("The quick brown fox jumps over the lazy dog")); // 9
  