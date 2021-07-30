const restaurante = require("../Models/restaurantes");

function getRetaurantes(req, res) {
    restaurante.find().then(res => {
        if (!res) {
            res.status(404).send({ message: "No se ha encontrado ningun res" });
        } else {
            res.status(200).send({ res });
        }
    })
}

module.exports = {
    getRetaurantes
}