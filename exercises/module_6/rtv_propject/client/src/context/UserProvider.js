import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

export default function UserProvider(props) {
	const initialState = {
		token: localStorage.getItem('token') || '',
		user: JSON.parse(localStorage.getItem('user')) || '',
		posts: [],
		errMsg: '',
	}

	const [userState, setUserState] = useState(initialState)

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

	const getAllUsersPosts = () => {
		userAxios
			.get('/api/post/user')
			.then(res =>
				setUserState(prevState => ({
					...prevState,
					posts: res.data,
				}))
			)
			.catch(err => console.log(err.response.data.errMsg))
	}

	const signUp = credentials => {
		axios
			.post('/auth/signup', credentials)
			.then(res => {
				const { user, token } = res.data
				localStorage.setItem('token', token)
				localStorage.setItem('user', JSON.stringify(user))

				setUserState(prevState => ({
					...prevState,
					user,
					token,
				}))
			})
			.catch(err => handleAuthErr(err.response.data.errMsg))
	}
	const logIn = credentials => {
		axios
			.post('/auth/login', credentials)
			.then(res => {
				const { user, token } = res.data
				localStorage.setItem('token', token)
				localStorage.setItem('user', JSON.stringify(user))
				getAllUsersPosts()
				setUserState(prevState => ({
					...prevState,
					user,
					token,
				}))
			})
			.catch(err => handleAuthErr(err.response.data.errMsg))
	}

	const logOut = () => {
		localStorage.removeItem('token')
		localStorage.removeItem('user')
		setUserState({ user: '', token: '', posts: [] })
	}

	const addPost = newPost => {
		userAxios
			.post('/api/post', newPost)
			.then(res => {
				setUserState(prevState => ({
					...prevState,
					posts: [...prevState.posts, res.data],
				}))
			})
			.catch(err => handleAuthErr(err.response.data.errMsg))
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
