//? Servers listen to requests from the Client and set up a response
const express = require('express')
// const usersArray = require('../vs_lessons/01_basics')
const moviesArray = require('../vs_lessons/02_request_body_basics')
//?my server
const app = express()
app.use(express.json()) // looks for a request body, and turns it into 'req.body'

// Routes
app.get('/movies', (req, res) => {
	res.send(moviesArray)
})
// adding to the movies object
app.post('/movies', (req, res) => {
	// this is the object the user sent in the POST request
	const newMovie = req.body
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
