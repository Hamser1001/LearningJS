/*
  Prototype
  - Add To Prototype Chain
  - Extend Built In Constructors Features
*/
class User {
    constructor(id, username) {
        this.i = id;
        this.u = username;
    };
    sayHello() {
        return `Hello ${this.u}`;
    };
};
let userOne = new User(100, "Hamza");
console.log(userOne.u);
console.log(User.prototype);
console.log(userOne);
User.prototype.sayWelcome = function (params) {
    return `Welcome ${this.u}`;
};
Object.prototype.love = "JavaScript";
String.prototype.addDotBeforeAndAfter = function (val) {
    return `.${this}.`;
};
let myString = "Elzero";