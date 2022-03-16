const mongoose = require('mongoose')
const Schema = mongoose.Schema

// movie blueprint
const movieSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	genre: {
		type: String,
		required: true,
	},
	releaseYear: {
		type: Number,
	},
})

// export movie schema named "Movie"
module.exports = mongoose.model('Movie', movieSchema)
