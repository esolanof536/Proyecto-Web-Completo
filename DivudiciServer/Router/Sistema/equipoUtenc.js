const express = require("express");
const EquipoUtenController = require("../../Controllers/Sistema/EquiposUtencilios");

const api = express.Router();

api.post("/agregar-EquipoUtencilios", EquipoUtenController.guardarEquipos);
api.get("/equipos", EquipoUtenController.getEquipos);
api.put("/updateEquipo/:id", EquipoUtenController.updateEquiUten);
api.delete("/deleteEquipo/:id", EquipoUtenController.deleteEquiUten);

module.exports = api;