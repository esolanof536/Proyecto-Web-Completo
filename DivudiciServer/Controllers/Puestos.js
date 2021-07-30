const Puesto = require("../Models/Puestos");

function guardarPuesto(req, res) {
    console.log('Endpoint para guardar Puestos ejecutado')
    const newPuesto = new Puesto();

    const { codigo, nombre, internoExterno, roll } = req.body;
    newPuesto.codigo = codigo;
    newPuesto.nombre = nombre;
    newPuesto.internoExterno = internoExterno;
    newPuesto.roll = roll;

    if (codigo === '') {
        res.status(404).send({ message: 'Codigo necesario' })
    } else {
        if (nombre === '') {
            res.status(404).send({ message: 'Nombre necesario' })
        } else {
            if (internoExterno === '') {
                res.status(404).send({ message: 'Interno o Externo necesario' })
            } else {
                if (roll === '') {
                    res.status(404).send({ message: 'Rol necesario' })
                } else {
                    newPuesto.save((err, PuestoStored) => {
                        if (err) {
                            res.status(500).send({ message: "Error del servidor" })
                        } else {
                            if (!PuestoStored) {
                                res.status(404).send({ message: "Error al guardar Puesto" });
                            } else {
                                console.log('Puesto creado con exito');
                                res.status(200).send({ bbH: PuestoStored });
                            }
                        }
                    });
                }
            }
        }
    }


}

function updatePuesto(req, res) {
    const especiData = req.body;
    const params = req.params;

    Puesto.findByIdAndUpdate({ _id: params.id }, especiData, (err, espUpdate) => {
        if (err) {
            res.status(500).send({ code: 500, message: "Error del servidor" });
        } else {
            if (!espUpdate) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el Puesto" });
            } else {
                res.status(200).send({ code: 200, message: "Puesto actualizado correctamente" });
            }
        }
    })
}

function deletePuesto(req, res) {
    const { id } = req.params;

    Puesto.findByIdAndRemove(id, (err, espeDeleted) => {
        if (err) {
            res.status(500).send({ cod: 500, message: "Error del servidor" });
        } else {
            if (!espeDeleted) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el Puesto" });
            } else {
                res.status(200).send({ code: 200, message: "Puesto eliminada correctamente" });
            }
        }
    })
}

function getPuestos(req, res) {
    Puesto.find().then(puesto => {
        if (!puesto) {
            res.status(404).send({ message: "No se ha encontrado ningun puesto" });
        } else {
            res.status(200).send({ puesto });
        }
    })
}


function getPuestoName(req, res) {
    Puesto.find({}, { nombre: 1, _id: 0 }).then(puest => {
        if (!puest) {
            res.status(404).send({ message: "No se ha encontrado ninguna especialidad" });
        } else {
            res.status(200).send({ puest });
        }
    })
}


module.exports = {
    guardarPuesto,
    getPuestos,
    updatePuesto,
    deletePuesto,
    getPuestoName
};