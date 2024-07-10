/*
  Destructuring
  - Destructuring Mixed Content
*/

const user = {
    name: "Hamza",
    age: 30,
    skills: ["Html", "Css", "Javascript"],
    addresses: {
        morocco: "Agadir",
        germany: "Berlin"
    },
};

const {
    name: n,
    age: a,
    skills: [one, two, three],
    addresses: {
        germany: g,
    }
} = user;

console.log(`your Name is ${n}`);
console.log(`your age is ${a}`);
console.log(`your skills are ${one},${two},${three}`);
console.log(`your live is ${g}`);


