const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PuestoSchema = Schema({

    codigo: String,
    nombre: String,
    internoExterno: String,
    roll: String

});

module.exports = mongoose.model("Puestos", PuestoSchema);