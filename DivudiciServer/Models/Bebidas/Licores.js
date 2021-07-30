const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Licores = Schema({

    codigo: String,
    nombre: String,
    marca: String,
    nacionalidad: String,
    precioUnitario: String,
    precioBotella: String,
    restaurante: String,
    cantidad: String,
    descripcion: String,
    foto: String

});

module.exports = mongoose.model("Licores", Licores);