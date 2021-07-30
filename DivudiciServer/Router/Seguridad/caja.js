const express = require("express");
const CajaController = require("../../Controllers/Seguridad/cajas");

const api = express.Router();

api.post("/agregar-Caja", CajaController.guardarCaja);
api.get("/cajas", CajaController.getCajas);

module.exports = api;