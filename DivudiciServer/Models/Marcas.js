const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MarcasSchema = Schema({

    codigo: String,
    nombre: String,
    nacionalidad: String,
    cedulaJuridica: String,
    nombreEmpesa: String,
    detalleEmpresa: String,
    telefono: String,
    descripcion: String,
    fotoMarca: String,
    fotoEmpresa: String

});

module.exports = mongoose.model("Marcas", MarcasSchema);