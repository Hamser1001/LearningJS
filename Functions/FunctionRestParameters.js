/*
  Function
  - Rest Parameters
  - Only One Allowed
  - Must Be Last Element
*/


function calc (...numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return `final result is ${result}`;
}

console.log(calc (1, 28, 12, 25, 80));