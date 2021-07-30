const express = require("express");
const LicorController = require("../../Controllers/BebidasControl/Licores");

const api = express.Router();

api.post("/agregar-Licores", LicorController.guardarLic);
api.get("/licores", LicorController.getLicores);
api.put("/updateLicor/:id", LicorController.updateLicor);
api.delete("/deleteLicor/:id", LicorController.deleteLicor);

module.exports = api;