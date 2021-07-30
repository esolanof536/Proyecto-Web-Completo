const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BebidaHeladaSchema = Schema({

    codigo: String,
    nombre: String,
    ingrediente: String,
    precio: String,
    restaurante: String,
    descripcion: String,
    foto: String

});

module.exports = mongoose.model("BebidasHelada", BebidaHeladaSchema);