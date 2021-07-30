const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmpleadoSchema = Schema({

    codigo: String,
    nombre: String,
    cedula: String,
    pApellido: String,
    sApellido: String,
    telefono1: String,
    telefono2: String,
    puesto: String,
    nacionalidad: String,
    restaurante: String,
    foto: String

});

module.exports = mongoose.model("Empleado", EmpleadoSchema);