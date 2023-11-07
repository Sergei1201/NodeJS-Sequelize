const {DataTypes, Sequelize} = require('sequelize')
const db = require('../config')

// Gig Model
const Gig = db.define('gig', {
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
       }
}, 
    
{  
    // Add a table name so that sequelize does not add 's' prefix to its name automatically to avoid name collisions 
    tableName: 'gig'
}
)

module.exports = Gig

