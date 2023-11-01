const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const db = require('./config')
require('dotenv').config()

const Sequelize = require('sequelize')
const { error } = require('console')

const conn = new Sequelize(db.DB, db.USER, db.PASSWORD, {
    host: db.HOST,
    dialect: db.dialect,
    operationAliases: false,
    pool: {
        max: db.pool.max,
        min: db.pool.min,
        acquire: db.pool.acquire,
        idle: db.pool.idle 
    }
})

// Testing connection to MySQL
conn.authenticate()
    .then(() => console.log(`The connection has been established successfully: ${db.DB}`))
    .catch((error) => console.error(`Connection error: ${error}`))
 

const app = express()

// Routes
app.get('/', (req, res) => {
    res.send('Index page')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

