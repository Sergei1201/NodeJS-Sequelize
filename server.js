const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const exphbs = require('express-handlebars')
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
require('dotenv').config()
const db = require('./config')
const app = express()

// Handlebars middleware
app.engine('hbs', exphbs.engine({extname: '.hbs', defaultLayout: 'main',  handlebars: allowInsecurePrototypeAccess(Handlebars)}))
app.set('view engine', 'hbs')

// Body parser (parsing urlencoded & json)
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Test connection to MySQL 
db.authenticate()
    .then(() => console.log(`Connection to the database has been successfully established`))
    .catch(error => console.error(error))


// Static folder
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.get('/', (req, res) => {
    res.render('index', {layout: 'landing'})
})

app.use('/gigs', require('./routes/gigs'))

const PORT = process.env.PORT || 5000


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)) 