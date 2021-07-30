const express = require("express");
const ConsecController = require("../../Controllers/Seguridad/Consecutivos");

const api = express.Router();

api.post("/agregar-consecutivo", ConsecController.guardarConsec);
api.get("/consecutivos", ConsecController.getConsecutivos);
api.post("/consecu", ConsecController.getConsecu);
api.put("/updateConse/:id", ConsecController.updateConse);
api.delete("/deleteConse/:id", ConsecController.deleteConse);

module.exports = api;