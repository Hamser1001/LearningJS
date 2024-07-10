/*
  Destructuring
  - Destructuring Function Parameters
*/
const user = {
    name: "Hamza",
    age: 30,
    skills: {
        html: 70,
        css: 80
    },
};

showDetails(user);

// function showDetails(obj) {
//     console.log(` your name is ${obj.name}`);
//     console.log(` your age is ${obj.age}`);
//     console.log(` your css skill progress is ${obj.skills.css}`);
// }

function showDetails({ name: n, age: a, skills: { css: c } } = user) {
    console.log(` your name is ${n}`);
    console.log(` your age is ${a}`);
    console.log(` your css skill progress is ${c}`);
};
