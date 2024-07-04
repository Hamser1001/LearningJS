/*
  DOM [Class List]
  - classList
  --- length
  --- contains
  --- item(index)
  --- add
  --- remove
  --- toggle
*/

let element = document.getElementById("my-div");

console.log(element.classList);
console.log(typeof element.classList);
console.log(element.classList.contains("Hamza"));
console.log(element.classList.contains("show"));

console.log(element.classList.item("3"));
console.log(element.classList.item("0"));

element.onclick = function () {
    element.classList.toggle("show");
}




