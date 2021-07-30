const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TecnologiaSchema = Schema({

    codigo: String,
    nombre: String,
    cantidad: String,
    restaurante: String,
    marca: String,
    descripcion: String


});

module.exports = mongoose.model("Tecnologia", TecnologiaSchema);