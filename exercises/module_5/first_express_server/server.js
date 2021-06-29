//? Servers listen to requests from the Client and set up a response
const express = require('express')
const app = express()

// TODO: send back an array of users
const users = [
	{ name: 'Frodo', age: 50 },
	{ name: 'Bilbo', age: 52 },
	{ name: 'Gandalf', age: 500 },
]

app.get('/users', (req, res) => {
	res.send(users)
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
