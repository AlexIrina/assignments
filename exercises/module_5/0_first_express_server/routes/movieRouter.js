const express = require('express')
const movieRouter = express.Router()
const { v4: uuidv4 } = require('uuid')
// const movies = require('../data/movieData')

const movies = [
	{ title: 'die hard', genre: 'action', _id: uuidv4() },
	{ title: 'star wars', genre: 'fantasy', _id: uuidv4() },
	{ title: 'lion king', genre: 'fantasy', _id: uuidv4() },
	{ title: 'friday the 13th', genre: 'horror', _id: uuidv4() },
]

//? Get ALL the movies
movieRouter.get('/', (req, res) => {
	// res.send -> ends its session
	res.send(movies)
	// res.send('Hello world')
})

//? Get 1 movies => using request params
movieRouter.get('/:movieId', (req, res) => {
	const movieId = req.params.movieId
	const foundMovie = movies.find(movie => movie._id === movieId)
	res.send(foundMovie)
})

//? specific request to genre ---movies/search/genre?genre=action
movieRouter.get('/search/genre', (req, res) => {
	const genre = req.query.genre
	const genreSpecificMovies = movies.filter(movie => movie.genre === genre)
	res.send(genreSpecificMovies)
})

// POST 1 new movie
movieRouter.post('/', (req, res) => {
	// this is the object the user sent in the POST request
	const newMovie = req.body
	newMovie.id = uuidv4()
	movies.push(newMovie)

	console.log('my new movie', newMovie)
	console.log(movies, 'movies')
	// res.send(`Successfully added ${newMovie.title} to  the database!`, )
	res.send(newMovie)
})

// DELETE ONE MOVIE ---send a delete request to movies/87ad4320-fdc2-47fa-96a8-39a6090dda7c
movieRouter.delete('/:movieId', (req, res) => {
	const movieId = req.params.movieId
	// ! Get the index number of the movie that has the movieId
	const movieIndex = movies.findIndex(movie => movie._id === movieId)
	// ! splice the movie from the movies array
	movies.splice(movieIndex, 1)
	res.send('Successfully deleted the movie')
})

//? UPDATE ONE - need the id of the movie and res.body -> is the new object to update the existing object with
movieRouter.put('/:movieId', (req, res) => {
	const movieId = req.params.movieId
	console.log('is the params logic set up correctly?', movieId)
	const updateObj = req.body
	const movieIndex = movies.findIndex(movie => movie._id === movieId)
	console.log('is this the right index?', movieIndex)
	// ! update that movie and send it back.
	const updatedMovie = Object.assign(movies[movieIndex], updateObj)
	console.log('movie updated', updatedMovie)
	res.send(updatedMovie)
})

module.exports = movieRouter
// ! .route('/) allows me to chain all the CRUD request onto each other
// todo: above are all the routes needed to create servers
