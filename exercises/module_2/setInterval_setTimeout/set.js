const start = document.getElementById('start');
const stop = document.getElementById('stop');
const timer = document.getElementById('timer');
const reset = document.getElementById('reset');

let timeOut;

let count = 0;
let intervalId;

const incrementTimer = () => {
  count++;
  timer.textContent = count;
};

start.addEventListener('click', function() {
  // need to pass 2 arguments in here
  // first arg: what functionality should it be calling on the interval ?
  // second arg: amount of time in milliseconds id like this to fire on.
  intervalId = setInterval(incrementTimer, 1000);
  // if i used 'let intervalID' --- the intervalID variable will be stuck in the scope of the function and other functions cant use it
});

stop.addEventListener('click', function() {
  clearInterval(intervalId);
});

// setInterval() and setTimeout() when used return an ID

// resets the time to 0
reset.addEventListener('click', function() {
  count = 0;
  timer.textContent = count;
  clearInterval(incrementTimer);
});

// // setTimeout() will only happen once. I don't need the stop button
// Example
// start.addEventListener('click', function() {
//   intervalId = setTimeout(incrementTimer, 2000);
// });
