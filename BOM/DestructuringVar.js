/*
  Destructuring
  - Destructuring Array => Swapping Variables
*/

let book = "Video";
let video = "Book";

// // save Book Value In Stash

// let Stash = book; // Video

// // change Book Value
// book = video; // book

// // change video Value
// video = Stash;
// console.log(book);
// console.log(video);

[book, video] = [video, book];

console.log(book);
console.log(video);