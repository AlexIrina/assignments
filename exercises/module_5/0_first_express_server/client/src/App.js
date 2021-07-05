import Movie from './components/Movie'
import { useState, useEffect } from 'react'
import axios from 'axios'
import AddMovieForm from './components/AddMovieForm'
export default function App() {
	const [movies, setMovies] = useState([])

	// ? GET all the movies
	const getMovies = async () => {
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
			.then(res => setMovies(prevMovies => [...prevMovies, res.data]))
			.catch(err => console.log(err))
		// check servers terminal..check postman -> movie should be added to the list
	}

	//? remove movie from the database and the UI. DELETE
	const deleteMovie = movieId => {
		axios
			.delete(`/movies/${movieId}`)
			.then(res =>
				setMovies(prevMovies =>
					prevMovies.filter(movie => movie._id !== movieId)
				)
			)
			.catch(err => console.log(err))
	}

	useEffect(() => {
		getMovies()
		// on page load
	}, [])
	return (
		<div className='movie-container'>
			<AddMovieForm addMovie={addMovie} />
			{movies.map((movie, idx) => (
				<Movie key={idx} {...movie} deleteMovie={deleteMovie} />
			))}
		</div>
	)
}
