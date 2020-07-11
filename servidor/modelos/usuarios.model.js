;
'use strict'
const mongoose = require('mongoose');
const { Schema } = mongoose;

const usuario_model = new Schema({
    nombre: { type: String },
    apellido: { type: String },
    edad: { type: Number },
});

module.exports = mongoose.model('Usuarios1', usuario_model);