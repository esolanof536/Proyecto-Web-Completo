const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BebidaGasSchema = Schema({

    codigo: String,
    nombre: String,
    nacionalidad: String,
    marca: String,
    precio: String,
    restaurante: String,
    descripcion: String,
    cantidad: String,
    foto: String

});

module.exports = mongoose.model("BebidasGaseosas", BebidaGasSchema);