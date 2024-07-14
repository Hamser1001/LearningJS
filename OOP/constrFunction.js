/*
  Constructor Function
*/
function User(id, username, salary) {
    this.id = id;
    this.username = username;
    this.salary = salary + 1000;
};

let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "Hassan", 6000);
let userThree = new User(102, "Sayed", 7000);
console.log(userOne.id);
console.log(userOne.username);
console.log(userOne.salary);
// const userOne = {
//   id: 100,
//   username: "Elzero",
//   salary: 5000,
// };

// const userTwo = {
//   id: 101,
//   username: "Hassan",
//   salary: 6000,
// };

// const userThree = {
//   id: 102,
//   username: "Sayed",
//   salary: 7000,
// };