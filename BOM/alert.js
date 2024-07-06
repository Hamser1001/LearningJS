
/*
  BOM [Browser Object Model]
  - alert(Message) => Need No Response Only Ok Available
  - confirm(Message) => Need Response And Return A Boolean
  - prompt(Message, Default Message) => Collect Data
*/

// alert("Test");
// console.log("Test");

// let confirmMsg = confirm("Are you sure?");
// console.log(confirmMsg);

// if (confirmMsg === true) {
//     console.log("Item Deleted");
// } else {
//     console.log("Item Not Deleted");

// };


let promptMsg = prompt("Suitable Day To You?", "Write Day With 3 characters");
console.log(promptMsg);

if (promptMsg === true) {
    console.log("Item Deleted");
} else {
    console.log("Item Not Deleted");
};