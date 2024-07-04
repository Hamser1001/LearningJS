/*
  Object
  - Create Object With Create Method
*/

let user = {
    age: 30,
    doubleAge: function () {
        return this.age * 2;
    },
};

console.log(user);
console.log(user.age);
console.log(user.doubleAge());

let obj = Object.create({});

console.log(obj);

let copyObj = Object.create(user);
copyObj.age = 40;

console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());