const mongoose = require('mongoose');

let pinturasSchema = new mongoose.Schema({
    titulo: String,
    autor: String,
    anio_creacion: Number,
    descripcion: String,
    imagen: String
})

let Pintura = mongoose.model('pinturas', pinturasSchema);
module.exports = Pintura;