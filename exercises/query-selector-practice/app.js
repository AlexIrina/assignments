// querySelector
// Select a single element from the page. (Returns the first element it finds that matches the query)
// let results = document.querySelectorAll("ol#favorite-things > li.thing");

// let results2 = document
//   .querySelector("ol#favorite-things")
//   .querySelectorAll("li.thing");

// results.forEach(i => {
//   i.textContent = "blah";
//   console.log(i.textContent);
// });
// console.log(results, results2);
// function amren(passthrough) {
//   passthrough;
// }

// amren(result);
// querySelectorAll
// Select all elements from the page that match the query.
// var result = document.querySelectorAll("ol#favorite-things > li");
// console.log(Array.from(result));

// for (var i = 0; i < result.length; i++) {
//   result[i].textContent = "** REDACTED **";
// }

// console.log((result.innerHTML = "lol"));

// let results = document.querySelectorAll("ol#favorite-things > li.thing");

// for (let i = 0; i < results.length; i++) {
//   console.log(results[i].innerHTML);
// }

// console.log(results);

// let results2 = document
//   .querySelector("ol#favorite-things")
//   .querySelectorAll("li.thing");

// results.forEach(i => {
//   i.textContent = "blah";
//   console.log(i.textContent);
// });
// console.log(results, results2);
// function amren(passthrough) {
//   passthrough;
// }

// //  1. Select the h1 element
// let result = document.getElementById("h1");
// //   2. Save the h1 element's text to a variable
// let text = result.textContent;
// console.log(text);
// //   3. Change the paragraph element's text to be the same as the text inside the h1

// document.getElementById("paragraph").textContent = text;

// ////////////////////// Modifying Styles with JS
//
// let header = document.querySelector("#header");
// console.log(header);

// console.log((header.style.color = "red"));
// console.log(Object.values(header.style));

let body = document.querySelectorAll("body");

let bgColor = (document.body.style.backgroundColor = "grey");
console.log(bgColor);

let header = document.querySelector(".header").className;
console.log(header);
