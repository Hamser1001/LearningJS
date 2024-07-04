/*  
--- Challenge 7: Using toUpperCase and toLowerCase ---
 -- Convert Case --

 Write a function swapCase(str) that swaps the case 
 of each character in the string 
 (uppercase to lowercase and vice versa).

*/

function swapCase(str) {
    // Your code here
    for (let i = 0; i < str.length; i++) {
        let result = "";
        let char =  str[i].split("");
        if (str[i] === char.toLowerCase()) {
            str[i].toUpperCase();
            return char;
        } else {
            str[i].toLowerCase();
            return char;
        }
    }
  }
  
  console.log(swapCase("Hello World")); // "hELLO wORLD"
  