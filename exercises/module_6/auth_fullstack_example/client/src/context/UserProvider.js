import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

const UserProvider = props => {
	const initialState = {
		token: localStorage.getItem('token') || '',
		user: JSON.parse(localStorage.getItem('user')) || {},
		todos: [],
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

	const userAxios = axios.create()
	//? builds token into the todo
	userAxios.interceptors.request.use(config => {
		const token = localStorage.getItem('token')
		config.headers.Authorization = `Bearer ${token}`
		return config
	})

	const signup = credentials => {
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

	const login = credentials => {
		axios
			.post('/auth/login', credentials)
			.then(res => {
				const { user, token } = res.data
				localStorage.setItem('token', token)
				localStorage.setItem('user', JSON.stringify(user))
				getAllUserTodos()
				setUserState(prevState => ({
					...prevState,
					user,
					token,
				}))
			})
			.catch(err => handleAuthErr(err.response.data.errMsg))
	}

	const logout = () => {
		localStorage.removeItem('user')
		localStorage.removeItem('token')
		setUserState({
			user: {},
			token: '',
			todos: [],
		})
	}

	const getAllUserTodos = () => {
		userAxios
			.get('/api/todo/user')
			.then(res =>
				setUserState(prevState => ({
					...prevState,
					todos: res.data,
				}))
			)
			.catch(err => console.log(err.response.data.errMsg))
	}

	const addTodo = newTodo => {
		userAxios
			.post('/api/todo', newTodo)
			.then(res => {
				setUserState(prevState => ({
					...prevState,
					todos: [...prevState.todos, res.data],
				}))
			})
			.catch(err => handleAuthErr(err.response.data.errMsg))
	}

	return (
		<UserContext.Provider
			value={{
				...userState,
				signup,
				login,
				logout,
				addTodo,
				handleAuthErr,
				resetAuthErr,
			}}
		>
			{props.children}
		</UserContext.Provider>
	)
}

export default UserProvider
