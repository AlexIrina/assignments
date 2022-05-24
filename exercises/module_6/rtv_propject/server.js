const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = 9000
const { expressjwt: jwt } = require('express-jwt')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/RedditCloneDB', () =>
	console.log('Connected to the DB')
)

// paths
app.use('/auth', require('./routes/authRouter'))
app.use('/api', jwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))
app.use('/api/post', require('./routes/postRouter'))

// middleware error handler
app.use((err, req, res, next) => {
	if (err.name === 'UnauthorizedError') {
		res.status(err.status)
	}
	return res.send({ errMsg: err.message })
})

app.listen(PORT, () => console.log(`listening on ${PORT}`))
