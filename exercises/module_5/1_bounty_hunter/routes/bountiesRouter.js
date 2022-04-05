const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty')

//? GETS ALL BOUNTIES
bountyRouter.get('/', (req, res, next) => {
	Bounty.find((err, bounties) => {
		if (err) {
			res.status(500)
			return next(err)
		}
		return res.status(200).send(bounties)
	})
})

//? find a specific bounty by its id
bountyRouter.get('/:bountyId', (req, res, next) => {
	Bounty.find({ _id: req.params.bountyId }, (err, foundBounty) => {
		if (err) {
			res.status(500)
			return next(err)
		}
		return res.status(201).send(foundBounty)
	})
})

//? POST new bounty
bountyRouter.post('/', (req, res, next) => {
	const newBounty = new Bounty(req.body)
	newBounty.save((err, savedBounty) => {
		if (err) {
			res.status(500)
			return next(err)
		}
		return res.status(201).send(savedBounty)
	})
})

//? UPDATE ONE
bountyRouter.put('/:bountyId', (req, res, next) => {
	Bounty.findOneAndUpdate(
		{ _id: req.params.bountyId }, //find this one to update
		req.body, //update the object with this data
		{ new: true }, //send back the updated version of the objet please
		(err, updatedBounty) => {
			if (err) {
				res.status(500)
				return next(err)
			}
			return res.status(201).send(updatedBounty)
		}
	)
})

//? DELETE ONE item
bountyRouter.delete('/:bountyId', (req, res, next) => {
	Bounty.findOneAndDelete(
		{ _id: req.params.bountyId },
		(err, deletedBounty) => {
			if (err) {
				res.status(500)
				return next(err)
			}
			return res
				.status(200)
				.send(
					`Successfully deleted bounty ${deletedBounty.title} from the database`
				)
		}
	)
})

module.exports = bountyRouter
