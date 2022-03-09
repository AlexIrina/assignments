import { useState, useEffect } from 'react'
import axios from 'axios'
import Bounty from './components/Bounty'
function App() {
	const [bounties, setBounties] = useState([])

	const getAllBounties = () => {
		axios
			.get('/bounties')
			.then(res => setBounties(res.data))
			.catch(err => console.log(err))
	}

	useEffect(() => {
		getAllBounties()
	}, [])

	return (
		<div className='App'>
			{bounties.map(bounty => (
				<Bounty {...bounty} key={bounty._id} />
			))}
		</div>
	)
}

export default App
