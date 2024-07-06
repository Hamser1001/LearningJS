/*
  BOM [Browser Object Model]
  - setTimeout(Function, Timeout, Additional Params)
  - clearTimeout(Identifier)
*/

// setTimeout(function () {
//     console.log(`Msg`);
// }, 3000);

// setTimeout(sayMsg, 3000);

// function sayMsg() {
//     console.log(`here is a message`);
// };

// setTimeout(sayMsg, 3000, "Hamza", 102);

// function sayMsg(user,id) {
//     console.log(`here is a message For ${user} his id is: ${id}`);
// };



let counter = setTimeout(sayMsg, 3000);

function sayMsg() {
    console.log(`here is a message`);
};
let btn = document.querySelector("button");
btn.onclick = function () {
    clearTimeout(counter);
}
