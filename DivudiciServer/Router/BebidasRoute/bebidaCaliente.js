const express = require("express");
const bbCController = require("../../Controllers/BebidasControl/BebidaCaliente");

const api = express.Router();

api.post("/agregar-BebidaCaliente", bbCController.guardarBC);
api.get("/bebCaliente", bbCController.getBebCal);
api.put("/updateBebCal/:id", bbCController.updateBebCal);
api.delete("/deleteBebCal/:id", bbCController.deleteBebCal);
module.exports = api;