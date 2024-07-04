/*
  Object
  - Nested Object And Trainings
*/

let user = {
    name: "Hamza",
    age: 30,
    skills: ["Html", "Css", "JavaScript", "UX", "UI"],
    avialabe: false,
    addresses: {
        morocco: "Agadir",
        France: {
            one: "Paris",
            two: "canne"
        },
    },
    checkAv: function () {
        if (user.avialabe === true) {
            return `Free for Work`;
        } else {
            return `Not Free for Work`;

        }
    },
};

console.log(user.name);
console.log(user.age);
console.log(user.skills);
console.log(user.skills[2]);
console.log(user.addresses.France.one);
console.log(user["addresses"]["France"]["one"]);

console.log(user.checkAv());


