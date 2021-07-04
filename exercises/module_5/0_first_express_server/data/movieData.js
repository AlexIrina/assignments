const { v4: uuidv4 } = require('uuid')

const movies = [
	{ title: 'die hard', genre: 'action', _id: uuidv4() },
	{ title: 'star wars', genre: 'fantasy', _id: uuidv4() },
	{ title: 'lion king', genre: 'fantasy', _id: uuidv4() },
	{ title: 'friday the 13th', genre: 'horror', _id: uuidv4() },
]

module.exports = movies
