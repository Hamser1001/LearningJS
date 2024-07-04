/*
  Template Literals (Template Strings)
*/

let a = "We Love";
let b = "JavaScript";
let c = "And";
let d = "Programming";

console.log(a + " " + b + 
    "\n" + c + " " + d);

console.log(`${a} ${b}
${c} ${d}`);

let title = "Hamza";
let desciption = "Hamza Learn Programming";
let markup = `
<div class="card">
  <div class="child">
    <h2>${title}</h2>
    <p>${desciption}</p>
  </div>
</div>
`;
document.write(markup);