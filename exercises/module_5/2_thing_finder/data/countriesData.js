const { v4: uuidv4 } = require('uuid')

const countries = [
	{ name: 'russia', language: 'russian', _id: uuidv4() },
	{ name: 'china', language: 'chinese', _id: uuidv4() },
	{ name: 'united states', language: 'english', _id: uuidv4() },
	{ name: 'united kingdom', language: 'english', _id: uuidv4() },
]

module.exports = countries
