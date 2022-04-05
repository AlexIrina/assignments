import { useState } from 'react'
import AddBountyForm from './AddBountyForm'

export default function Bounty({
	firstName,
	lastName,
	living,
	amount,
	jedi,
	_id,
	deleteBounty,
	editBounty,
	image,
}) {
	const [toggleEditForm, setToggleEditForm] = useState(false)

	const handleSubmit = (inputs, _id) => {
		setToggleEditForm(false)
		editBounty(inputs, _id)
	}

	return (
		<div className='bounty'>
			{!toggleEditForm ? (
				<>
					<h1>REWARD</h1>
					<h2>${amount} IN GOLD COIN</h2>
					<p>Will be paid for the capture of a {jedi} known as </p>

					<h1>
						{firstName} {lastName}
					</h1>
					<img
						src={image}
						alt='something did work'
						style={{ height: '200px' }}
					/>

					{living ? (
						<p>{firstName} is ALIVE and on the run from the law</p>
					) : (
						<p>{firstName} is Already Dead</p>
					)}

					<h1>DEAD OR ALIVE</h1>

					<button
						className='btn delete-btn'
						onClick={() => deleteBounty(_id)}
						style={{ margin: '0 1rem' }}
					>
						Delete
					</button>

					<button
						className='btn edit-btn'
						onClick={() => setToggleEditForm(prev => !prev)}
					>
						Edit
					</button>
				</>
			) : (
				<>
					<AddBountyForm
						firstName={firstName}
						lastName={lastName}
						living={living}
						amount={amount}
						jedi={jedi}
						submit={handleSubmit}
						_id={_id}
						btnText='Submit the Edit'
						image={image}
					/>
					<button
						className='edit-btn'
						onClick={() => setToggleEditForm(prev => !prev)}
					>
						Close
					</button>
				</>
			)}
		</div>
	)
}
