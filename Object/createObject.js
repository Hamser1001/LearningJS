/*
  Object
  - Create With New Keyword new Object();
*/
let user = new Object({
    age: 20,
});


console.log(user);
user.age = 30;
user["country"] = "morocco";

user.sayHello = function () {
    return `Hello`;
}
console.log(user);
console.log(user.country);
console.log(user.age);
console.log(user.sayHello());

