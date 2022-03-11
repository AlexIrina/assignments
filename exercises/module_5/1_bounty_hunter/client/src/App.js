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
	const submitBounty = newBounty => {
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
	const editBounty = (bountyId, bountyObj) => {

	}

	useEffect(() => {
		getAllBounties()
	}, [])

	return (
		<div className='bounty-container'>
			<AddBountyForm
				submitBounty={submitBounty}
				{...bounties}
				btnText={'Add Bounty'}
			/>
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
