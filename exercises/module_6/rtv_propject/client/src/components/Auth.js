import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm'
import { UserContext } from '../context/UserProvider.js'

const initInputs = { username: '', password: '' }

export default function Auth() {
	const { signUp, logIn, errMsg, resetAuthErr } = useContext(UserContext)

	const [inputs, setInputs] = useState(initInputs)
	const [toggle, setToggle] = useState(false)

	const handleChange = e => {
		const { name, value } = e.target
		setInputs(prevInputs => ({
			...prevInputs,
			[name]: value,
		}))
	}

	const handleSignup = e => {
		e.preventDefault()
		signUp(inputs)
	}

	const handleLogin = e => {
		e.preventDefault()
		logIn(inputs)
	}
	const toggleForm = () => {
		setToggle(prev => !prev)
		resetAuthErr()
	}

	return (
		<div className='auth-container'>
			<h1>Rock The Vote </h1>
			{!toggle ? (
				<>
					<AuthForm
						handleChange={handleChange}
						handleSubmit={handleSignup}
						inputs={inputs}
						btnText='Sign up'
						errMsg={errMsg}
					/>
					<p onClick={toggleForm}>Already a member?</p>
				</>
			) : (
				<>
					<AuthForm
						handleChange={handleChange}
						handleSubmit={handleLogin}
						inputs={inputs}
						btnText='Login'
						errMsg={errMsg}
					/>
					<p onClick={toggleForm}>Not a member?</p>
				</>
			)}
		</div>
	)
}
