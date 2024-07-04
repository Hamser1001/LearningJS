/*
  DOM [Create Elements]
  - Practice Product With Heading And Paragraph
*/

let myMainElement = document.createElement("div");
let myHeading = document.createElement("h2");
let myParagraph = document.createElement("p");
let myHeadingText = document.createTextNode("Product Title");
let myParagraphText = document.createTextNode("Product Description");

// add heading text
myHeading.appendChild(myHeadingText);

// add heading to main element
myMainElement.appendChild(myHeading);
// add paragraph text
myParagraph.appendChild(myParagraphText);
// add paragraph to main Element
myMainElement.appendChild(myParagraph);



myMainElement.className = "product";

document.body.appendChild(myMainElement);