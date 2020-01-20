/**
 * CHALLENGE:
 *
 * Play around with all the different DOM methods for selecting and modifying elements.
 *
 * Make sure to read through the `notes.md` file for a recap and some new information regarding using the DOM API
 */

//  # Selecting element(s)

// // Returns a single element by its ID. If you (erroneously) have two elements with the same id, it will pick the first one it finds
// let showID = document.getElementById('showcase');
// console.dir(showID);

// // Returns a single element based on the CSS selector provided as a string. If multiple items match the CSS selector, this will only return the first one that matches.
// let showDiv = document.querySelector(`div.background-image`);
// console.log(showDiv);

//  Returns an array-like HTML collection of all elements that have the provided class name. If 0 elements match, returns an empty HTML collection (like an empty array). If 1 element matches, returns an HTML collection with a single item in it (like an array with only 1 item).
// let showClass = document.getElementsByClassName(`content-wrap`);
// console.log(showClass[]); // in the bracket pick which tag you want to select

// //  - Returns a collection of elements (array-like) with the provided tag name (e.g. "h1", "div", "li", etc.)
// // `document.getElementsByTagName(<tag name string>)`
// let showDiv = document.getElementsByTagName(`h1`);
// console.log(`OUTPUT: showDiv`, showDiv);

// // - Returns a collection of elements (array-like) that match the CSS selector.
// // `document.querySelectorAll(<CSS selector string>)`

// let showAllElements = document
//   .getElementById(`section-a`)
//   .querySelectorAll(`h2`);

// console.log(`OUTPUT: showAllElements`, showAllElements);

///////////////////////////

// * Modify Elements

// (For descriptions below, imagine we've selected and saved an element to a variable called `element`)

// // `element.textContent` - the plain text inside the element. Can be set equal to something new with the assignment operator (`=`)

// let changeTextContent = document
//   .getElementById(`section-a`)
//   .querySelectorAll(`p`);
// console.log(`OUTPUT: changeTextContent`, changeTextContent[0]);

// // change the inner text
// changeTextContent[0].textContent = `This changes the inner text inside the paragraph `;

// // `element.innerHTML` - the string version of the HTML elements that are children of the selected element. If you add new HTML tags to the `innerHTML` of an element, they'll be turned into new elements on the page.
// let getElement = document.querySelectorAll(`div.content-text`);
// console.log(`OUTPUT: getElement`, getElement);

// // create a P
// getElement[0].innerHTML = `This is another paragraph that i can add to the div`;

// // Below add a paragraph to any div
// let node = document.createElement('p'); // Create a <li> node
// var textnode = document.createTextNode(`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
// natus omnis ab quibusdam, distinctio ut culpa. Sint placeat
// dolores asperiores in consequatur dignissimos iure commodi
// doloremque, nisi omnis dolorum atque ducimus? Blanditiis nemo,
// accusamus tempora repudiandae molestiae ut odio corrupti.`);
// node.appendChild(textnode); // Append the text to <li>
// document.getElementById('main-content-text').appendChild(node); // Append <li> to <ul> with id="myList"

// `element.style` - an object whose properties match all available CSS properties of the element, but camelCased instead of separated with dashes. (E.g. `backgroundColor` instead of `background-color`)

// // select paragraph
// let selectElement = document.querySelectorAll(`p.main-p`);
// console.log(`OUTPUT: selectElement`, selectElement[0].style);

// *Pro tip:* many attributes in the HTML of an element are accessible with JavaScript. E.g., an image element with a `src` attribute (<img id="logo" src="someImage.jpg" />) can be accessed or modified from the selected element in JS:

// let myImage = document.querySelector(`#header-image`);

// console.log((myImage.style.background = `url(images/northHope2.jpg)`));
// // changes the image
// // Same goes for `href`, `id`, etc.

// console.log(`OUTPUT: myImage`, myImage.style.background);
