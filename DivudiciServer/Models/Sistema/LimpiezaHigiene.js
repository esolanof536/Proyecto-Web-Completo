const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LimpiezaHigieneSchema = Schema({

    codigo: String,
    nombre: String,
    cantidad: String,
    tipo: String,
    restaurante: String,
    marca: String,
    cantidadMedida: String,
    descripcion: String,
    unidadMedida: String

});

module.exports = mongoose.model("LimpiezaHigiene", LimpiezaHigieneSchema);