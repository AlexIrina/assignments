const movies = [
	{ title: 'die hard', genre: 'action' },
	{ title: 'star wars', genre: 'fantasy' },
	{ title: 'lion king', genre: 'fantasy' },
	{ title: 'friday the 13th', genre: 'horror' },
]

// adding to the movies object
// app.post('/movies', (req, res) => {
// const newMovie = req.body
// movies.push(newMovie)
// })

module.exports = movies
//todo: learned how to add a new movie to the array of objects

//! 1. go to Postman
//! 2. change the request to POST
//! 3. Body -> raw -> JSON
// Below is the send window -> what im sending in the request -> //!4. this is where i craft the new object
// below the send window is the response window
//! 4. create a middleware that fires on every request that comes in
//-> app.use(express.json()) -> looks for a request body with the new request that i am sending from 3, and turns it into 'req.body' (if it finds it)
//! 5. send the POST request in Postman
//! 6. in the app.post request test the req.body to see if the request is coming in
//! 7. in the app.post push the movie to the movies array -> the new movie should be added to the array
// ! 8. add a message to show the movie was added -> res.send(`Successfully added ${newMovie.title} to the database`)
