// modules
const express = require('express')
const cors = require('cors')
const router = require('./routes/routes')
// config
const PORT = process.env.PORT || 4000 
const app = express()

// middleware
app.use(cors())
app.use(express.json())

// routes
app.get('/', (req, res) => {
    res.status(200).send('Server is running perfectly')
})

app.use('/', router)

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
})