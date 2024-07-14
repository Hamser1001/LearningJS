/*
  Constructor Function
  - New Syntax
*/

class User {
    constructor(id, username, salary) {
        this.id = id;
        this.username = username;
        this.salary = salary + 1000;
    }
};

let userOne = new User(100, "Elzero", 5000);

console.log(userOne.id);
console.log(userOne.username);
console.log(userOne.salary);

console.log(userOne instanceof User);
console.log(userOne.constructor === User);
