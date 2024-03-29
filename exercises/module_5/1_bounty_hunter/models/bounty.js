const mongoose = require('mongoose')
const Schema = mongoose.Schema

// inventory blueprint of the data needed
const bountySchema = new Schema({
	// key:{value}
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	amount: {
		type: Number,
		default: 0,
	},
	jedi: {
		type: String,
		enum: ['jedi', 'sith'],
		required: true,
	},
	image: {
		type: String,
	},
	living: {
		type: String,
	},
})

// Models are used to perform CRUD operations
module.exports = mongoose.model('Bounty', bountySchema)
