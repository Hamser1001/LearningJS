/*
  Arrays Methods [Search]
  - indexOf(Search Element, From Index [Opt])
  - lastIndexOf(Search Element, From Index [Opt])
  - includes(valueToFind, fromIndex [Opt]) [ES7]
*/

let friends = ["Ahmed", "Mohmed", "Sayed", "Alaa", "Ahmed"];
console.log(friends);

console.log(friends.indexOf("Ahmed"));
console.log(friends.indexOf("Ahmed", 2));
console.log(friends.lastIndexOf("Ahmed"));
console.log(friends.lastIndexOf("Ahmed", -2));

console.log(friends.indexOf("Ahmed"));
console.log(friends.includes("Ahmed", 2));
 if(friends.indexOf("osama")) {
  console.log("Not Found");
 }