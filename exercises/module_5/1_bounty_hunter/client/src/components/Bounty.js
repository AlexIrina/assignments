import React from 'react'
import AddBountyForm from './AddBountyForm'
export default function Bounty({
	firstName,
	lastName,
	living,
	bountyAmount,
	type,
	_id,
	bountyImg,
}) {
	return (
		<div className='bounty'>
			<h1>REWARD</h1>
			<h2>${bountyAmount} IN GOLD COIN</h2>
			<p>Will be paid for the capture of a {type} known as </p>
			{/* <picture>
				<img src={bountyImg} alt='bounty' />
			</picture> */}

			<h1>
				{firstName} {lastName}
			</h1>
			{living ? <p>Alive and on the run from the law</p> : <p>Probably Dead</p>}
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
				repellat explicabo corporis soluta dicta inventore tenetur minus animi,
				quis aperiam?
			</p>

			<h1>DEAD OR ALIVE</h1>
			<button className='delete-btn'>Delete</button>
		</div>
	)
}
/*
			 <AddBountyForm
					firstName={firstName}
					lastName={lastName}
					living={living}
					bountyAmount={bountyAmount}
					type={type}
				/> 
*/
