const express = require("express");
const USerController = require("../Controllers/Usuarios");

const api = express.Router();

api.post("/agregar-Usuario", USerController.guardarUsuario);
api.post("/login", USerController.singIn);
api.get("/users", USerController.getUsers);
api.put("/updateUser/:id", USerController.updateUser);
api.delete("/deleteUser/:id", USerController.deleteUser);

api.post("/sign-in", USerController.singIn2);

module.exports = api;