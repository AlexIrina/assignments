const express = require('express')
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

//? Get a specific movies => using request params
// next allows me to pass the error to the Middleware
movieRouter.get('/:movieId', (req, res, next) => {
	Movie.find({ _id: req.params.movieId }, (err, movie) => {
		if (err) {
			res.status(500)
			return next(err)
		}
		return res.status(201).send(movie)
	})
})

//? specific request to genre ---movies/search/genre?genre=action
movieRouter.get('/search/genre', (req, res, next) => {
	Movie.find({ genre: req.query.genre }, (err, movies) => {
		if (err) {
			res.status(500)
			return next(err)
		}
		return res.status(201).send(movies)
	})
})

//? POST 1 new movie
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

//? DELETE ONE MOVIE
movieRouter.delete('/:movieId', (req, res, next) => {
	Movie.findOneAndDelete({ _id: req.params.movieId }, (err, deletedItem) => {
		if (err) {
			res.status(500)
			return next(err)
		}
		return res
			.status(200)
			.send(`Successfully deleted ${deletedItem.title} from the database`)
	})
})

//? UPDATE ONE
movieRouter.put('/:movieId', (req, res, next) => {
	Movie.findOneAndUpdate(
		{ _id: req.params.movieId }, //find this one to update
		req.body, //update the object with this data
		{ new: true }, //send back the updated version of the objet please
		(err, updatedMovie) => {
			if (err) {
				res.status(500)
				return next(err)
			}
			return res.status(201).send(updatedMovie)
		}
	)
})

module.exports = movieRouter
// todo: above are all the routes needed to create servers
