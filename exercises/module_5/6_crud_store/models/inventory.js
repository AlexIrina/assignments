const mongoose = require('mongoose')
const Schema = mongoose.Schema

// inventory blueprint of the data needed
const inventorySchema = new Schema({
	// key:{value}
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		// enum: ['action', 'fantasy', 'horror'],
		required: true,
	},
	price: {
		type: Number,
	},
})

// Models are used to perform CRUD operations
module.exports = mongoose.model('InventoryModel', inventorySchema)
