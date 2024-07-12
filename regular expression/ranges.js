/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/

let tld = 'Com Net Org Info Code Io';
let tldRegex = /(org|info|io)/ig;
console.log(tld.match(tldRegex));

let nums = "12345678910";
let numsRegex = /[0-2]/ig;
console.log(nums.match(numsRegex));

let NotNums = "12345678910";
let NotNumsRegex = /[^0-2]/ig;
console.log(NotNums.match(NotNumsRegex));


let specialNums = "1!23@4#5%6£7$8910";
let specialNumsRegex = /[^0-9]/ig;
console.log(specialNums.match(specialNumsRegex));

let practice = "Os1 Os1Os Os2 Os8 Os8Os";
let practiceRegex = /Os[5-9]Os/g;
console.log(practice.match(practiceRegex));