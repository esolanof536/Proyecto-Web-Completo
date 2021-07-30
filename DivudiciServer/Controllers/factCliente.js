const FacM = require("../Models/facturacionMesa");

function guardarFacMesa(req, res) {

    const newFacM = new FacM();

    const { codigo, nombre, nombreMesa, montoTotal, restaurante, horaEntrada,
        horaSalida, duracion, reservacion, fechaLlegada, fechaReservacion,
        numeroMesa, orden1, monto1, monto2, orden2, orden3, monto3, detalle,
        orden4, monto4, silla1, silla2, silla3, silla4 } = req.body;

    newFacM.codigo = codigo;
    newFacM.nombre = nombre;
    newFacM.detalle = detalle;
    newFacM.nombreMesa = nombreMesa;
    newFacM.montoTotal = montoTotal;
    newFacM.restaurante = restaurante;
    newFacM.horaEntrada = horaEntrada;
    newFacM.horaSalida = horaSalida;
    newFacM.duracion = duracion;
    newFacM.reservacion = reservacion;
    newFacM.fechaLlegada = fechaLlegada;
    newFacM.fechaReservacion = fechaReservacion;
    newFacM.numeroMesa = numeroMesa;
    newFacM.silla1.orden1 = orden1;
    newFacM.silla1.monto1 = monto1;
    newFacM.silla2.orden2 = orden2;
    newFacM.silla2.monto2 = monto2;
    newFacM.silla3.orden3 = orden3;
    newFacM.silla3.monto3 = monto3;
    newFacM.silla4.orden4 = orden4;
    newFacM.silla4.monto4 = monto4;


    newFacM.save((err, FacMesaStored) => {

        if (err) {

            res.status(500).send({ message: "Error del servidor" })
        } else {

            if (!FacMesaStored) {
                res.status(404).send({ message: "Error al guardar bebida" });
            } else {
                res.status(200).send({ bbH: FacMesaStored });
            }

        }

    });
}

function getFactMesa(req, res) {
    FacM.find().then(factMesa => {
        if (!factMesa) {
            res.status(404).send({ message: "No se ha encontrado ningun mesas" });
        } else {
            res.status(200).send({ factMesa });
        }
    })
}

module.exports = {

    guardarFacMesa,
    getFactMesa

};