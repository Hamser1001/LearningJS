/*
  BOM [Browser Object Model]
  Local Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/
// set
window.localStorage.setItem("color","#F00");
window.localStorage.fontWeight = "bold";
window.localStorage['fontSize'] = "20px"
console.log(window.localStorage);
console.log(typeof window.localStorage);
// get
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage['color']);
//remove
// window.localStorage.removeItem("color");
// remove all

// window.localStorage.clear("color");

// get key
console.log(window.localStorage.key(0));
// set color in page
document.body.style.backgroundColor = window.localStorage.getItem("color");

