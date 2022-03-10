import { useState, useEffect } from 'react'
import axios from 'axios'
import Bounty from './components/Bounty'
import AddBountyForm from './components/AddBountyForm'

function App() {
	const [bounties, setBounties] = useState([])

	// get all bounties
	const getAllBounties = () => {
		axios
			.get('/bounties')
			.then(res => setBounties(res.data))
			.catch(err => console.log(err))
	}

	// post a new bounty
	const addBounty = newBounty => {
		axios
			.post('/bounties', newBounty)
			.then(res => {
				setBounties(prevBounties => [...prevBounties, res.data])
			})
			.catch(err => console.log(err))
	}

	useEffect(() => {
		getAllBounties()
	}, [])

	return (
		<div className='bounty-container'>
			<AddBountyForm addBounty={addBounty} />
			{bounties.map((bounty, key) => (
				<Bounty {...bounty} key={key} />
			))}
		</div>
	)
}

export default App
