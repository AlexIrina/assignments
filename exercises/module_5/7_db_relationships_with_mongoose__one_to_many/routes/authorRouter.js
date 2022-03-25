const express = require('express')
const authorRouter = express.Router()
const Author = require('../models/author')

//? GETS ALL BOUNTIES
authorRouter.get('/', (req, res, next) => {
	Author.find((err, authors) => {
		if (err) {
			res.status(500)
			return next(err)
		}
		return res.status(200).send(authors)
	})
})

//? POST new bounty
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
