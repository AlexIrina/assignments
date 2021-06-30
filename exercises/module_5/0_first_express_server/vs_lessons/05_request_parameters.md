# URL PARAMETERS -> is a placeholder for data that the frontend can send to the backend

# Parts of a URL

- Base -> https://amazon.com
- Endpoint -> https://amazon.com/images
- Parameters -> https://amazon.com/images/1233123sfv
- Query

# Parameters (req.params) - GET one

movieRouter.post('/:movieId', (req, res) =>{})
//! 1. go to postman and create a GET request to movies/HEREISMYPARAM
//! 2. CLG the console.log(req.params.movieId) in the body of the movieRouter.get() {} to see the parameter you've added in postman
//! 3. .find() through the \_id's in the movies array and send back the movieId that matches the one i am asking for
//! 4. res.send(the found movie)
//! 5. in postman use a GET request to access the id of the movie you are looking for
you will get an object of the single movie you are requesting
