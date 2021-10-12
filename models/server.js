const Sequelize = require('sequelize')
const sequelize = new Sequelize('containers', 'banco', '123456789', {
    host: "localhost",
    dialect: "mysql",
    define: {
        timestamps: false
    }
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}