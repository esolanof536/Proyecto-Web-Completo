const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UnidadMedidaSchema = Schema({

    codigo: String,
    nombre: String,
    escala: String,
    detalle: String,
    simbologia: String,
    simbolo: String

});

module.exports = mongoose.model("UnidadMedida", UnidadMedidaSchema);