const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const colors = require('colors')
const db = require('./config/db')

//* Setup
db()
app.listen(PORT, () => console.log(`Server running on port ${PORT}!`.white.bgBlue.bold))

//* Home endpoint
app.get('/', (req, res) => res.send('Thullo Server'))

//* Routing 