const mongoose = require('mongoose')
const Schema = mongoose.Schema

// One to Many relationship --- Author is one -- books is many
// Give the id of the ONE (author) to many (books)

const authorSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
})

module.exports = mongoose.model('Author', authorSchema)
