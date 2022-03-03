const express = require('express')
const ufcChampionsData = require('../data/championsData')
const { v4: uuidv4 } = require('uuid')
const ufcChampionsRouter = express.Router()

//? Get ALL the fighters
ufcChampionsRouter.get('/', (req, res) => {
	res.send(ufcChampionsData)
})

//? Get 1 fighter
ufcChampionsRouter.get('/:fighterId', (req, res) => {
	const fighterId = req.params.fighterId
	const foundFighter = ufcChampionsData.find(
		fighter => fighter._id === fighterId
	)
	res.send(foundFighter)
})

//? specific request =>
ufcChampionsRouter.get('/search/nationality', (req, res) => {
	const nationality = req.query.nationality
	const nationalitySpecificFighters = ufcChampionsData.filter(
		fighter => fighter.nationality === nationality
	)
	res.send(nationalitySpecificFighters)
})

//? specific request to genre ---movies/search/genre?genre=action
ufcChampionsRouter.get('/search/genre', (req, res) => {
	const genre = req.query.genre
	const genreSpecificMovies = movies.filter(movie => movie.genre === genre)
	res.send(genreSpecificMovies)
})

//? Add a fighter to the db
ufcChampionsRouter.post('/', (req, res) => {
	// this is the object the user sent in the POST request
	const newFighter = req.body
	newFighter.id = uuidv4()
	ufcChampionsData.push(newFighter)

	console.log('my new new fighter', newFighter)
	res.send(`Successfully added ${newFighter.name} to  the database!`)
})

module.exports = ufcChampionsRouter
