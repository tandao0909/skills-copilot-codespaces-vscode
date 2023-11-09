// Create web server
const express = require('express')
const app = express()
const port = 3000

// Create connection to database
const db = require('./db')
db.connect()

// Create router
const router = require('./router')

// Use router
app.use(router)

// Listen port
app.listen(port, () => console.log(`Example app listening on port ${port}!`))