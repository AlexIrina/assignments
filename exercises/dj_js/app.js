// get element from html
const square = document.getElementById("square");

// add event listeners
// Blue when the mouse hovers over the square
square.addEventListener("mouseover", e => changeColor(e));
// Red when the mouse button is held down over the square
square.addEventListener("mousedown", e => changeColor(e, "red"));
// Yellow when the mouse button is let go over the square
square.addEventListener("mouseup", e => changeColor(e, "yellow"));
// Green when the mouse is double clicked in the square
square.addEventListener("dblclick", e => changeColor(e, "green"));
// Orange when the mouse scroll is used somewhere in the window (not just over the square).
window.addEventListener("scroll", e => changeColor(e, "orange"));
// white when leaves square
square.addEventListener("mouseout", e => changeColor(e, "white"));

window.addEventListener("keydown", e => changeColor(e));

// You should also be able to press the first letter of the colors (typing "r" on the keyboard for "red", for example) and have the box change to that color.

function changeColor(event) {
  console.log(event);
  // blue
  if (event.type === "mouseover" || event.code === "KeyB") {
    square.classList.remove(
      "blue",
      "red",
      "yellow",
      "orange",
      "green",
      "white"
    );
    square.classList.add("blue");
    // red
  } else if (event.type === "mousedown" || event.code === "KeyR") {
    square.classList.remove(
      "blue",
      "red",
      "yellow",
      "orange",
      "green",
      "white"
    );
    square.classList.add("red");
    // yellow
  } else if (event.type === "mouseup" || event.code === "KeyY") {
    square.classList.remove(
      "blue",
      "red",
      "yellow",
      "orange",
      "green",
      "white"
    );
    square.classList.add("yellow");
  }
  // green
  else if (event.type === "dblclick" || event.code === "KeyG") {
    square.classList.remove(
      "blue",
      "red",
      "yellow",
      "orange",
      "green",
      "white"
    );
    square.classList.add("green");
    //scroll
  } else if (event.type === "scroll" || event.code === "KeyO") {
    square.classList.remove(
      "blue",
      "red",
      "yellow",
      "orange",
      "green",
      "white"
    );
    square.classList.add("orange");
  } else if (event.type === "mouseout" || event.code === "KeyW") {
    square.classList.remove(
      "blue",
      "red",
      "yellow",
      "orange",
      "green",
      "white"
    );
    square.classList.add("white");
  }
}
