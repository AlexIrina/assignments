// --------------------------->>>>>>>Qualifier
// Your first task is to use pure JavaScript to insert a header to the top of this page.

// Utilize the css already written for .name and .header

// Notice that your name needs to be a different color. Wrapping text in a span tag is a great way to do this.

// 1.Need to create the header that ill be putting inside the header tag
let h1 = document.createElement(`h1`);

// 2. Now i need to add text to the h1 i just created
h1.textContent = `Javascript made this!!!`;

// 1. grab the header id thats in my html/css
document.getElementById(`header`);

// 2. add the created h1 to the header in html
header.appendChild(h1);

// I wont see it added to the page yet because it doesn't have any styles and because its doesn't have the same class name as the header tag

// add a class to the h1
h1.className = `header`;
// now you can see it

// ////////step 2
// Now i need to add the .name into the html under the h1 i just created

// 1. create an h2 to be the subtitle that will be displayed below the h1 i just created

let h3 = document.createElement(`h3`);

//3 give the h3 a class
h3.className = 'header';

// append the created h3 to the header tag
header.appendChild(h3);

//1 create the span that ill put inside the h3 tag
let span = document.createElement(`span`);
let span2 = document.createElement(`span`);

// give span 2 text
span2.innerText = ` wrote this with Javascript`;

// 2 give the span a class
span.className = `name`;

// add the text inside the span
span.innerHTML = `Alex`;

// append the span to the 3
h3.appendChild(span);
// append span 2 to the span
// spans are inline elements so they will be on the same line
span.appendChild(span2).style.color = 'black';


