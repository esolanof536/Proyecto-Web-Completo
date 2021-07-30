const e = require("express");
const vino = require("../../Models/Bebidas/Vinos");

function guardarVinos(req, res) {
    console.log('Endpoint para crear vinos ejecutado');
    const newVino = new vino();

    const { codigo, nombre, precioUnitario, marca, yearCosecha, cantidad, nacionalidad, precioBotella, restaurante, descripcion, foto } = req.body;
    newVino.codigo = codigo;
    newVino.nombre = nombre;
    newVino.marca = marca;
    newVino.cantidad = cantidad;
    newVino.yearCosecha = yearCosecha;
    newVino.nacionalidad = nacionalidad;
    newVino.precioUnitario = precioUnitario;
    newVino.precioBotella = precioBotella;
    newVino.restaurante = restaurante;
    newVino.descripcion = descripcion;
    newVino.foto = foto;

    if (codigo === '') {
        res.status(404).send({ message: "Codigo necesario" })
    } else {
        if (nombre === '') {
            res.status(404).send({ message: "Nombre necesario" })
        } else {
            if (marca === '') {
                res.status(404).send({ message: "Marca necesaria" })
            } else {
                if (cantidad === '') {
                    res.status(404).send({ message: "Cantidad necesaria" })
                } else {
                    if (yearCosecha === '') {
                        res.status(404).send({ message: "Año de cosecha necesario" })
                    } else {
                        if (nacionalidad === '') {
                            res.status(404).send({ message: "Nacionalidad necesaria" })
                        } else {
                            if (precioUnitario === '') {
                                res.status(404).send({ message: "Precio Unitario necesario" })
                            } else {
                                if (precioBotella === '') {
                                    res.status(404).send({ message: "Precio de botella necesario" })
                                } else {
                                    if (restaurante === '') {
                                        res.status(404).send({ message: "Restaurante necesario" })
                                    } else {
                                        if (descripcion === '') {
                                            res.status(404).send({ message: "Descripcion necesaria" })
                                        } else {
                                            newVino.save((err, VinoStored) => {
                                                if (err) {
                                                    res.status(500).send({ message: "Error del servidor" })
                                                } else {
                                                    if (!VinoStored) {
                                                        res.status(404).send({ message: "Error al guardar Vino" });
                                                    } else {
                                                        console.log('Vino almacenado');
                                                        res.status(200).send({ bbH: VinoStored });
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

}

function getVinos(req, res) {
    vino.find().then(vinos => {
        if (!vinos) {
            res.status(404).send({ message: "No se ha encontrado ninguna Gaseosa" });
        } else {
            res.status(200).send({ vinos });
        }
    })
}
function updateVino(req, res) {
    const especiData = req.body;
    const params = req.params;

    vino.findByIdAndUpdate({ _id: params.id }, especiData, (err, espUpdate) => {
        if (err) {
            res.status(500).send({ code: 500, message: "Error del servidor" });
        } else {
            if (!espUpdate) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el Vino" });
            } else {
                res.status(200).send({ code: 200, message: "Vino actualizado correctamente" });
            }
        }
    })
}

function deleteVino(req, res) {
    const { id } = req.params;

    vino.findByIdAndRemove(id, (err, espeDeleted) => {
        if (err) {
            res.status(500).send({ cod: 500, message: "Error del servidor" });
        } else {
            if (!espeDeleted) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el Vino" });
            } else {
                res.status(200).send({ code: 200, message: "Vino eliminado correctamente" });
            }
        }
    })
}

module.exports = {
    guardarVinos,
    getVinos,
    deleteVino,
    updateVino
};