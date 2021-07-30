const express = require("express");
const ComestiController = require("../../Controllers/Sistema/Comestibles");

const api = express.Router();

api.post("/agregar-comestible", ComestiController.guardarComestible);
api.get("/comestibles", ComestiController.getComestibles);
api.put("/updateComestible/:id", ComestiController.updateComestible);
api.delete("/deleteComestible/:id", ComestiController.deleteComestible);
module.exports = api;