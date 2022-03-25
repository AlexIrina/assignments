const express = require('express')
const authorRouter = express.Router()
const Author = require('../models/author')

//? GETS ALL authors
authorRouter.get('/', (req, res, next) => {
	Author.find((err, authors) => {
		if (err) {
			res.status(500)
			return next(err)
		}
		return res.status(200).send(authors)
	})
})

// ? get author(s) by search term -localhost:9000/authors/search?author=na  -->returns Nadia
authorRouter.get('/search', (req, res, next) => {
	// search term
	const { author } = req.query
	// creates a regular expression out of the string "author"
	const pattern = new RegExp(author) // -- /author/
	// find all authors by name. $options: 'i'  Case insensitive -lower or uppercase
	Author.find({ name: { $regex: pattern, $options: 'i' } }, (err, authors) => {
		if (err) {
			res.status(500)
			return next(err)
		}
		return res.status(200).send(authors)
	})
})

//? POST new author
authorRouter.post('/', (req, res, next) => {
	const newAuthor = new Author(req.body)
	newAuthor.save((err, savedAuthor) => {
		if (err) {
			res.status(500)
			return next(err)
		}
		return res.status(201).send(savedAuthor)
	})
})

module.exports = authorRouter
