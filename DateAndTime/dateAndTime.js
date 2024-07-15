/*
  Date And Time
  - Date Constructor

  Static Methods
  - Date.now()

  - To Track Time You Need Starting Point
  - Epoch Time Or Unix Time In Computer Science Is The Number of Seconds Since January 1, 1970.
  - Why 1970 [829 Days To 136 Years]

  Search For
  - Year 2038 Problem in Computer Science.
*/

let dateNow = new Date();
console.log(dateNow);
console.log(Date.now());
let seconds = dateNow / 1000;
console.log(`Seconds: ${seconds}`);
let minutes = seconds / 60;
console.log(`Minutes: ${minutes}`);
let hours = minutes / 60;
console.log(`Hours: ${hours}`);
let days = hours / 24;
console.log(days);
let years = days / 365;
console.log(years);