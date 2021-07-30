const express = require("express");
const bbHController = require("../../Controllers/BebidasControl/BebidaHelada");

const api = express.Router();

api.post("/agregar-BebidaHelada", bbHController.guardarBH);
api.get("/bebHeladas", bbHController.getBebHel);
api.put("/updateBebHel/:id", bbHController.updateBebHel);
api.delete("/deleteBebHel/:id", bbHController.deleteBebHel);
module.exports = api;