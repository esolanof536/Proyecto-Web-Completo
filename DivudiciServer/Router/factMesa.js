const express = require("express");
const FacMController = require("../Controllers/factCliente");

const api = express.Router();

api.post("/agregar-ClienteMesa", FacMController.guardarFacMesa);
api.get("/factMesa", FacMController.getFactMesa);

module.exports = api;