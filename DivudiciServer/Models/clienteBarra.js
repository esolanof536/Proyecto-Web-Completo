const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClienteBarraSchema = Schema({
    codigo: String,
    nombreCliente: String,
    nombreMesa: String,
    montoPago: { type: Number },
    restaurante: String,
    horaEntrada: String,
    horaSalida: String,
    duracionBarra: String,
    pedido: String,
    precio: { type: Number },
    numeroSilla: String,
    pedidosPrevios: String,
    estadoCuenta: String
});

module.exports = mongoose.model("clienteBarras", ClienteBarraSchema);