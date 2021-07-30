
const bbHot = require("../../Models/Bebidas/BebidaCaliente");

function guardarBC(req, res) {
    console.log('Endpoint de agegar Beb Calientes ejecutado');
    const newBC = new bbHot();

    const { codigo, nombre, ingrediente, precio, restaurante, descripcion, foto } = req.body;
    newBC.codigo = codigo;
    newBC.nombre = nombre;
    newBC.ingrediente = ingrediente;
    newBC.precio = precio;
    newBC.restaurante = restaurante;
    newBC.descripcion = descripcion;
    newBC.foto = foto;

    if (codigo === '') {
        res.status(404).send({ message: 'Codigo Necesario' })
    } else {
        if (nombre === '') {
            res.status(404).send({ message: "Nombre necesario" })
        } else {
            if (ingrediente === '') {
                res.status(404).send({ message: "Ingredientes necesarios" })
            } else {
                if (precio === '') {
                    res.status(404).send({ message: "Precio necesario" })
                } else {
                    if (restaurante === '') {
                        res.status(404).send({ message: "Restaurante requerido" })
                    } else {
                        if (descripcion === '') {
                            res.status(404).send({ message: "Descripcion necesaria" })
                        } else {
                            newBC.save((err, bbCStored) => {
                                if (err) {
                                    res.status(500).send({ message: "Error del servidor" })
                                } else {
                                    if (!bbCStored) {
                                        res.status(404).send({ message: "Error al guardar bebida caliente" });
                                    } else {
                                        console.log('Bebida Caliente creado');
                                        res.status(200).send({ BebCaliente: bbCStored });
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

function getBebCal(req, res) {
    bbHot.find().then(bebCal => {
        if (!bebCal) {
            res.status(404).send({ message: "No se ha encontrado ninguna Bebida Caliente" });
        } else {
            res.status(200).send({ bebCal });
        }
    })
}

function updateBebCal(req, res) {
    const especiData = req.body;
    const params = req.params;

    bbHot.findByIdAndUpdate({ _id: params.id }, especiData, (err, espUpdate) => {
        if (err) {
            res.status(500).send({ code: 500, message: "Error del servidor" });
        } else {
            if (!espUpdate) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el Bebida Caliente" });
            } else {
                res.status(200).send({ code: 200, message: "Bebida Caliente actualizada correctamente" });
            }
        }
    })
}

function deleteBebCal(req, res) {
    const { id } = req.params;

    bbHot.findByIdAndRemove(id, (err, espeDeleted) => {
        if (err) {
            res.status(500).send({ cod: 500, message: "Error del servidor" });
        } else {
            if (!espeDeleted) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el Bebida Caliente" });
            } else {
                res.status(200).send({ code: 200, message: "Bebida Caliente eliminada correctamente" });
            }
        }
    })
}

module.exports = {
    guardarBC,
    getBebCal,
    updateBebCal,
    deleteBebCal
};