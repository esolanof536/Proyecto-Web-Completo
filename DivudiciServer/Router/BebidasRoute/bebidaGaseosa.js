const express = require("express");
const bbGController = require("../../Controllers/BebidasControl/BebidaGaseosa");

const api = express.Router();

api.post("/agregar-BebidaGaseosa", bbGController.guardarBG);
api.get("/gaseosa", bbGController.getGaseosas);
api.put("/updateBebGas/:id", bbGController.updateBebGas);
api.delete("/deleteBebGas/:id", bbGController.deleteBebGas);

module.exports = api;