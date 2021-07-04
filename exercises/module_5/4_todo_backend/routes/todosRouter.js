const express = require('express')
const todosRouter = express.Router()
const { v4: uuidv4 } = require('uuid')
const todos = require('../data/todosData')

// the entire list of todos
todosRouter.get('/', (req, res) => {
	res.send(todos)
})

//retrieve a single todo
todosRouter.get('/:todoId', (req, res) => {
	const todoId = req.params.todoId
	const foundTodo = todos.find(todo => todo._id === todoId)
	res.send(foundTodo)
})
// allows new todo items to be posted to the array,
todosRouter.post('/', (req, res) => {
	const newTodo = req.body
	newTodo._id = uuidv4()
	todos.push(newTodo)
	res.send(`${newTodo.description} added to the todo list`)
})
// allows the user to update a todo by its _id,
todosRouter.put('/:todoId', (req, res) => {
	const todoId = req.params.todoId
	const updateObj = req.body
	const todosIndex = todos.findIndex(todo => todo._id === todoId)
	const updatedTodo = Object.assign(todos[todosIndex], updateObj)
	res.send(`${updateObj.description} has been updated`)
	res.send(updatedTodo)
})
// allows the user to delete a todo by its _id,
todosRouter.delete('/:todoId', (req, res) => {
	const todoId = req.params.todoId
	const todosIndex = todos.findIndex(todo => todo._id === todoId)
	todos.splice(todosIndex, 1)
	res.send(`Todo has been deleted`)
})
module.exports = todosRouter
