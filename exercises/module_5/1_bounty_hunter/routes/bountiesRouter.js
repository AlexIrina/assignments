const express = require('express')
const { v4: uuidv4 } = require('uuid')
const bountyRouter = express.Router()
const bounties = require('../data/bountiesData')
// GETS ALL BOUNTIES
bountyRouter.get('/', (req, res) => {
	res.send(bounties)
})

// get single bounty
bountyRouter.get('/:bountyId', (req, res) => {
	const bountyId = req.params.bountyId
	const foundBounty = bounties.find(bounty => bounty._id === bountyId)
	res.send(foundBounty)
})

// POST - add a new bounty to the data
bountyRouter.post('/', (req, res) => {
	const newBounty = req.body
	newBounty.id = uuidv4()
	bounties.push(newBounty)
	res.send(newBounty)
})

// Update Bounty
bountyRouter.put('/:bountyId', (req, res) => {
	const bountyId = req.params.bountyId
	const updateObj = req.body
	const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
	const updatedBounty = Object.assign(bounties[bountyIndex], updateObj)
	res.send(updatedBounty)
})

// DELETE BOUNTY
bountyRouter.delete('/:bountyId', (req, res) => {
	const bountyId = req.params.bountyId
	const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
	bounties.splice(bountyIndex, 1)
	res.send(`Successfully deleted ${req.body.firstName} ${req.body.lastName}`)
})

module.exports = bountyRouter
