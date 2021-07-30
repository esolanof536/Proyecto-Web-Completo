const express = require("express");
const ProvController = require("../Controllers/Proveedor");

const api = express.Router();

api.post("/agregar-Proveedor", ProvController.guardarProveedor);
api.get("/proveedores", ProvController.getProveedores);
api.put("/updateProveedor/:id", ProvController.updateProveedores);
api.delete("/deleteProveedor/:id", ProvController.deleteProveedores);


module.exports = api;