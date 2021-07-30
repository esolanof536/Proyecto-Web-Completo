const express = require("express");
const puestoController = require("../Controllers/Puestos");

const api = express.Router();

api.post("/agregar-Puestos", puestoController.guardarPuesto);
api.get("/puestos", puestoController.getPuestos);

api.get("/namePuesto", puestoController.getPuestoName);

module.exports = api;