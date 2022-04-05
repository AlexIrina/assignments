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

//? POST new book
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

//? ability to Like a book to increment the like count
// ! test put request in Postman - books/likes/123123213124
bookRouter.put('/likes/:bookID', (req, res, next) => {
	Book.findOneAndUpdate(
		//1.what do i need to update? Find the book that has this ID..
		{ _id: req.params.bookID },
		//2. what update do i need to perform?
		// action : increment
		// increment the likes by 1
		{ $inc: { likes: 1 } },
		//3. send the new version
		{ new: true },
		(err, updatedBook) => {
			if (err) {
				res.status(500)
				return next(err)
			}
			// send back the updated book
			return res.status(201).send(updatedBook)
		}
	)
})

// find books by the number of likes that are gte(greater than) 2
// localhost:9000/books/search/bylikes
bookRouter.get('/search/bylikes', (req, res, next) => {
	Book.where('likes')
		.gte(2)
		// .gte(req.query.likeAmount)
		.exec((err, books) => {
			if (err) {
				res.status(500)
				return next(err)
			}
			return res.status(200).send(books)
		})
})

module.exports = bookRouter
