import React, { useState } from 'react'
import AddBountyForm from './AddBountyForm'
export default function Bounty({
	firstName,
	lastName,
	living,
	bountyAmount,
	type,
	_id,
	bountyImg,
	deleteBounty,
	editBounty,
}) {
	const [editForm, setEditForm] = useState(false)
	return (
		<>
			{!editForm ? (
				<div className='bounty'>
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
					<button className='edit-btn' onClick={() => editBounty()}>
						Edit Bounty
					</button>
				</div>
			) : (
				<AddBountyForm
					firstName={firstName}
					lastName={lastName}
					living={living}
					bountyAmount={bountyAmount}
					type={type}
				/>
			)}
		</>
	)
}
