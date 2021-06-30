//? URL Queries -> another way to send information through a URL -> more specific -> Example: find movies by genre
//? Query string - (typically to filter results)
//  * Starts with the "?"
//  * Built of key=value pairs
//  * Multiple queries separated by the "&"
// how to do this
// ! 1 create a new get request to (/search/genre)
// ! 2 inside postman send a GET request to movies/search/genre?genre=action

//? specific request to genre
movieRouter.get('/search/genre', (req, res) => {
	const genre = req.query.genre
	const genreSpecificMovies = movies.filter(movie => movie.genre === genre)
	res.send(genreSpecificMovies)
})
