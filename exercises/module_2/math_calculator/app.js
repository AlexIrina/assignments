// multiply
function multiply() {
  num1 = document.getElementById('firstNumberMulti').value;
  num2 = document.getElementById('secondNumberMulti').value;
  document.getElementById('multiResult').innerHTML =
    Number(num1) * Number(num2);
}
// subtract
function subtract() {
  num1 = document.getElementById('firstNumberSub').value;
  num2 = document.getElementById('secondNumberSub').value;
  document.getElementById('subResult').innerHTML = Number(num1) - Number(num2);
}
// add
function add() {
  num1 = document.getElementById('firstNumberPlus').value;
  num2 = document.getElementById('secondNumberPlus').value;
  document.getElementById('addResult').innerHTML = Number(num1) + Number(num2);
}
