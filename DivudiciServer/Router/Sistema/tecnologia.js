const express = require("express");
const TecController = require("../../Controllers/Sistema/Tecnologia");

const api = express.Router();

api.post("/agregar-Tecnologia", TecController.guardarTech);
api.get("/tecnologias", TecController.getTecnologia);
api.put("/updatetecno/:id", TecController.updateTecnologia);
api.delete("/deletetecno/:id", TecController.deleteTecnologia);

module.exports = api;