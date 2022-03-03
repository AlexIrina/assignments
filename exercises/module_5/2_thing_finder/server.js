const express = require('express')
const app = express()
app.use(express.json())

app.use('/countries', require('./routes/countriesRouter'))

app.listen(9000, () => {
	console.log('The server is running on local Port 9000')
})
