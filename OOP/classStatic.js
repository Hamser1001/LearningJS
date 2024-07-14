/*
  Class
  - Static Properties And Methods
*/

class User {
    // Static Properties
    static count = 0;

    constructor(id, username, salary) {
        this.i = id;
        this.u = username;
        this.s = salary;
        User.count++;
    };
    // Static Methods
    static sayHello() {
        return `Hello From Class`;
    };
    static countMembers() {
        return `${this.count} Members Created`;
    }
};

let userOne = new User(100, 'Hamza', 5000);
let userTwo = new User(101, 'Ahmed', 5000);
let userThree = new User(102, 'Karim', 5000);


console.log(userOne.u);
console.log(userTwo.u);
console.log(userOne.count); // undefined
console.log(User.count); // 0
console.log(User.sayHello());
console.log(User.countMembers());

