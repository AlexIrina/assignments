import Movie from './components/Movie'
import { useState, useEffect } from 'react'
import axios from 'axios'
import AddMovieForm from './components/AddMovieForm'
export default function App() {
	// useState to save the movies
	const [movies, setMovies] = useState([])

	const getMovies = async () => {
		axios
			.get('/movies')
			.then(res => setMovies(res.data))
			.catch(err => console.log(err))
	}
	// for the post request
	const addMovie = newMovie => {
		axios
			.post('/movies', newMovie)
			// res.data is the new movie user typed in
			.then(res => setMovies(prevMovies => [...prevMovies, res.data]))
			.catch(err => console.log(err))
		// check servers terminal..check postman -> movie should be added to the list
	}

	useEffect(() => {
		getMovies()
	}, [])
	return (
		<div className='movie-container'>
			<AddMovieForm addMovie={addMovie} />
			{movies.map((movie, idx) => (
				<Movie key={idx} {...movie} />
			))}
		</div>
	)
}
