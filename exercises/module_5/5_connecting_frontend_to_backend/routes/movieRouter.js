const express = require('express')
const movie = require('../models/movie')
const movieRouter = express.Router()
//? import Movie from a mongoose database
const Movie = require('../models/movie')

//? Get ALL the movies
movieRouter.get('/', (req, res, next) => {
	// find movies in the mongoose database
	Movie.find((err, movies) => {
		if (err) {
			res.status(500)
			return next(err)
		}
		return res.status(200).send(movies)
	})
})

// //? Get 1 movies => using request params
// // next allows me to pass the error to the Middleware
// movieRouter.get('/:movieId', (req, res, next) => {
// 	const movieId = req.params.movieId
// 	const foundMovie = movies.find(movie => movie._id === movieId)
// 	//! if movie id is not found
// 	if (!foundMovie) {
// 		const error = new Error(`Movie with the id ${movieId} was not found`)
// 		res.status(500)
// 		return next(error)
// 	}
// 	res.status(200).send(foundMovie)
// })

// //? specific request to genre ---movies/search/genre?genre=action
// movieRouter.get('/search/genre', (req, res, next) => {
// 	const genre = req.query.genre
// 	//! if genre id is not found
// 	if (!genre) {
// 		const error = new Error(`You must provide a genre`)
// 		res.status(500)
// 		return next(error)
// 	}
// 	const genreSpecificMovies = movies.filter(movie => movie.genre === genre)
// 	res.status(200).send(genreSpecificMovies)
// })

// POST 1 new movie
movieRouter.post('/', (req, res, next) => {
	const newMovie = new Movie(req.body)
	newMovie.save((err, savedMovie) => {
		if (err) {
			res.status(500)
			return next(err)
		}
		return res.status(201).send(savedMovie)
	})
})

// DELETE ONE MOVIE ---send a delete request to movies/87ad4320-fdc2-47fa-96a8-39a6090dda7c
movieRouter.delete('/:movieId', (req, res, next) => {
	const movieId = req.params.movieId
	// ! Get the index number of the movie that has the movieId
	const movieIndex = movies.findIndex(movie => movie._id === movieId)
	// ! splice the movie from the movies array
	movies.splice(movieIndex, 1)
	res.send('Successfully deleted the movie')
})

//? UPDATE ONE - need the id of the movie and res.body -> is the new object to update the existing object with
movieRouter.put('/:movieId', (req, res, next) => {
	const movieId = req.params.movieId
	console.log('is the params logic set up correctly?', movieId)
	const updateObj = req.body
	const movieIndex = movies.findIndex(movie => movie._id === movieId)
	console.log('is this the right index?', movieIndex)
	// ! update that movie and send it back.
	const updatedMovie = Object.assign(movies[movieIndex], updateObj)
	console.log('movie updated', updatedMovie)
	res.status(201).send(updatedMovie)
})

module.exports = movieRouter
// todo: above are all the routes needed to create servers
