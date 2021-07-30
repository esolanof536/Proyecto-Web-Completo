const express = require("express");
const CBController = require("../Controllers/ClientesBarra");

const api = express.Router();

api.post("/addCB", CBController.addClienteBarra);
api.get("/getCB", CBController.getClienteBarra);

module.exports = api;