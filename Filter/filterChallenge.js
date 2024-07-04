/*
  Filter
  - Filter Longest Word By Number
*/

// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";
let smallWords = sentence.split(" ").filter((ele) => ele.length <= 4).join(' ');
console.log(sentence);
console.log(smallWords);


let mix = "A13BS2ZX";
let mixContect = mix
    .split("").filter((ele) => {
        return !isNaN(parseInt(ele))
    })
    .Map((ele) => {
        return ele * ele;
    })
    .join("");

console.log(mixContect);

