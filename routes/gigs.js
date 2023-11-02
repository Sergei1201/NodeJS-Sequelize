const express = require('express')
const router = express.Router()
const Gig = require('../models/Gig')

// Routes
router.get('/', async (req, res) => {
    try {
        const gigs = await Gig.findAll()
        console.log(gigs)
        res.sendStatus(200)
        
    } catch (error) {
        console.log(error)
        
    }
})
        

module.exports = router