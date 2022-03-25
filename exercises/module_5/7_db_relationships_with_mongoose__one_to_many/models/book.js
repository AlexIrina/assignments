const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	likes: {
		type: Number,
		default: 0,
	},
	// represents the id of the author in the database
	author: {
		// referencing another object in the database by its id...id of the existing author
		type: Schema.Types.ObjectId,
		// which model does this belong to
		ref: 'Author',
		required: true,
	},
})

module.exports = mongoose.model('Book', bookSchema)
