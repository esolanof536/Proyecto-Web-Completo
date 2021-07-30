const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RolesSchema = Schema({

    codigo: String,
    nombre: String,
    descripcion: String

});

module.exports = mongoose.model("Roles", RolesSchema);