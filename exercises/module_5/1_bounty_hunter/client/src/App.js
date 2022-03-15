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

	// delete bounty
	const deleteBounty = bountyId => {
		axios
			.delete(`/bounties/${bountyId}`)
			.then(res => {
				setBounties(prevBounties =>
					prevBounties.filter(bounty => bounty._id !== bountyId)
				)
			})
			.catch(err => console.log(err))
	}
	// update bounty
	const editBounty = (updates, bountyId) => {
		axios
			.put(`/bounties/${bountyId}`, updates)
			.then(res => {
				setBounties(prevBounties =>
					prevBounties.map(bounty =>
						bounty._id !== bountyId ? bounty : res.data
					)
				)
			})
			.catch(err => console.log(err))
	}

	useEffect(() => {
		getAllBounties()
	}, [])

	return (
		<div className='bounty-container'>
			<AddBountyForm {...bounties} btnText={'Add Bounty'} submit={addBounty} />
			{bounties.map((bounty, key) => (
				<Bounty
					{...bounty}
					key={key}
					deleteBounty={deleteBounty}
					editBounty={editBounty}
				/>
			))}
		</div>
	)
}

export default App
