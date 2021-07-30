const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConsecutivoSchema = Schema({

    tipo: String,
    descripcion: String,
    valor: { type: Number },
    prefijo: String

});

module.exports = mongoose.model("consecutivo", ConsecutivoSchema);