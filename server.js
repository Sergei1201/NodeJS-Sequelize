const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
require('dotenv').config()
const dbConn = require('./config')


const { error } = require('console')


// Testing connection to MySQL
dbConn.authenticate()
    .then(() => console.log(`The connection has been established successfully`))
    .catch((error) => console.error(`Connection error: ${error}`))
 

const app = express()

// Routes
app.get('/', (req, res) => {
    res.send('Index page')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

