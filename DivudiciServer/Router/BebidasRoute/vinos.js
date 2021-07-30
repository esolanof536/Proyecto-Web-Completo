const express = require("express");
const VinoController = require("../../Controllers/BebidasControl/Vinos");

const api = express.Router();

api.post("/agregar-Vinos", VinoController.guardarVinos);
api.get("/vinos", VinoController.getVinos);
api.put("/updateVino/:id", VinoController.updateVino);
api.delete("/deleteVino/:id", VinoController.deleteVino);

module.exports = api;