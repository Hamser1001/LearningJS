/*
  DOM [Traversing]
  - nextSibling
  - previousSibling
  - nextElementSibling
  - previousElementSibling
  - parentElement
*/

let span = document.querySelector(".two");
console.log(span.nextElementSibling.remove());
console.log(span.previousElementSibling.remove());
console.log(span.parentElement);

span.onclick = function () {
    span.parentElement.style.opacity = "0.5";
}

