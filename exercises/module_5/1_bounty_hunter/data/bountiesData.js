const { v4: uuidv4 } = require('uuid')

const bounties = [
	{
		firstName: 'Luke ',
		lastName: 'Skywalker',
		living: true,
		bountyAmount: 300,
		type: 'Jedi',
		bountyImg:
			'https://www.pngall.com/wp-content/uploads/9/Darth-Vader-PNG-File-Download-Free.png',
		_id: uuidv4(),
	},
	{
		firstName: 'Obi-Wan ',
		lastName: 'Kenobi',
		living: true,
		bountyAmount: 2500,
		type: 'Jedi',
		bountyImg:
			'https://purepng.com/public/uploads/large/purepng.com-vladimir-putinvladimir-putinvladimirputinvladimir-vladimirovich-putinpresident-of-russia-1701528083021cng1o.png',
		_id: uuidv4(),
	},
	{
		firstName: 'Darth',
		lastName: 'Vader',
		living: false,
		bountyAmount: 1000000,
		type: 'Sith',
		bountyImg:
			'https://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Xi-Jinping-PNG-Image.png',
		_id: uuidv4(),
	},
]
module.exports = bounties
