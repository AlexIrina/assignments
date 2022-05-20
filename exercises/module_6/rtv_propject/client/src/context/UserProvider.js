import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

export const UserProvider = props => {
	const initialState = {
		token: localStorage.getItem('token') || '',
		user: JSON.parse(localStorage.getItem('user')) || '',
		posts: [],
		errMsg: '',
	}

	const [userState, setUserState] = useState(initialState)

	const logOut = () => {
		localStorage.removeItem('token')
		localStorage.removeItem('user')
		setUserState({ user: '', token: '', posts: [] })
	}

	const signUp = credentials => {}
	const logIn = credentials => {}

	const getAllUsersPosts = () => {}
	const addPost = () => {}

	const handleAuthErr = errMsg => {
		setUserState(prevState => ({
			...prevState,
			errMsg,
		}))
	}
	const resetAuthErr = errMsg => {
		setUserState(prevState => ({
			...prevState,
			errMsg: '',
		}))
	}

	const userAxios = () => axios.create()
	//? builds token into the post
	userAxios.interceptors.request.use(config => {
		const token = localStorage.getItem('token')
		config.headers.Authorization = `Bearer ${token}`
		return config
	})

	return (
		<UserContext.Provider
			value={{
				...userState,
				signUp,
				logIn,
				logOut,
				getAllUsersPosts,
				addPost,
				handleAuthErr,
				resetAuthErr,
				userAxios,
			}}
		>
			{props.children}
		</UserContext.Provider>
	)
}
