/*
  DOM [Create Elements]
  - createElement
  - createComment
  - createTextNode
  - createAttribute
  - appendChild
*/

let myElement = document.createElement("div");
let myAttribute = document.createAttribute("data-custom");
let myText = document.createTextNode("Product One");
let myComment = document.createComment("This is Div");
myElement.className = "product";
myElement.setAttributeNode(myAttribute);
myElement.setAttribute("data-test","Testing");
// Append Comment to Element
myElement.appendChild(myComment);
// Append Text to Element
myElement.appendChild(myText);

// Append Element to Body
document.body.appendChild(myElement);
