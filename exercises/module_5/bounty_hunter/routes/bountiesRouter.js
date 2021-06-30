const express = require('express')
const { v4: uuidv4 } = require('uuid')
const bountyRouter = express.Router()
const bounties = require('../data/bountiesData')

bountyRouter
	.route('/')
	.get((req, res) => {
		res.send(bounties)
	})
	.post((req, res) => {
		const newBounty = req.body
		newBounty.id = uuidv4()
		bounties.push(newBounty)
		res.send(`Successfully added ${newBounty.firstName} to  the database!`)
	})
	.put()
	.delete()

module.exports = bountyRouter
