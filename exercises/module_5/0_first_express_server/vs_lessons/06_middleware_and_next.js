//? Middleware -> app.use(express.json()) -> until it hits app.send()
//? -  What is it?
// * app.use() takes 2 arguments
// * 1. (optional) - Mount path (endpoint) -> if the first argument is empty it will fire on every request
// * 2. Callback function - receives the request, response objects, also the "next" function
//! - What is the "next" function ?
//! - "next" tells express to go look for the next middleware to run -> next app.use() in line
// ! every route you write has access to "next"
// example
app.use('/items', (req, res, next) => {
	console.log('The Middleware was executed')
	next()
})
// next in line
app.use('/items', (req, res, next) => {
	req.body = { name: 'Alex' }
	next()
})

app.get('/items', (req, res, next) => {
	console.log('GET request received') //!-> this will get consoled
	res.send(req.body) //!-> {name: 'Alex'} will get received in Postman
})
