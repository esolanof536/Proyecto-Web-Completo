const express = require("express");
const EspeciController = require("../../Controllers/Especiales/Especialidades");

const api = express.Router();

api.post("/agregar-Especialidades", EspeciController.guardarEsp);
api.get("/especiales", EspeciController.getEspecialidades);
api.get("/especialNames", EspeciController.getEspecialNames);
api.put("/updateEspe/:id", EspeciController.updateEspecialidades);
api.delete("/deleteEspe/:id", EspeciController.deleteEspecialidades);
module.exports = api;