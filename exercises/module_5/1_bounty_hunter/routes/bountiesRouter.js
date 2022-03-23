const express = require('express')
const bountyRouter = express.Router()
const Bounties = require('../models/bounties')

//? GETS ALL BOUNTIES
bountyRouter.get('/', (req, res, next) => {
	Bounties.find((err, bounties) => {
		if (err) {
			res.status(500)
			return next(err)
		}
		return res.status(200).send(bounties)
	})
})

//? find a specific bounty by its id
bountyRouter.get('/:bountyId', (req, res, next) => {
	Bounties.findById({ _id: req.params.bountyId }, (err, foundBounty) => {
		if (err) {
			res.status(500)
			return next(err)
		}
		return res.status(200).send(foundBounty)
	})
})

//? POST new bounty
bountyRouter.post('/', (req, res, next) => {
	const newBounty = new Bounties(req.body)
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
	Bounties.findOneAndUpdate(
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
	Bounties.findOneAndDelete(
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
