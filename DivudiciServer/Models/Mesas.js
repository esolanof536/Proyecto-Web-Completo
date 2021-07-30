const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MesasSchema = Schema({

    codigo: String,
    nombre: String,
    numero: String,
    cantSillas: String,
    restaurante: String,
    ocupado: Boolean,
    reserva: Boolean

});

module.exports = mongoose.model("Mesas", MesasSchema);