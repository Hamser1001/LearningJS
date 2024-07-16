/*
  Date And Time

  new Date(timestamp)
  new Date(Date String)
  new Date(Numeric Values)

  Format
  - "Oct 25 1982"
  - "10/25/1982"
  - "1982-10-25" => ISO International Standard
  - "1982 10"
  - "1982"
  - "82"
  - 1982, 9, 25, 2, 10, 0
  - 1982, 9, 25
  - "1982-10-25T06:10:00Z"

  Date.parse("String") // Read Date From A String
*/
console.log(Date.parse("Apr 14, 1994"));
let date1 = new Date(0);
console.log(date1);
let date2 = new Date(766281600000);
console.log(date2);
let date3 = new Date("04/14/1994");
console.log(date3);
let date4 = new Date("1994-04-14");
console.log(date4);
let date5 = new Date("1994-04");
console.log(date5);
let date6 = new Date("94");
console.log(date6);
let date7 = new Date(1994, 3, 14, 10, 0);
console.log(date7);
let date8 = new Date(1994, 3, 14);
console.log(date8);
let date9 = new Date("1994-04-14T06:10:00Z");
console.log(date9);