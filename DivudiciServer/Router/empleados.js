const express = require("express");
const EmpleadoController = require("../Controllers/Empleados");

const api = express.Router();

api.post("/agregar-Empleados", EmpleadoController.guardarEmpleado);
api.get("/empleados", EmpleadoController.getEmpleado);
api.put("/updateEmpleado/:id", EmpleadoController.updateEmpleado);
api.delete("/deleteEmpleado/:id", EmpleadoController.deleteEmpleado);
module.exports = api;