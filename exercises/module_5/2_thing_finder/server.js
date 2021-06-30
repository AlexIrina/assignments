const express = require('express')
const app = express()
app.use(express.json())

// Routes
app.use('/champions', require('./routes/ufcChampionsRouter'))

app.listen(9000, () => {
	console.log(`Listening on port 9000`)
})
