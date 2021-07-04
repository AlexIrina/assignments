const express = require('express')
const app = express()
const port = 9000
// middleware
app.use(express.json())

// connection to todosRouter
app.use('/todos', require('./routes/todosRouter'))

app.listen(port, () => {
	console.log(`Server is listening on PORT ${port}`)
})

