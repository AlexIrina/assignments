const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

// ? Connect to DB
mongoose.connect('mongodb://localhost:27017/crudstoredb', () => {
	console.log(`Connected to the DB successfully`)
})

// routes
app.use('/inventory', require('./routes/inventoryRouter'))

// error handling Middleware - anything happens in my Routes Middleware will catch it and throw an error so that the server doesn't crash
app.use((err, req, res, next) => {
	console.log(err)
	return res.send({ errorMessage: err.message })
})

app.listen(9000, () => {
	console.log(`Server is running on  port 9000`)
})
