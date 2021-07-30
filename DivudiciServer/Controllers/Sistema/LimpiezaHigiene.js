const e = require("express");
const limpiez = require("../../Models/Sistema/LimpiezaHigiene");

function guardarLimpieza(req, res) {
    console.log('Enpoint para guardar limpieza ejecutado');
    const newLimp = new limpiez();

    const { codigo, nombre, cantidad, restaurante, marca, descripcion, tipo, cantidadMedida, unidadMedida } = req.body;

    newLimp.codigo = codigo;
    newLimp.nombre = nombre;
    newLimp.cantidad = cantidad;
    newLimp.restaurante = restaurante;
    newLimp.marca = marca;
    newLimp.descripcion = descripcion;
    newLimp.tipo = tipo;
    newLimp.cantidadMedida = cantidadMedida;
    newLimp.unidadMedida = unidadMedida;

    if (codigo == '') {
        res.status(404).send({ message: "Codigo necesario" })
    } else {
        if (nombre == '') {
            res.status(404).send({ message: "Nombre necesario" })
        } else {
            if (cantidad == '') {
                res.status(404).send({ message: "Cantidad necesaria" })
            } else {
                if (restaurante == '') {
                    res.status(404).send({ message: "Restaurante necesario" })
                } else {
                    if (marca == '') {
                        res.status(404).send({ message: "Marca necesaria" })
                    } else {
                        if (descripcion == '') {
                            res.status(404).send({ message: "Descripciom necesaria" })
                        } else {
                            if (tipo == '') {
                                res.status(404).send({ message: "Tipo necesario" })
                            } else {
                                if (cantidadMedida == '') {
                                    res.status(404).send({ message: "Cantidad de UM necesario" })
                                } else {
                                    if (unidadMedida == '') {
                                        res.status(404).send({ message: "Unidad de medida necesario" })
                                    } else {
                                        newLimp.save((err, LimpStored) => {
                                            if (err) {
                                                res.status(500).send({ message: "Error del servidor" })
                                            } else {
                                                if (!LimpStored) {
                                                    res.status(404).send({ message: "Error al guardar equipos de Limpieza" });
                                                } else {
                                                    console.log('Equipos de Limpieza guardado');
                                                    res.status(200).send({ bbH: LimpStored });
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
        }
    }

}

function getLimpieza(req, res) {
    limpiez.find().then(limpieza => {
        if (!limpieza) {
            res.status(404).send({ message: "No se ha encontrado ningun Limpieza" });
        } else {
            res.status(200).send({ limpieza });
        }
    })
}


function updateLimpieza(req, res) {
    const limpiezaData = req.body;
    const params = req.params;

    limpiez.findByIdAndUpdate({ _id: params.id }, limpiezaData, (err, limpiezaUpdate) => {
        if (err) {
            res.status(500).send({ code: 500, message: "Error del servidor" });
        } else {
            if (!limpiezaUpdate) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el Limpieza" });
            } else {
                res.status(200).send({ code: 200, message: "Limpieza actualizado correctamente" });
            }
        }
    })
}

function deleteLimpieza(req, res) {
    const { id } = req.params;

    limpiez.findByIdAndRemove(id, (err, limpiezaDeleted) => {
        if (err) {
            res.status(500).send({ cod: 500, message: "Error del servidor" });
        } else {
            if (!limpiezaDeleted) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el Limpieza" });
            } else {
                res.status(200).send({ code: 200, message: "Limpieza eliminada correctamente" });
            }
        }
    })
}


module.exports = {
    guardarLimpieza,
    getLimpieza,
    updateLimpieza,
    deleteLimpieza
};