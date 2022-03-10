import React, { useState } from 'react'

export default function AddBountyForm({ addBounty, btnText }) {
	const initialInputs = {
		firstName: '',
		lastName: '',
		bountyAmount: '',
		type: '',
	}
	const [inputs, setInputs] = useState(initialInputs)

	const handleChange = e => {
		const { name, value } = e.target
		setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
	}

	const handleSubmit = e => {
		e.preventDefault()
		// post request..inputs is the newBounty
		addBounty(inputs)
		setInputs(initialInputs)
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				name='firstName'
				value={inputs.firstName}
				onChange={handleChange}
				placeholder='enter firstName...'
			/>
			<input
				type='text'
				name='lastName'
				value={inputs.lastName}
				onChange={handleChange}
				placeholder='enter lastName...'
			/>
			<input
				type='number'
				name='bountyAmount'
				value={inputs.bountyAmount}
				onChange={handleChange}
				placeholder='enter bountyAmount...'
			/>
			<input
				type='text'
				name='type'
				value={inputs.type}
				onChange={handleChange}
				placeholder='Jedi or Sith...'
			/>

			<button className='submit-btn'>{btnText}</button>
		</form>
	)
}
