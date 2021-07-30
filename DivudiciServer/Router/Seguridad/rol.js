const express = require("express");
const RolController = require("../../Controllers/Seguridad/Roles");

const api = express.Router();

api.post("/agregar-rol", RolController.guardarRoles);
api.get("/roles", RolController.getRoles);
api.put("/updateRol/:id", RolController.updateRoles);
api.delete("/deleteRol/:id", RolController.deleteRol);

api.get("/nameRol", RolController.getRoleName);

module.exports = api;