const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProveedorSchema = Schema({

    codigo: String,
    nombrePorveedor: String,
    cedula: String,
    fechaIngreso: String,
    pApellido: String,
    sApellido: String,
    correo: String,
    direccionProv: String,
    telefonos: {
        oficina: String,
        fax: String,
        celular: String
    },
    foto: String,
    infoContacto: {
        nombre: String,
        telefono: String,
        direccion: String
    },
    productosManejados: Array

});

module.exports = mongoose.model("Proveedor", ProveedorSchema);