/*
  Destructuring
  - Destructuring Object
------------------------------
  Destructuring
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only
*/
const user = {
    theName: "Hamza",
    theAge: 30,
    theTitle: "Developer",
    theCountry: "Morocco",
    theColor: "Black",
    skills: {
        html: 70,
        css: 86,
        javascript: 75,
    }
};

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theTitle);
// console.log(user.theCountry);

// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);

// ({theName, theAge, theTitle, theCountry} = user);

const {
    theName: n,
    theAge: a,
    theTitle, theCountry,
    theColor: co = "Red",
    skills: {
        html: h,
        css,
        javascript
    }
} = user;


console.log(n);
console.log(a);
console.log(theTitle);
console.log(theCountry);
console.log(co);
console.log(`my Html skill Progress is ${h}`);
console.log(`my Html skill Progress is ${css}`);
console.log(`my Html skill Progress is ${javascript}`);


const { html: skillOne, css: skillTwo, javascript: skillThree } = user.skills;