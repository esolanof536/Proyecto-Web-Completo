const express = require("express");
const MesaController = require("../Controllers/Mesas");

const api = express.Router();

api.post("/agregar-Mesas", MesaController.guardarMesas);
api.get("/mesas", MesaController.getMesas);
api.put("/updateMesa/:id", MesaController.updateMesa);
api.delete("/deleteMesa/:id", MesaController.deleteMesa);
api.get("/getMesaEspecifica/:codigo", MesaController.getMesaEspecifica);
api.get("/getMesaName", MesaController.getMesasNames);
api.get("/getMesaEspecificaName/:nombre", MesaController.getMesaEspecificaName);


module.exports = api;