;
'use strict'
const express = require('express')
multiParty = require('connect-multiparty')
let api = express.Router(),
usuarioControl = require('../controler/usuario.controller')

api.post('/insert1',usuarioControl.insertOne)
api.get('/get_all',usuarioControl.getUsuario)
api.post('/insert_many', usuarioControl.insertMany)
api.put('/update1/:id', usuarioControl.updateOne)
api.get('/get_by_id/:id', usuarioControl.getusuario_by_id)
api.delete('/delete_all', usuarioControl.deleteMany)
api.delete('/delete/:id', usuarioControl.deleteOne)

module.exports = api