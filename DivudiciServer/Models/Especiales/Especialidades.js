const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EspecialidadesSchema = Schema({

    codigo: String,
    nombre: String,
    ingrediente: String,
    precio: String,
    detalle: String,
    foto: String

});

module.exports = mongoose.model("Especialidades", EspecialidadesSchema);