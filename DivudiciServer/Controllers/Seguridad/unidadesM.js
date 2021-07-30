const e = require("express");
const Umed = require("../../Models/Seguridad/UnidadMedida");

function guardarUmed(req, res) {
    console.log('Endpoint para guardar Unidades de Medida Ejecutado');
    const newUmed = new Umed();

    const { codigo, nombre, escala, detalle, simbologia, simbolo } = req.body;
    newUmed.codigo = codigo;
    newUmed.nombre = nombre;
    newUmed.escala = escala;
    newUmed.detalle = detalle;
    newUmed.simbologia = simbologia;
    newUmed.simbolo = simbolo;

    if (codigo == '') {
        res.status(404).send({ message: "Codigo necesario" })
    } else {
        if (nombre == '') {
            res.status(404).send({ message: "Nombre necesario" })
        } else {
            if (escala == '') {
                res.status(404).send({ message: "Escala necesaria" })
            } else {
                if (detalle == '') {
                    res.status(404).send({ message: "Detalle necesario" })
                } else {
                    if (simbologia == '') {
                        res.status(404).send({ message: "Simbologia necesaria" })
                    } else {
                        if (simbolo == '') {
                            res.status(404).send({ message: "Simbolo necesario" })
                        } else {
                            newUmed.save((err, UmedStored) => {
                                if (err) {
                                    res.status(500).send({ message: "Error del servidor" })
                                } else {
                                    if (!UmedStored) {
                                        res.status(404).send({ message: "Error al guardar Unidad de Medida" });
                                    } else {
                                        console.log('Unidad de Medida Guardada');
                                        res.status(200).send({ bbH: UmedStored });
                                    }
                                }
                            });
                        }
                    }
                }
            }
        }
    }

}

function getUnidades(req, res) {
    Umed.find().then(unidades => {
        if (!unidades) {
            res.status(404).send({ message: "No se ha encontrado ninguna unidad" });
        } else {
            res.status(200).send({ unidades });
        }
    })
}

function updateUmed(req, res) {
    const UmedData = req.body;
    const params = req.params;

    Umed.findByIdAndUpdate({ _id: params.id }, UmedData, (err, UmedUpdate) => {
        if (err) {
            res.status(500).send({ code: 500, message: "Error del servidor" });
        } else {
            if (!UmedUpdate) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el Umed" });
            } else {
                res.status(200).send({ code: 200, message: "Unidad de Medida actualizada correctamente" });
            }
        }
    })
}

function deleteUmed(req, res) {
    const { id } = req.params;

    Umed.findByIdAndRemove(id, (err, UmedDeleted) => {
        if (err) {
            res.status(500).send({ cod: 500, message: "Error del servidor" });
        } else {
            if (!UmedDeleted) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el consecutivo" });
            } else {
                res.status(200).send({ code: 200, message: "Consecutivo eliminada correctamente" });
            }
        }
    })
}

function getUmedNames(req, res) {
    Umed.find({}, { nombre: 1, _id: 0 }).then(unidades => {
        if (!unidades) {
            res.status(404).send({ message: "No se ha encontrado ninguna especialidad" });
        } else {
            res.status(200).send({ unidades });
        }
    })
}



module.exports = {
    guardarUmed,
    getUnidades,
    updateUmed,
    deleteUmed,
    getUmedNames
};