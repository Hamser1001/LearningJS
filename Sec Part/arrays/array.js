/*
  Arrays
  - Create Arrays [Two Methods] new Array() + []
  - Access Arrays Elements
  - Nested Arrays
  - Change Arrays Elements
  - Check For Array Array.isArray(arr);
*/

let myFriends = ["hamza", "simo", "karim",["ali", "marouan"]];

console.log(`Hello ${myFriends[0]}`);
console.log(`Hello ${myFriends[2]}`);
console.log(`Hello ${myFriends[2][2]}`);
console.log(`Hello ${myFriends[3][1]}`);
console.log(myFriends[3][1][3]);

console.log(myFriends);
myFriends[0] = "Hamid";
console.log(myFriends);
myFriends[3] = ["redouane", "kamal", "omar"];
console.log(myFriends);
console.log(typeof myFriends);
console.log(typeof myFriends);
console.log(Array.isArray(myFriends));
console.log(myFriends.length);
myFriends[myFriends.length - 1] = "tarek";
console.log(myFriends);

/*
  Arrays Methods [Adding And Removing]
  - unshift("", "") Add Element To The First
  - push("", "") Add Element To The End
  - shift() Remove First Element From Array
  - pop() Remove Last Element From Array
*/

myFriends.unshift("ousama", "nabil");
console.log(myFriends);

myFriends.push("yacine", "ahmed");
console.log(myFriends);

let first = myFriends.shift();
console.log(myFriends);
console.log(`First Name is ${first}`);


let last = myFriends.pop();
console.log(myFriends);
console.log(`Last Name is ${last}`);


