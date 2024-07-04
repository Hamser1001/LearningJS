/*
  Object
  - Intro and What Is Object
  - Testing Window Object
  - Accessing Object
*/


let user = {
    // properties
    theName: "Hamza",
    theAge: 30,
    //methods
    sayHello : function () {
        return "Hello";
    },
};

console.log(user.theName);
console.log(user.theAge);
console.log(user.sayHello());

