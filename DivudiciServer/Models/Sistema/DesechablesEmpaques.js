const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DesechEmpaqSchema = Schema({

    codigo: String,
    nombre: String,
    cantidad: String,
    restaurante: String,
    marca: String,
    descripcion: String

});

module.exports = mongoose.model("DesechEmpaques", DesechEmpaqSchema);