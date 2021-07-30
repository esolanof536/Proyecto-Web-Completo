const express = require("express");
const PaisController = require("../../Controllers/Seguridad/Paises");

const api = express.Router();

api.post("/agregar-pais", PaisController.guardarPais);
api.get("/paises", PaisController.getPaises);
api.put("/updatePais/:id", PaisController.updatePais);
api.delete("/deletePais/:id", PaisController.deletePais);

api.get("/namePaises", PaisController.getPaisesName);


module.exports = api;