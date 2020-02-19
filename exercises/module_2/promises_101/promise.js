/*
RESOLVE -- .then()
REJECT -- .catch()
*/
// Demonstrates how a promise works
// THENABLE FUNCTION -- .then().catch() chained together

const flipCoin = () => {
  return new Promise((resolve, reject) => {
    // callback function with 2 methods i can call to resolve or reject the promise
    const randomNum = Math.floor(Math.random() * 2); // 0 or 1

    if (randomNum === 0) {
      resolve(`HEADS!`);
    } else if (randomNum === 1) {
      reject(`TAILS!`);
    }
  });
};

// IF THE PROMISE RESOLVES .then()
// if error .catch()
flipCoin()
  .then(response => console.log(`RESOLVED: ` + response))
  .catch(error => console.log(`REJECTED: ` + error));

// 2 promise constructor METHODS
// i can use one method at a time

Promise.resolve('if i resolved something').then(response =>
  console.log(response)
);

Promise.reject(`if i rejected something`).catch(error => console.log(error));

// this is an Async function
function getData() {
  return new Promise(resolve => {
    // simulating async event
    // fires resolve after 3 seconds
    setTimeout(() => resolve(`HELLO WORLD!`), 3000);
    // after 2 secs it will resolve and trigger .then()
  });
}

getData()
  .then(res => console.log(res))
  .catch(err => console.log(err));
// the more i use promises the more ill love them
