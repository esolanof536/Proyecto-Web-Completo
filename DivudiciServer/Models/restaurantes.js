const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestauranteSchema = Schema({
    codigo: String,
    nombre: String,
    especialidad: String,
    direccion: String,
    telefono: String
});

module.exports = mongoose.model("restaurantes", RestauranteSchema);