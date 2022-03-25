const express = require('express')
const bookRouter = express.Router()
const Book = require('../models/book')

//? GETS ALL Books
bookRouter.get('/', (req, res, next) => {
	Book.find((err, books) => {
		if (err) {
			res.status(500)
			return next(err)
		}
		return res.status(200).send(books)
	})
})

// ! get by Author of the Book
bookRouter.get('/:authorID', (req, res, next) => {
	// returns a smaller array of books that marches the author
	Book.find({ author: req.params.authorID }, (err, books) => {
		if (err) {
			res.status(500)
			return next(err)
		}
		return res.status(200).send(books)
	})
})

//? POST new bounty
bookRouter.post('/:authorID', (req, res, next) => {
	console.log(req.params)
	// relates the book to the author that wrote the book
	req.body.author = req.params.authorID
	// creating a new book from it
	const newBook = new Book(req.body)
	newBook.save((err, savedBook) => {
		if (err) {
			res.status(500)
			return next(err)
		}
		return res.status(201).send(savedBook)
	})
})

module.exports = bookRouter
