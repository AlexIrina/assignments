const express = require('express')
const app = express()
app.use(express.json()) // looks for a request body, and turns it into 'req.body'

// Routes
app.use('/movies', require('../routes/movieRouter'))
app.use('/tvShows', require('../routes/tvShowsRouter'))

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
