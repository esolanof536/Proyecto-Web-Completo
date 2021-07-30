const AbrirCaja = require('../../Models/cajas/abrirCaja')

function addAperturaCaja(req, res) {
    console.log('Enpoint para agregar aperturas de cajas ejecutado');
    const abrirCajaGuztosa = new AbrirCaja();
    const { Restaurante, monto } = req.body;

    abrirCajaGuztosa.Restaurante = Restaurante;
    abrirCajaGuztosa.monto = monto;

    if (Restaurante == '') {
        res.status(404).send({ message: "Restaurante Requerido" })
    } else {
        if (monto == '') {
            res.status(404).send({ message: "Monto requerido" })
        } else {
            abrirCajaGuztosa.save((err, abrirStored) => {
                if (err) {
                    res.status(404).send({ message: "Error del servidor" })
                } else {
                    if (!abrirStored) {
                        res.status(404).send({ message: "Error al insertar caja" })
                    } else {
                        res.status(200).send({ caja: abrirStored })
                        console.log('Apertura de caja insertada cone exito');
                    }
                }
            })
        }
    }

}
function getAbrirCajas(req, res) {
    AbrirCaja.find().then(abCaja => {
        if (!abCaja) {
            res.status(404).send({ message: "No se ha encontrado ninguna apertura de Caja" });
        } else {
            res.status(200).send({ abCaja });
        }
    })
}
module.exports = {
    getAbrirCajas,
    addAperturaCaja
}