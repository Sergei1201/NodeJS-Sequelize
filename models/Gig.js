const {DataTypes} = require('sequelize')
const dbConn = require('../config')

// Gig Model
const Gig = dbConn.define('gig', {
    title: {
        type: DataTypes.STRING
    },
    technologies: {
        type: DataTypes.STRING
    },
    budget: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    contact_email: {
        type: DataTypes.STRING
    },
},
{   // Add a table name so that sequelize does not append 's' prefix its name automatically
    tableName: 'gig'
})

module.exports = Gig