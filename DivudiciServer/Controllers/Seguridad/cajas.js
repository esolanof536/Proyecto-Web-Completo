const e = require("express");
const caja = require("../../Models/Seguridad/cajas");

function guardarCaja(req, res) {
    console.log('Endpoint para crear cajas ejecutado');
    const newCaja = new caja();

    const { codigo, fecha, descripcion, entrada, restaurante } = req.body;
    newCaja.codigo = codigo;
    newCaja.fecha = fecha;
    newCaja.descripcion = descripcion;
    newCaja.entrada = entrada;
    newCaja.restaurante = restaurante;

    if (codigo == '') {
        res.status(404).send({ message: "Codigo necesario" })
    } else {
        if (fecha == '') {
            res.status(404).send({ message: "Fecha necesaria" })
        } else {
            if (descripcion == '') {
                res.status(404).send({ message: "Descripcion necesaria" })
            } else {
                if (entrada == '') {
                    res.status(404).send({ message: "Entrada necesaria" })
                } else {
                    if (restaurante == '') {
                        res.status(404).send({ message: "Restaurante necesario" })
                    } else {
                        newCaja.save((err, CajaStored) => {
                            if (err) {
                                res.status(500).send({ message: "Error del servidor" })
                            } else {
                                if (!CajaStored) {
                                    res.status(404).send({ message: "Error al guardar caja" });
                                } else {
                                    console.log('Caja creada');
                                    res.status(200).send({ bbH: CajaStored });
                                }
                            }
                        });
                    }
                }
            }
        }
    }

}

function getCajas(req, res) {
    Cajas.find().then(cajas => {
        if (!cajas) {
            res.status(404).send({ message: "No se ha encontrado ninguna cajas" });
        } else {
            res.status(200).send({ cajas });
        }
    })
}

module.exports = {
    guardarCaja,
    getCajas
};