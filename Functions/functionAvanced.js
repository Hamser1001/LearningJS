/*
  Function Advanced Examples
*/

function sayHello(userName, age) {
    if (age < 20) {
        console.log(`App is Not Suitable For You`);
    } else {
        console.log(`Hello ${userName}, your age is ${age}`);
    }
}

sayHello('Hamza', 30);
sayHello('Hamid', 28);
sayHello('Ahmed', 17);

function generateYears(start, end, exclude) {
    for (let i = start; i <= end; i++) {
        if (i === exclude) {
            continue;
        }
        console.log(i);
    }
}

generateYears(1994, 2024, 2020);