const express = require("express");
const UMController = require("../../Controllers/Seguridad/unidadesM");

const api = express.Router();

api.post("/agregar-unidadmedida", UMController.guardarUmed);
api.get("/unidadesMedida", UMController.getUnidades);
api.put("/updateUM/:id", UMController.updateUmed);
api.delete("/deleteUM/:id", UMController.deleteUmed);
api.get("/GetUmedNameData", UMController.getUmedNames);
module.exports = api;