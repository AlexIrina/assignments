const express = require('express')
const movieRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const movies = [
	{ title: 'die hard', genre: 'action', _id: uuidv4() },
	{ title: 'star wars', genre: 'fantasy', _id: uuidv4() },
	{ title: 'lion king', genre: 'fantasy', _id: uuidv4() },
	{ title: 'friday the 13th', genre: 'horror', _id: uuidv4() },
]

// Get ALL the movies
movieRouter.get('/', (req, res) => {
	res.send(movies)
})

//? Get 1 movies => using request params
movieRouter.get('/:movieId', (req, res) => {
	const movieId = req.params.movieId
	const foundMovie = movies.find(movie => movie._id === movieId)
	res.send(foundMovie)
})

//? specific request to genre
movieRouter.get('/search/genre', (req, res) => {
	const genre = req.query.genre
	const genreSpecificMovies = movies.filter(movie => movie.genre === genre)
	res.send(genreSpecificMovies)
})

movieRouter.post('/', (req, res) => {
	// this is the object the user sent in the POST request
	const newMovie = req.body
	newMovie.id = uuidv4()
	movies.push(newMovie)
	res.send(`Successfully added ${newMovie.title} to  the database!`)
})

module.exports = movieRouter
// ! .route('/) allows me to chain all the CRUD request onto each other
