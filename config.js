const Sequelize = require('sequelize')

// DB stuff
const db = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '12345',
    DB: 'codegig',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
// MySQL connection
const dbConn = new Sequelize(db.DB, db.USER, db.PASSWORD, {
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

module.exports = dbConn