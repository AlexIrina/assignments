const mongoose = require('mongoose')
const Schema = mongoose.Schema

// movie blueprint of the data needed
const movieSchema = new Schema({
	// key:{value}
	title: {
		type: String,
		required: true,
	},
	genre: {
		type: String,
		enum: ['action', 'fantasy', 'horror'],
		required: true,
	},
	releaseYear: {
		type: Number,
	},
})

// export movie schema named "Movie"
// Models are used to perform CRUD operations
module.exports = mongoose.model('Movie', movieSchema)
