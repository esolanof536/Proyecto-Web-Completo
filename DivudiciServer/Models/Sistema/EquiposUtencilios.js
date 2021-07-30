const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EquipUtenSchema = Schema({

    codigo: String,
    nombre: String,
    cantidad: String,
    restaurante: String,
    marca: String,
    descripcion: String

});

module.exports = mongoose.model("EquipoUtencilio", EquipUtenSchema);