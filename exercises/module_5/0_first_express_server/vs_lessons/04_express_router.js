const { v4: uuidv4 } = require('uuid')

const tvShows = [
	{ title: 'Rick and Morty', _id: uuidv4() },
	{ title: 'Watchmen', _id: uuidv4() },
	{ title: 'Westworld', _id: uuidv4() },
	{ title: 'Friends', _id: uuidv4() },
]

module.exports = tvShows

// Express Router is built into Express library - it enables us to modularize our routes in Express
// Modular file organization - different files are used for specific tasks. Similar to Reacts components. So that the server.file doesn't get really long.
// !1. create a routes folder where ill put all my routes that are currently in server.js
//! 2. create a movieRouter.js file in routes and add the movies logic into it

