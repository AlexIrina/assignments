const express = require('express')
const { v4: uuidv4 } = require('uuid')
const tvShowsRouter = express.Router()

const tvShows = [
	{ title: 'Rick and Morty', _id: uuidv4() },
	{ title: 'Watchmen', _id: uuidv4() },
	{ title: 'Westworld', _id: uuidv4() },
	{ title: 'Friends', _id: uuidv4() },
]

tvShowsRouter.get('/', (req, res) => {
	res.send(tvShows)
})

tvShowsRouter.post('/', (req, res) => {
	// this is the object the user sent in the POST request
	const newTvShow = req.body
	newTvShow.id = uuidv4()
	tvShows.push(newTvShow)
	res.send(`Successfully added ${newTvShow.title} to  the database!`)
})

module.exports = tvShowsRouter
