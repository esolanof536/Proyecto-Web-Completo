const express = require("express");
const resController = require("../Controllers/restaurantes");

const api = express.Router();

api.get("/restaurante", resController.getRetaurantes);

module.exports = api;
