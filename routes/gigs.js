const express = require('express')
const router = express.Router()
const Gig = require('../models/Gig')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

// Routes
// Get all gigs from the database
router.get('/', async (req, res) => {
    try {
        const gigs = await Gig.findAll()
        res.render('gigs', {
            gigs
        })
    } catch (error) {
        console.error(error)     
    }
    
})
// Display add gig form
router.get('/add', (req, res) => {
    res.render('add')
})

// Create a gig
router.post('/add', async(req, res) => {
    try {
        let {title, technologies, budget, description, contact_email} = req.body
        // Initialize an array of errors
        let errors = []
        if (!title) {
            errors.push({text: 'Please add a title'})
        }
        if (!technologies) {
            errors.push({text: 'Please add technologies'})
        }
        if (!description) {
            errors.push({text: 'Please add a description'})
        }
        if (!contact_email) {
            errors.push({text: 'Please add a contact email'})
        }
        // If the array of errors is not empty, rerender the add form and display the mistakes to the user along with fields
        if (errors.length > 0) {
            res.render('add', {
                errors,
                title,
                technologies,
                budget,
                description,
                contact_email
            })
        } else {
            if (!budget) {
                budget = 'Unknown'
            } else {
                budget = `$${budget}`
            }
            technologies = technologies.toLowerCase().replace(/, /g, ',')

            await Gig.create({
                title,
                technologies,
                budget,
                description,
                contact_email
            })
            res.redirect('/gigs')
        }
    } catch (error) {
        console.error(error)
    }
    
})

// Search for a gig
router.get('/search', async (req, res) => {
    try {
        // Catching user's input from a search bar
        let {term} = req.query
        
        // To lowercase
        term = term.toLowerCase()

        // Find gigs where technologies in the database match the searched element using LIKE operator of the Sequelize ORM
        const gigs = await Gig.findAll({where: {technologies: {[Op.like]: '%' + term + '%'}}})

        // Pass the result to the gig template render gigs
        res.render('gigs', {
            gigs
        })
    } catch (error) {
        console.error(error)
        
    }
})

module.exports = router