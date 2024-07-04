/*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/

let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test"];
let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let check = theBiggest.reduce((acc, current) => {
    console.log(`Acc => ${acc}`);
    console.log(`Current => ${current}`);
    console.log(acc.length > current.length ? acc : current);
    console.log("###############");
    return acc.length > current.length ? acc : current;
});

console.log(check);

let finalString = removeChars.filter((ele) => !ele.startsWith("@"))
    .reduce((acc, current) => {
        return `${acc}${current}`;
    });
console.log(finalString);