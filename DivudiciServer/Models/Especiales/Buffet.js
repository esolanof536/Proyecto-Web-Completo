const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BuffetSchema = Schema({

    codigo: String,
    nombre: String,
    tipo: String,
    precio: String,
    unidadMedida: String,
    foto: String

});

module.exports = mongoose.model("Buffet", BuffetSchema);