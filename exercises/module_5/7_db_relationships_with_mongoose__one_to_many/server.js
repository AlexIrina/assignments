const morgan = require('morgan')
const mongoose = require('mongoose')
const express = require('express')
const app = express()

// middleware
app.use(express.json())

app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/db-methods', () => {
	console.log(`Connected to the database`)
})

//call books router
app.use('/books', require('./routes/bookRouter'))
app.use('/authors', require('./routes/authorRouter'))

app.use((err, req, res, next) => {
	console.log(err)
	return res.send({ errMsg: err.message })
})

app.listen(9000, () => console.log(`App is listening on port 9000`))
