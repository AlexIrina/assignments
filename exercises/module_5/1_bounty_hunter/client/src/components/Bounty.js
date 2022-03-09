import React from 'react'

export default function Bounty({
	firstName,
	lastName,
	living,
	bounty_amount,
	type,
	_id,
}) {
	return (
		<div>
			<h1>${bounty_amount} REWARD</h1>
			<h2>For the capture dead or alive of a {type} known as </h2>
			<h1>
				{firstName} {lastName}
			</h1>
			<h2>Personal Info</h2>
			{living ? <h3>Still Alive</h3> : <h3>Probably Dead</h3>}
			<h1>DEAD OR ALIVE</h1>
		</div>
	)
}
