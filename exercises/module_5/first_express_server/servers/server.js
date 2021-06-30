const express = require('express')
const { v4: uuidv4 } = require('uuid')

const moviesArray = require('../vs_lessons/02_request_body_basics')

const app = express()
app.use(express.json()) // looks for a request body, and turns it into 'req.body'

app.get('/movies', (req, res) => {
	res.send(moviesArray)
})

app.post('/movies', (req, res) => {
	// this is the object the user sent in the POST request
	const newMovie = req.body
	newMovie.id = uuidv4()
	moviesArray.push(newMovie)
	res.send(`Successfully added ${newMovie.title} to  the database!`)
})

// 1: PORT     2. Callback function
app.listen(9000, () => {
	console.log('The server is running on local Port 9000')
})
//? Route 101
// 1. Endpoint (mount path)
// 2. Callback function with the request and response
//! Request object is any CRUD request coming from the client
//! Response object is the servers object. Response is what the server will configure and send back to the client
// ? telling the server to listen on Port 9000/user
// todo: Practice in Postman
