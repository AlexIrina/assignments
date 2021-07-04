const express = require('express')
const movieRouter = express.Router()
const { v4: uuidv4 } = require('uuid')
const movies = require('../data/movieData')

//? Get ALL the movies
movieRouter.get('/', (req, res) => {
	// res.send -> ends its session
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
// POST ONE
movieRouter.post('/', (req, res) => {
	// this is the object the user sent in the POST request
	const newMovie = req.body
	newMovie.id = uuidv4()
	movies.push(newMovie)
	// res.send(`Successfully added ${newMovie.title} to  the database!`, )
	res.send(newMovie)
})
//? UPDATE ONE - need the id of the movie and res.body
movieRouter.put('/:movieId', (req, res) => {
	const movieId = req.params.movieId
	const updateObj = req.body
	const movieIndex = movies.findIndex(movie => movie._id === movieId)
	// ! update that movie and send it back.
	const updatedMovie = Object.assign(movies[movieIndex], updateObj)
	res.send(updatedMovie)
})

// DELETE ONE MOVIE
movieRouter.delete('/:movieId', (req, res) => {
	const movieId = req.params.movieId
	// ! Get the index number of the movie that has the movieId
	const movieIndex = movies.findIndex(movie => movie._id === movieId)
	// ! splice the movie from the movies array
	movies.splice(movieIndex, 1)
	res.send('Successfully deleted the movie')
})

module.exports = movieRouter
// ! .route('/) allows me to chain all the CRUD request onto each other
// todo: above are all the routes needed to create servers
