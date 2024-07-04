/*
  String Methods
  - Access With Index
  - Access With charAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
  - Chain Methods
*/

let theName = "Hamza";
let theList = [1, 2, 3, 4, 5];

console.log(theName);
console.log(theName[1]);
console.log(theName.charAt(1));
console.log(theName.length);


let theFullName = "  Hamza Serhani";
console.log(theFullName.length);
console.log(theFullName.trim());
console.log(theFullName.toUpperCase());
console.log(theFullName.toLowerCase());

// chain methds

console.log(theFullName.trim().charAt(2).toUpperCase());

/*
  String Methods
  - indexOf(Value [Mand], Start [Opt] 0)
  - lastIndexOf(Value [Mand], Start [Opt] Length)
  - slice(Start [Mand], End [Opt] Not Include End)
  - repeat(Times) [ES6]
  - split(Separator [Opt], Limit [Opt])
*/

let a = "learning Porgramming at Home is Better than universities";
console.log(a.indexOf("Home"));
console.log(a.indexOf("Home", 8));

console.log(a.lastIndexOf("P"));

console.log(a.slice(9, 24));
console.log(a.slice(-2));

console.log(a.repeat(2));

console.log(a.split(" ", 5));