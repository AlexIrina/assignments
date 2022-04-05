import React, { useState } from 'react'

export default function AddBountyForm({
	submit,
	btnText,
	firstName,
	lastName,
	amount,
	jedi,
	_id,
	image,
	living,
}) {
	const initialInputs = {
		firstName: firstName || '',
		lastName: lastName || '',
		amount: amount || '',
		jedi: jedi || '',
		image: image || '',
		living: living || '',
	}

	const [inputs, setInputs] = useState(initialInputs)

	console.log(inputs)

	// // show the inputs on edit
	// useEffect(() => {
	// 	setInputs({ firstName, lastName, amount, image, jedi, living })
	// }, [firstName, lastName, amount, image, jedi, living])

	const handleChange = e => {
		const { name, value } = e.target
		setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
	}

	const handleSubmit = e => {
		e.preventDefault()
		// post request..inputs is the newBounty
		// put response .._id of the movie that needs to be updated and inputs
		submit(inputs, _id)
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
				name='amount'
				value={inputs.amount}
				onChange={handleChange}
				placeholder='enter amount...'
			/>
			<input
				type='text'
				name='jedi'
				value={inputs.jedi}
				onChange={handleChange}
				placeholder='jedi or sith?'
			/>
			<input
				type='text'
				name='image'
				value={inputs.image}
				onChange={handleChange}
				placeholder='enter mugshot'
			/>
			<input
				type='text'
				name='living'
				value={inputs.living}
				onChange={handleChange}
				placeholder='living?'
			/>

			<button className='submit-btn'>{btnText}</button>
		</form>
	)
}
