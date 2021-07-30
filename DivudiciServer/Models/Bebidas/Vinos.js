const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Vinos = Schema({

    codigo: String,
    nombre: String,
    marca: String,
    nacionalidad: String,
    precioUnitario: String,
    precioBotella: String,
    yearCosecha: String,
    restaurante: String,
    cantidad: String,
    descripcion: String,
    foto: String

});

module.exports = mongoose.model("Vino", Vinos);