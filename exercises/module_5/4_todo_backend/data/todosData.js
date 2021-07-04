const { v4: uuidv4 } = require('uuid')
const todos = [
	{
		name: 'Asya',
		description: 'Feed Asya 2X a day',
		imageUrl:
			'https://images.unsplash.com/photo-1599582292739-d37615cc7882?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJpdGlzaCUyMHNob3J0aGFpcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
		completed: false,
		_id: uuidv4(),
	},
	{
		name: 'Trash',
		description: 'Take out the trash',
		imageUrl:
			'https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhc2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
		completed: false,
		_id: uuidv4(),
	},
	{
		name: 'Licence',
		description: 'Renew drivers license',
		imageUrl:
			'https://images.unsplash.com/photo-1473655587843-eda8944061e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJpdmVycyUyMGxpY2Vuc2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
		completed: false,
		_id: uuidv4(),
	},
	{
		name: 'Move',
		description: 'Pack and move out',
		imageUrl:
			'https://images.unsplash.com/photo-1476817273936-370ac1602a49?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dWhhdWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
		completed: false,
		_id: uuidv4(),
	},
]
module.exports = todos
