const express = require('express')
const movieRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const movies = [
	{ title: 'die hard', genre: 'action', _id: uuidv4() },
	{ title: 'star wars', genre: 'fantasy', _id: uuidv4() },
	{ title: 'lion king', genre: 'fantasy', _id: uuidv4() },
	{ title: 'friday the 13th', genre: 'horror', _id: uuidv4() },
]

// ! .route('/) allows me to chain all the CRUD request onto each other
movieRouter
	.route('/')
	.get((req, res) => {
		res.send(movies)
	})
	.post((req, res) => {
		// this is the object the user sent in the POST request
		const newMovie = req.body
		newMovie.id = uuidv4()
		movies.push(newMovie)
		res.send(`Successfully added ${newMovie.title} to  the database!`)
	})
	.put()
	.delete()

module.exports = movieRouter
