;
'use strict'
fs = require('fs'),
    path = require('path')
const connetDb = require('../config/db')

usuarios_model = require('../modelos/usuarios.model')


//insertar uno
let insertOne = async(req, res) => {
    await connetDb(),
        nombre = req.body.nombre,
        apellido = req.body.apellido,
        edad = req.body.edad
    usuarios_model.create({ nombre, apellido, edad })
        .then(data => {
            res.status(200).json({
                msg: 'ok',
                data: data,
                transaccion: true
            })
        }).catch(e => {
            res.status(500).json({
                msg: e,
                data: null,
                transaccion: false
            })
        })
}

let getUsuario = async(req, res) => {
    await connetDb()
    usuarios_model.find()
        .then(data => {
            res.status(200).json({
                msg: 'ok',
                data: data,
                transaccion: true
            })
        }).catch(e => {
            res.status(500).json({
                msg: e,
                data: null,
                transaccion: false
            })
        })
}


let insertMany = async(req, res) => {
    await connetDb(),
        data = req.body.data
    usuarios_model.insertMany(data)
        .then(data => {
            res.status(200).json({
                msg: 'ok',
                data: data,
                transaccion: true
            })
        }).catch(e => {
            res.status(500).json({
                msg: e,
                data: null,
                transaccion: false
            })
        })
}


let updateOne = async(req, res) => {
    await connetDb(),
        id = req.params.id,
        data = req.body.data
    usuarios_model.updateOne({ '_id': id }, { $set: data })
        .then((data) => {
            res.status(200).json({
                msg: 'ok',
                data: data,
                transaccion: true
            })
        }).catch(e => {
            res.status(500).json({
                msg: e,
                data: null,
                transaccion: false
            })
        })
}

let getusuario_by_id = async(req, res) => {
    await connetDb(),
        id = req.params.id
        usuarios_model.find({ '_id': id })
        .then(data => {
            res.status(200).json({
                msg: 'ok',
                data: data,
                transaccion: true
            })
            console.log(data)
        }).catch(e => {
            res.status(500).json({
                msg: e,
                data: null,
                transaccion: false
            })
        })
}

let deleteMany = async(req, res) => {
    let db = await connetDb()
    usuarios_model.deleteMany({})
        .then(data => {
            res.status(200).json({
                msg: `${data.deletedCount}`,
                data: data,
                transaccion: true
            })
        }).catch(e => {
            res.status(500).json({
                msg: e,
                data: null,
                transaccion: false
            })
        })
}


let deleteOne = async(req, res) => {
    let db = await connetDb(),
        id = req.params.id
        usuarios_model.deleteOne({ '_id': id })
        .then(data => {
            res.status(200).json({
                msg: `${data.deletedCount}`,
                data: data,
                transaccion: true
            })
        }).catch(e => {
            res.status(500).json({
                msg: e,
                data: null,
                transaccion: false
            })
        })
}

module.exports = {
    insertOne,
    getUsuario,
    insertMany,
    updateOne,
    getusuario_by_id,
    deleteMany,
    deleteOne
   
}