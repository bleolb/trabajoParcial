;
'use strict'

const express = require('express'),
    bodyParser = require('body-parser')

let app = express()
   usuarioRuta = require('../rutas/usuario.ruta.js')
// filesRuta = require('../rutas/files.rutas')
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.use('/api', usuarioRuta)
// app.use('/api', filesRuta)

module.exports = app