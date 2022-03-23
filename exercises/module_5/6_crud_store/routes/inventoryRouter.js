const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory')

//? Get ALL the items
inventoryRouter.get('/', (req, res, next) => {
	Inventory.find((err, items) => {
		if (err) {
			res.status(500)
			return next(err)
		}
		return res.status(200).send(items)
	})
})

//? find a specific item
inventoryRouter.get('/:inventoryItemId', (req, res, next) => {
	Inventory.findById({ _id: req.params.inventoryItemId }, (err, foundItem) => {
		if (err) {
			res.status(500)
			return next(err)
		}
		return res.status(200).send(foundItem)
	})
})

//? POST 1 new item
inventoryRouter.post('/', (req, res, next) => {
	const newInventoryItem = new Inventory(req.body)
	newInventoryItem.save((err, savedInventoryItem) => {
		if (err) {
			res.status(500)
			return next(err)
		}
		return res.status(201).send(savedInventoryItem)
	})
})

//? UPDATE ONE
inventoryRouter.put('/:inventoryItemId', (req, res, next) => {
	Inventory.findOneAndUpdate(
		{ _id: req.params.inventoryItemId }, //find this one to update
		req.body, //update the object with this data
		{ new: true }, //send back the updated version of the objet please
		(err, updatedItem) => {
			if (err) {
				res.status(500)
				return next(err)
			}
			return res.status(201).send(updatedItem)
		}
	)
})

//? DELETE ONE item
inventoryRouter.delete('/:inventoryItemId', (req, res, next) => {
	Inventory.findOneAndDelete(
		{ _id: req.params.inventoryItemId },
		(err, deletedItem) => {
			if (err) {
				res.status(500)
				return next(err)
			}
			return res
				.status(200)
				.send(
					`Successfully deleted item ${deletedItem.title} from the database`
				)
		}
	)
})

module.exports = inventoryRouter
