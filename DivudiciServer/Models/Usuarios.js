const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({

    codigo: String,
    nombre: String,
    primerApellido: String,
    segundoApellido: String,
    telefono: String,
    celular: String,
    username: {
        type: String,
        unique: true
    },
    password: String,
    admin: String,
    Restaurante: String
});

module.exports = mongoose.model("Usuarios", UserSchema);
