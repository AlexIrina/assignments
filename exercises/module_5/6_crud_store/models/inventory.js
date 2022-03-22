const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		enum: ['laptop', 'phone', 'watch'],
		required: true,
	},
	price: {
		type: Number,
	},
})
// Models are used to perform CRUD operations
module.exports = mongoose.model('Inventory', inventorySchema)
