const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cerrarCajaScheme = Schema({

    Restaurante: String,
    monto: String

});

module.exports = mongoose.model("CerrarCaja", cerrarCajaScheme);