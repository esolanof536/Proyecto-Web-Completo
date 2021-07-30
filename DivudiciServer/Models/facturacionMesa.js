const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FactMesaSchema = Schema({

    codigo: String,
    nombre: String,
    nombreMesa: String,
    montoTotal: String,
    restaurante: String,
    horaEntrada: String,
    horaSalida: String,
    duracion: String,
    detalle: String,
    reservacion: String,
    fechaLlegada: String,
    fechaReservacion: String,
    silla1: {
        orden1: String,
        monto1: String
    }, silla2: {
        orden2: String,
        monto2: String
    }, silla3: {
        orden3: String,
        monto3: String
    }, silla4: {
        orden4: String,
        monto4: String
    }



});

module.exports = mongoose.model("facturacionCliente", FactMesaSchema);