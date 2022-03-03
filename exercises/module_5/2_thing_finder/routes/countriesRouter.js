const express = require('express')
const countriesRouter = express.Router()
const { v4: uuidv4 } = require('uuid')
const countries = require('../data/countriesData')

countriesRouter.get('/', (req, res) => {
	res.send(countries)
})

countriesRouter.get('/search/language', (req, res) => {
	const language = req.query.language
	const languageSpecificCountry = countries.filter(
		country => country.language === language
	)
	res.send(languageSpecificCountry)
})

countriesRouter.post('/', (req, res) => {
	const newCountry = req.body
	newCountry.id = uuidv4()
	movies.push(newCountry)

	res.send(`Successfully added ${newCountry.name} to  the database!`)
})

module.exports = countriesRouter
