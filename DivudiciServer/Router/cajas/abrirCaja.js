const express = require("express");
const AbrirCajaController = require("../../Controllers/cajas/AbrirCaja.js");

const api = express.Router();

api.post("/addCajaAbierta", AbrirCajaController.addAperturaCaja);
api.get("/abrirCaja", AbrirCajaController.getAbrirCajas);

module.exports = api;