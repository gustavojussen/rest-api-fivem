const express = require('express');
const app = express()

const morgan = require('morgan')
const routerBeta = require('./routes/beta')
app.use(morgan('dev'))


app.use('/beta',routerBeta)

// Nao encontrando o arquivo ROUTES
app.use((req,res,next) => {
    const erro = new Error('Nao encontrado')
    erro.status = 404
    next(erro)
})


app.use((error, req,res,next) => {
    res.status(error.status || 500)
    return res.send({
        erro: {
            message: error.message
        }
    })
})

module.exports = app