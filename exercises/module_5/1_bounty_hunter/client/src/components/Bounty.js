import React, { useState } from 'react'
import AddBountyForm from './AddBountyForm'
export default function Bounty({
	firstName,
	lastName,
	living,
	bountyAmount,
	type,
	_id,
	deleteBounty,
	editBounty,
}) {
	const [toggleEditForm, setToggleEditForm] = useState(false)
	return (
		<div className='bounty'>
			{!toggleEditForm ? (
				<>
					<h1>REWARD</h1>
					<h2>${bountyAmount} IN GOLD COIN</h2>
					<p>Will be paid for the capture of a {type} known as </p>

					<h1>
						{firstName} {lastName}
					</h1>
					{living ? (
						<p>Alive and on the run from the law</p>
					) : (
						<p>Probably Dead</p>
					)}
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
					</p>

					<h1>DEAD OR ALIVE</h1>
					<button className='delete-btn' onClick={() => deleteBounty(_id)}>
						Delete
					</button>

					<button
						className='edit-btn'
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
						bountyAmount={bountyAmount}
						type={type}
						submit={editBounty}
						_id={_id}
						btnText='Submit the Edit'
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
