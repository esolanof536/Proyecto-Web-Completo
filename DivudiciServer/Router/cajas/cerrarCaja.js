const express = require("express");
const cerrarCajaController = require("../../Controllers/cajas/CerrarCaja.js");

const api = express.Router();

api.post("/addCerrarCaja", cerrarCajaController.addCerrarCaja);
api.get("/cerrarCaja", cerrarCajaController.getcerrarCajas);

module.exports = api;