let interval;
let timeout;
let countDown = 5;

const message = document.getElementById('message');
const clickerBtn = document.getElementById('clicker');
const display = document.getElementById('display-container');
let count = localStorage.usersCount;

!count || count < 0 ? (count = 0) : (display.textContent = count);
message.textContent = 'Go!';
message.style.fontSize = '50px';
message.style.color = 'green';
clickerBtn.style.backgroundColor = 'green';

clickerBtn.addEventListener('click', function () {
  count++;
  count === 1 && startGame();
  localStorage.usersCount = count;
  display.textContent = count;
});

function startGame() {
  message.textContent = 5;
  message.style.fontSize = '50px';
  timeout = setTimeout(timesUp, 5000);
  interval = setInterval(showDigits, 1000);
}

function timesUp() {
  clearInterval(interval);
  clickerBtn.disabled = true;
  clickerBtn.style.fontSize = '50px';
  clickerBtn.style.backgroundColor = 'red';
  clickerBtn.textContent = 'X';
  message.textContent = 'Times Up!';
  message.style.color = 'red';
  message.style.fontSize = '50px';
}

function showDigits() {
  countDown--;
  message.textContent = countDown;
}

function resetTime() {
  count = 0;
  countDown = 5;
  localStorage.usersCount = 0;
  display.textContent = count;
  clickerBtn.textContent = '+';
  clickerBtn.style.fontSize = '50px';
  clickerBtn.style.backgroundColor = 'green';
  clickerBtn.disabled = false;
  message.textContent = 'GO!';
  message.style.fontSize = '50px';
  message.style.color = 'green';
  clearInterval(interval);
  clearTimeout(timeout);
}
