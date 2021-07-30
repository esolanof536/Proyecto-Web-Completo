const ClienteBarra = require("../Models/ClienteBarra");

function addClienteBarra(req, res) {
    const newCB = new ClienteBarra();

    const { codigo, nombreCliente, nombreMesa, montoPago, restaurante, horaEntrada, horaSalida, duracionBarra, pedido, precio, numeroSilla, pedidosPrevios, estadoCuenta } = req.body;
    newCB.codigo = codigo;
    newCB.nombreCliente = nombreCliente,
        newCB.nombreMesa = nombreMesa,
        newCB.montoPago = montoPago,
        newCB.restaurante = restaurante,
        newCB.horaEntrada = horaEntrada,
        newCB.horaSalida = horaSalida,
        newCB.duracionBarra = duracionBarra,
        newCB.pedido = pedido,
        newCB.precio = precio,
        newCB.numeroSilla = numeroSilla,
        newCB.pedidosPrevios = pedidosPrevios,
        newCB.estadoCuenta = estadoCuenta

    newCB.save((err, CBStored) => {
        if (err) {

            res.status(500).send({ message: "Error del servidor" })
        } else {

            if (!CBStored) {
                res.status(404).send({ message: "Error al guardar cliente de barra" });
            } else {
                res.status(200).send({ bbH: CBStored });
            }

        }
    })
}

function getClienteBarra(req, res) {
    ClienteBarra.find().then(cliBarra => {
        if (!cliBarra) {
            res.status(404).send({ message: "No se ha encontrado ningun empleado" });
        } else {
            res.status(200).send({ cliBarra });
        }
    })
}

module.exports = {
    addClienteBarra,
    getClienteBarra
}