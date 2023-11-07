const {Sequelize} = require('sequelize')

// DB Config
const dbConfig = {
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

// Create a new instance of sequelize to connect to MySQL
const db = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operationsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
})

module.exports = db
