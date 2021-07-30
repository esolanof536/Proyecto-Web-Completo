const e = require('express');
const cerrarCaja = require('../../Models/cajas/cerrarCaja.js')

function addCerrarCaja(req, res) {
    console.log('Enpoint para agregar aperturas de cajas ejecutado');
    const cerrar = new cerrarCaja();
    const { Restaurante, monto } = req.body;
    cerrar.Restaurante = Restaurante;
    cerrar.monto = monto;

    if (Restaurante == '') {
        res.status(404).send({ message: "Restaurante requerido" })
    } else {
        if (monto == '') {
            res.status(404).send({ message: "Monto requerido" })
        } else {
            cerrar.save((err, cerrarStored) => {
                if (err) {
                    res.status(404).send({ message: "Error del servidor" })
                } else {
                    if (!cerrarStored) {
                        res.status(404).send({ message: "Error al insertar caja" })
                    } else {
                        res.status(200).send({ caja: cerrarStored })
                        console.log('Cierre de caja insertada cone exito');
                    }
                }
            })
        }
    }

}

function getcerrarCajas(req, res) {
    cerrarCaja.find().then(cerrar => {
        if (!cerrar) {
            res.status(404).send({ message: "No se ha encontrado ninguna apertura de Caja" });
        } else {
            res.status(200).send({ cerrar });
        }
    })
}
module.exports = {
    getcerrarCajas,
    addCerrarCaja
}