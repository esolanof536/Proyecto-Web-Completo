const express = require("express");
const MarcaController = require("../Controllers/Marcas");

const api = express.Router();

api.post("/agregar-Marca", MarcaController.guardarMarca);
api.get("/marcas", MarcaController.getMarcas);
api.put("/updateMarca/:id", MarcaController.updateMarca);
api.delete("/deleteMarca/:id", MarcaController.deleteMarca);

api.get("/nameMarca", MarcaController.getMarcaName);

module.exports = api;