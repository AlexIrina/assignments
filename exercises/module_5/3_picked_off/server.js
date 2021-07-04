const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid')
const port = 9000
app.use(express.json())

app.use('/person', (req, res, next) => {
	console.log('The Middleware was executed')
	next()
})

app.use('/person', (req, res, next) => {
	req.body = { person: { name: 'Alex', age: 23, _id: uuidv4() } }
	next()
})

app.get('/person', (req, res, next) => {
	console.log('GET request received')
	res.send(req.body)
})

app.listen(9000, () => {
	console.log(`This server is listening on port ${port}`)
})
