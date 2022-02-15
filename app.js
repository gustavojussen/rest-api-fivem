const express = require('express');
const app = express()

const morgan = require('morgan')
const Routes = require('./routes/api')

app.use(morgan('dev'))


app.use('/api',Routes)


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