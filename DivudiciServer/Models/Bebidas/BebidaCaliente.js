const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BebidaCalienteSchema = Schema({

    codigo: String,
    nombre: String,
    ingrediente: String,
    precio: String,
    restaurante: String,
    descripcion: String,
    foto: String

});

module.exports = mongoose.model("BebidasCaliente", BebidaCalienteSchema);