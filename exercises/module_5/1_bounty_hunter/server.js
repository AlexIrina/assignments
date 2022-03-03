const express = require('express')
const app = express()
app.use(express.json())
const morgan = require('morgan')
app.use(morgan('dev'))

app.use('/bounties', require('./routes/bountiesRouter'))

app.listen(9000, () => {
	console.log('The server is running on local Port 9000!')
})
