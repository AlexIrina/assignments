const express = require('express')
const todosRouter = express.Router()
const { v4: uuidv4 } = require('uuid')
const todosData = require('../data/todosData')

// the entire list of todos
todosRouter.get('/', (req, res) => {
	res.send(todosData)
})
// retrieve a single todo
todosRouter.get('/:todoId', (req, res) => {
	const todoId = req.params.todoId
	const foundTodo = todosData.find(todo => todo._id === todoId)
	res.send(foundTodo)
})

// allows new todo items to be posted to the array,
todosRouter.post('/', (req, res) => {
	const newTodo = req.body
	newTodo._id = uuidv4()
	todosData.push(newTodo)
	res.send(`${newTodo.description} has been added`)
})

// allows the user to update a todo by its _id,
todosRouter.put('/:todoId', (req, res) => {
	const todoId = req.params.todoId
	const updateObj = req.body
	const todosIndex = todosData.findIndex(todo => todo._id === todoId)
	const updatedTodo = Object.assign(todosData[todosIndex], updateObj)
	res.send(`${updateObj.description} has been updated`)
	res.send(updatedTodo)
})

// allows the user to delete a todo by its _id,
todosRouter.delete('/:todoId', (req, res) => {
	const todoId = req.params.todoId
	const todoIndex = todosData.findIndex(todo => todo._id === todoId)
	todosData.splice(todoIndex, 1)
	res.send(`Todo has been removed`)
})

module.exports = todosRouter
