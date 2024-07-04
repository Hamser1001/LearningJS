/*
  String Methods
  - substring(Start [Mand], End [Opt] Not Including End)
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mand], Characters To Extract)
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mand], Start [Opt] Default 0) [ES6]
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/
let a = "Hamza Learning javascript";
console.log(a);


console.log(a.substring(6, 15));
console.log(a.substring(-10, 6)); // 0 --> 6

console.log(a.length);
console.log(a.substring(25));
console.log(a.substring(a.length - 1));


console.log(a.substring(a.length - 10, a.length - 6));


console.log(a.substr(6));

console.log(a.includes("amza",3));
console.log(a.startsWith("Lear", 6));
console.log(a.endsWith("a", 5));
