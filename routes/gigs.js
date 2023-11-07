const express = require('express')
const router = express.Router()
const Gig = require('../models/Gig')

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

// Create a gig
router.get('/add', async(req, res) => {
    try {
        const data = {
            title: 'Looking for a backend developer',
            technologies: 'nodejs, javascript, react',
            budget: '5000$',
            description: 'Test descriptioin',
            contact_email: 'test@gmail.com'
        }
        let {title, technologies, budget, description, contact_email} = data
        await Gig.create({
            title,
            technologies,
            budget,
            description,
            contact_email
        })
        res.sendStatus(201).redirect('/gigs')
        
    } catch (error) {
        console.error(error)
    }
    
})


module.exports = router