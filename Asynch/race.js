
/*
  Promise
  - All
  - All Settled
  - Race
*/

const myFirstPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res('i am the first promise');
    }, 5000);
});


const mySecondPromise = new Promise((res, rej) => {
    setTimeout(() => {
        rej('i am the second promise');
    }, 1000);
});


const myThirdPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res('i am the third promise');
    }, 2000);
});

// Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).
//     then(
//         (resolvedValues) => console.log(resolvedValues),
//         (rejectedValue) => console.log(`rejected: ${rejectedValue}`)
//     );


// Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).
//     then(
//         (resolvedValues) => console.log(resolvedValues),
//         (rejectedValue) => console.log(`rejected: ${rejectedValue}`)
//     );

Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).
    then(
        (resolvedValues) => console.log(resolvedValues),
        (rejectedValue) => console.log(`rejected: ${rejectedValue}`)
    );