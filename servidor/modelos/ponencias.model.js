;
'use strict'
const mongoose = require('mongoose');
const { Schema } = mongoose;

const temas_modelo = new Schema({
    titulo: { type: String },
    area: { type: String },
    resumen: { type: String },
 });

module.exports = mongoose.model('temas', temas_modelo);