const { Sequelize } = require('./server')
const dados = require('./server')

const cadastros = dados.sequelize.define('identificadors', {
    cliente: {
        type: Sequelize.STRING
    },
    numero: {
        type: Sequelize.STRING
    },
    tipo: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.STRING
    },
    categoria: {
        type: Sequelize.STRING
    }
})
   
module.exports = cadastros