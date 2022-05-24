import React, { useContext } from 'react'
import TodoForm from './TodoForm.js'
import TodoList from './TodoList.js'
import { UserContext } from '../context/UserProvider'

export default function Profile() {
	const {
		user: { username },
		addTodo,
		todos,
		token,
	} = useContext(UserContext)

	return (
		<div className='profile'>
			{token && <h1>Welcome {username}!</h1>}
			<h3>Add A Todo</h3>

			<TodoForm addTodo={addTodo} />
			<h3>Your Todos</h3>

			<TodoList todos={todos} />
		</div>
	)
}