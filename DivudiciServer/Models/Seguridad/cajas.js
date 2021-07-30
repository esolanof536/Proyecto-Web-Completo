const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CajaSchema = Schema({

    codigo: String,
    fecha: String,
    descripcion: String,
    entrada: String,
    restaurnte: String,

});

module.exports = mongoose.model("Caja", CajaSchema);