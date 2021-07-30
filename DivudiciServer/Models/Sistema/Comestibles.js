const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ComestiblesSchema = Schema({

    codigo: String,
    nombre: String,
    cantidad: String,
    tipo: String,
    restaurante: String,
    marca: String,
    clase: String,
    linea: String,
    unidadMedida: String

});

module.exports = mongoose.model("Comestibles", ComestiblesSchema);