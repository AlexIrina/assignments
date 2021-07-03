const express = require('express')
const app = express()
const port = 9000
app.use(express.json())

app.use('/items', (req, res, next) => {
	console.log('The Middleware was executed')
	next()
})

app.use('/items', (req, res, next) => {
	req.body = { person: { name: 'Alex', age: 23 } }
	next()
})

app.get('/items', (req, res, next) => {
	console.log('GET request received')
	res.send(req.body)
})

app.listen(9000, () => {
	console.log(`This server is listening on port ${port}`)
})
