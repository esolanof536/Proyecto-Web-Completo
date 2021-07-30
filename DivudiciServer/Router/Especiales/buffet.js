const express = require("express");
const BuffController = require("../../Controllers/Especiales/Buffet");

const api = express.Router();

api.post("/agregar-Buffet", BuffController.guardarBuff);
api.get("/buffet", BuffController.getBuffet);
api.put("/updateBuffet/:id", BuffController.updateBuffet);
api.delete("/deleteBuffet/:id", BuffController.deleteBuffet);
api.get("/buffetNames", BuffController.getBuffetNames);

module.exports = api;