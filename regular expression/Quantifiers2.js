/*
  Regular Expression

  Quantifiers
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x
*/

let serials = "S100S S3000S S50000S S950000S";

console.log(serials.match(/s\d{3}s/ig)); // [Three Numbers]S
console.log(serials.match(/s\d{4,5}s/ig)); // [Four or Five Numbers]S
console.log(serials.match(/s\d{4,}s/ig)); // [At least Four]S
