const { v4: uuidv4 } = require('uuid')
const bounties = [
	{
		firstName: 'Luke ',
		lastName: 'Skywalker',
		living: true,
		bounty_amount: 300,
		type: 'Jedi',
		_id: uuidv4(),
	},
	{
		firstName: 'Obi-Wan ',
		lastName: 'Kenobi',
		living: true,
		bounty_amount: 2500,
		type: 'Jedi',
		_id: uuidv4(),
	},
	{
		firstName: 'Darth',
		lastName: 'Vader',
		living: false,
		bounty_amount: 1000000,
		type: 'Sith',
		_id: uuidv4(),
	},
]
module.exports = bounties
