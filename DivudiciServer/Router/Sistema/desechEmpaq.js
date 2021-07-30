const express = require("express");
const DesEmpaqueController = require("../../Controllers/Sistema/Desechables");

const api = express.Router();

api.post("/agregar-DesechablesEmpaques", DesEmpaqueController.guardarDeseech);
api.get("/desechables", DesEmpaqueController.getDesechables);
api.put("/updateDesechable/:id", DesEmpaqueController.updateDesechable);
api.delete("/deleteDesechable/:id", DesEmpaqueController.deleteDesechable);

module.exports = api;