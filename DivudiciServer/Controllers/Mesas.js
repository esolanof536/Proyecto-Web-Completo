const Mesas = require("../Models/Mesas");

function guardarMesas(req, res) {
    console.log('Enpoint de guardar mesas ejecutado');
    const newMesa = new Mesas();

    const { codigo, nombre, numero, cantSillas, restaurante, ocupado, reserva } = req.body;
    newMesa.codigo = codigo;
    newMesa.nombre = nombre;
    newMesa.numero = numero;
    newMesa.cantSillas = cantSillas;
    newMesa.restaurante = restaurante;
    newMesa.ocupado = ocupado;
    newMesa.reserva = reserva;

    if (codigo === '') {
        res.status(404).send({ message: 'Codigo necesario' })
    } else {
        if (nombre === '') {
            res.status(404).send({ message: 'Nombre necesario' })
        } else {
            if (numero === '') {
                res.status(404).send({ message: 'Numero de mesa necesario' })
            } else {
                if (cantSillas === '') {
                    res.status(404).send({ message: 'Cantidad de sillas necesario' })
                } else {
                    if (restaurante === '') {
                        res.status(404).send({ message: 'Restaurante necesario' })
                    } else {
                        newMesa.save((err, MesaStored) => {
                            if (err) {
                                res.status(500).send({ message: "Error del servidor" })
                            } else {
                                if (!MesaStored) {
                                    res.status(404).send({ message: "Error al guardar Mesa" });
                                } else {
                                    console.log('Mesa Guardada')
                                    res.status(200).send({ bbH: MesaStored });
                                }
                            }
                        });
                    }
                }
            }
        }
    }


}

function getMesas(req, res) {
    Mesas.find().then(mesas => {
        if (!mesas) {
            res.status(404).send({ message: "No se ha encontrado ningun mesas" });
        } else {
            res.status(200).send({ mesas });
        }
    })
}


function updateMesa(req, res) {
    const especiData = req.body;
    const params = req.params;

    Mesas.findByIdAndUpdate({ _id: params.id }, especiData, (err, espUpdate) => {
        if (err) {
            res.status(500).send({ code: 500, message: "Error del servidor" });
        } else {
            if (!espUpdate) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el Mesa" });
            } else {
                res.status(200).send({ code: 200, message: "Mesa actualizada correctamente" });
            }
        }
    })
}

function deleteMesa(req, res) {
    const { id } = req.params;

    Mesas.findByIdAndRemove(id, (err, espeDeleted) => {
        if (err) {
            res.status(500).send({ cod: 500, message: "Error del servidor" });
        } else {
            if (!espeDeleted) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el Mesa" });
            } else {
                res.status(200).send({ code: 200, message: "Mesa eliminada correctamente" });
            }
        }
    })
}

function getMesaEspecifica(req, res) {
    const { codigo } = req.params;

    Mesas.find({ codigo }, {}).then(mesa => {
        if (!mesa) {
            res.status(404).send({ message: "No se ha encontrado ninguna mesa" });
        } else {
            res.status(200).send({ mesa });
        }
    })
}

function getMesasNames(req, res) {
    Mesas.find({}, { nombre: 1, _id: 0 }).then(mesas => {
        if (!mesas) {
            res.status(404).send({ message: "No se ha encontrado ninguna mesa" });
        } else {
            res.status(200).send({ mesas });
        }
    })
}

function getMesaEspecificaName(req, res) {
    const { nombre } = req.params;

    Mesas.find({ nombre }, {}).then(mesa => {
        if (!mesa) {
            res.status(404).send({ message: "No se ha encontrado ninguna mesa" });
        } else {
            res.status(200).send({ mesa });
        }
    })
}

module.exports = {
    guardarMesas,
    getMesas,
    updateMesa,
    deleteMesa,
    getMesaEspecifica,
    getMesasNames,
    getMesaEspecificaName
};