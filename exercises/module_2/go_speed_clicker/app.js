let countDown = 5;

let timeOut;

let interval;

const display = document.getElementById('container');
const button = document.getElementById('clicker');
const message = document.getElementById('message');

let count = localStorage.usersCount;

if (!count || count < 0) {
  // if usersCount not stored before, set it to 0
  count = 0;
} else if (count > 0) {
  // if game already played, disable it
  display.textContent = count;
  timesUp();
} else {
  // normal game can continue
  display.textContent = count;
  message.textContent = 'Go!';
  message.style.fontSize = '50px';
  message.style.color = 'green';
  button.style.backgroundColor = 'green';
}

// event listener for button clicks
button.addEventListener('click', function() {
  count++;
  if (count === 1) {
    startGame();
  }
  localStorage.usersCount = count;
  display.textContent = count;
});

// button is disabled after 5 seconds
function startGame() {
  message.textContent = 5;
  message.style.fontSize = '50px';
  // countdown
  timeout = setTimeout(timesUp, 5000);
  // show count down timer
  interval = setInterval(showDigits, 1000);
}

// stuff to disable button and restart game
function timesUp() {
  clearInterval(interval);
  button.style.backgroundColor = 'red';
  button.disabled = true;
  message.textContent = "Time's Up!";
  button.textContent = 'X';
  message.style.color = 'red';
  message.style.fontSize = '50px';
}

// show the digits
function showDigits() {
  countDown--;
  message.textContent = countDown;
}

// reset button to reset score everywhere
function resetTime() {
  count = 0;
  countDown = 5;
  localStorage.usersCount = 0;
  display.textContent = count;
  button.style.backgroundColor = 'green';
  button.disabled = false;
  button.textContent = '+';
  message.textContent = 'Go!';
  message.style.color = 'green';
  clearInterval(interval);
  clearTimeout(timeOut);
}
