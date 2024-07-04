/*
  Function
  - Anonymous Function
  - Calling Named Function vs Anonymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
*/

let calculator = function (num1, num2) {
    return num1 + num2;
};
console.log(calculator(1, 5));

document.getElementById("show").onclick = function () {
    console.log("Show");
}

setTimeout(() => {
    console.log("Good");
}, 2000);