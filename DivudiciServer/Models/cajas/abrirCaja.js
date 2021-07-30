const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AbrirCajaScheme = Schema({

    Restaurante: String,
    monto: String

});

module.exports = mongoose.model("aperturaCaja", AbrirCajaScheme);