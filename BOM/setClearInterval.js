/*
  BOM [Browser Object Model]
  - setInterval(Function, Millseconds, Additional Params)
  - clearInterval(Identifier)
*/

// setInterval(function () {
//     console.log(`Msg`);
// }, 1000);
// setInterval(function () {
//     console.log(`Msg`);
// }, 1000);
let div = document.querySelector("div");

function countdown () {
    div.innerHTML -= 1;
    if(div.innerHTML === "0") {
        clearInterval(counter);
    }
};
let counter = setInterval(countdown, 1000);
