const express = require("express");
const LimpController = require("../../Controllers/Sistema/LimpiezaHigiene");

const api = express.Router();

api.post("/agregar-LimpiezaHigiene", LimpController.guardarLimpieza);
api.get("/limpieza", LimpController.getLimpieza);
api.put("/updateLimpieza/:id", LimpController.updateLimpieza);
api.delete("/deleteLimpieza/:id", LimpController.deleteLimpieza);

module.exports = api;