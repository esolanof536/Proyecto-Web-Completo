const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaisSchema = Schema({

    codigo: String,
    nombre: String,
    foto: String

});

module.exports = mongoose.model("Pais", PaisSchema);