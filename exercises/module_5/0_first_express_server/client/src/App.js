import Movie from './components/Movie'
import { useState, useEffect } from 'react'
import axios from 'axios'
import AddMovieForm from './components/AddMovieForm'
export default function App() {
	const [movies, setMovies] = useState([])

	// ? GET all the movies
	const getMovies = () => {
		axios
			.get('/movies')
			.then(res => setMovies(res.data))
			.catch(err => console.log(err))
	}
	//? add movie.POST
	const addMovie = newMovie => {
		axios
			.post('/movies', newMovie)
			// res.data is the new movie user typed in
			.then(res => {
				setMovies(prevMovies => [...prevMovies, res.data])
			})
			.catch(err => console.log(err))
		// check servers terminal..check postman -> movie should be added to the list
	}

	//? remove movie from the database and the UI. DELETE
	const deleteMovie = movieId => {
		axios
			.delete(`/movies/${movieId}`)
			.then(res => {
				setMovies(prevMovies =>
					// return a new array of movies but not including the movie with the id that doesn't match the movieId thats been clicked
					prevMovies.filter(movie => movie._id !== movieId)
				)
			})
			.catch(err => console.log(err))
	}

	// ? update/edit selected movie: PUT
	const editMovie = (updates, movieId) => {
		axios
			// send with it the updatesObj as a request body
			.put(`/movies/${movieId}`, updates)
			// updates the edited movie to the dom
			.then(res => {
				setMovies(
					prevMovies =>
						//generates a new movies array with the same amount of movies but one of the movies has been updated
						//? movie._id !== movieId ? movie -> if id wasn't updated just return the movie as it is
						//? :res.data -> movie._id === movieId ? return the the updated movie thats being updated in its place
						// now i should see the updated movie in the UI and database
						prevMovies.map(movie => (movie._id !== movieId ? movie : res.data))
					// toggle automatically turned off and closed because the page re rendered with the new movie data and the editToggle got reset
				)
			})
			.catch(err => console.log(err))
	}

	useEffect(() => {
		getMovies()
		// on page load
	}, [])
	return (
		<div>
			<div className='movie-container'>
				<AddMovieForm submit={addMovie} btnText='Add Movie' />
				{movies.map((movie, idx) => (
					<Movie
						{...movie}
						key={idx}
						deleteMovie={deleteMovie}
						editMovie={editMovie}
					/>
				))}
			</div>
		</div>
	)
}
