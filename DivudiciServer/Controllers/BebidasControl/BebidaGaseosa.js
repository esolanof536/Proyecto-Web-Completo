const bbGas = require("../../Models/Bebidas/BebidaGaseosa");

function guardarBG(req, res) {
    console.log('Endpoint para Bebida Gaseosa ejecutado');
    const newBG = new bbGas();

    const { codigo, nombre, ingrediente, marca, cantidad, nacionalidad, precio, restaurante, descripcion, foto } = req.body;
    newBG.codigo = codigo;
    newBG.nombre = nombre;
    newBG.marca = marca;
    newBG.cantidad = cantidad;
    newBG.nacionalidad = nacionalidad;
    newBG.ingrediente = ingrediente;
    newBG.precio = precio;
    newBG.restaurante = restaurante;
    newBG.descripcion = descripcion;
    newBG.foto = foto;

    if (codigo === '') {
        res.status(404).send({ message: 'Codigo necesario' })
    } else {
        if (nombre === '') {
            res.status(404).send({ message: 'Nombre necesario' })
        } else {
            if (marca === '') {
                res.status(404).send({ message: 'Marca necesaria' })
            } else {
                if (cantidad === '') {
                    res.status(404).send({ message: 'Cantidad necesaria' })
                } else {
                    if (nacionalidad === '') {
                        res.status(404).send({ message: 'Nacionalidad necesaria' })
                    } else {
                        if (ingrediente === '') {
                            res.status(404).send({ message: 'Ingredientes necesarios' })
                        } else {
                            if (precio === '') {
                                res.status(404).send({ message: 'Precio necesario' })
                            } else {
                                if (restaurante === '') {
                                    res.status(404).send({ message: 'Restaurante necesario' })
                                } else {
                                    if (descripcion === '') {
                                        res.status(404).send({ message: 'Descripcion necesaria' })
                                    }
                                    else {
                                        newBG.save((err, bbGStored) => {
                                            if (err) {
                                                res.status(500).send({ message: "Error del servidor" })
                                            } else {
                                                if (!bbGStored) {
                                                    res.status(404).send({ message: "Error al guardar bebida gaseosa" });
                                                } else {
                                                    console.log('Bebida Gaseosa creada');
                                                    res.status(200).send({ bbH: bbGStored });
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



function getGaseosas(req, res) {
    bbGas.find().then(gaseosas => {
        if (!gaseosas) {
            res.status(404).send({ message: "No se ha encontrado ninguna Gaseosa" });
        } else {
            res.status(200).send({ gaseosas });
        }
    })
}
function updateBebGas(req, res) {
    const especiData = req.body;
    const params = req.params;

    bbGas.findByIdAndUpdate({ _id: params.id }, especiData, (err, espUpdate) => {
        if (err) {
            res.status(500).send({ code: 500, message: "Error del servidor" });
        } else {
            if (!espUpdate) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el Bebida Gaseosa" });
            } else {
                res.status(200).send({ code: 200, message: "Bebida Gaseosa actualizada correctamente" });
            }
        }
    })
}

function deleteBebGas(req, res) {
    const { id } = req.params;

    bbGas.findByIdAndRemove(id, (err, espeDeleted) => {
        if (err) {
            res.status(500).send({ cod: 500, message: "Error del servidor" });
        } else {
            if (!espeDeleted) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el Bebida Gaseosa" });
            } else {
                res.status(200).send({ code: 200, message: "Bebida Gaseosa eliminada correctamente" });
            }
        }
    })
}

module.exports = {
    guardarBG,
    getGaseosas,
    updateBebGas,
    deleteBebGas
};