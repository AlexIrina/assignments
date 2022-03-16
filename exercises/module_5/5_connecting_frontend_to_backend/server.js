const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

// Middleware (for every request) fires on every request that comes in
app.use(express.json()) // looks for a request body, and parses it from json to javascript into 'req.body'

// server use morgan in its dev environment
app.use(morgan('dev')) //! logs requests to the console

// ? Connect to DB
mongoose.connect('mongodb://localhost:27017/moviesdb', () => {
	console.log(`Connected to the DB successfully`)
})

//! Routes
// app.use() is ANY CRUD request to the first parameter
app.use('/movies', require('./routes/movieRouter'))
app.use('/tvShows', require('./routes/tvShowsRouter'))

// error handling Middleware - anything happens in my Routes Middleware will catch it and throw an error so that the server doesn't crash
app.use((err, req, res, next) => {
	console.log(err)
	return res.send({ errorMessage: err.message })
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
