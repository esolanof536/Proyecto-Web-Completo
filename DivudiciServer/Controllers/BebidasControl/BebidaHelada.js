
const bbHelada = require("../../Models/Bebidas/BebidaHelada");

function guardarBH(req, res) {
    console.log('Endpoint de agregar Bebidas heladas ejecutada');
    const newBH = new bbHelada();

    const { codigo, nombre, ingrediente, precio, restaurante, descripcion, foto } = req.body;
    newBH.codigo = codigo;
    newBH.nombre = nombre;
    newBH.ingrediente = ingrediente;
    newBH.precio = precio;
    newBH.restaurante = restaurante;
    newBH.descripcion = descripcion;
    newBH.foto = foto;

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
                        res.status(404).send({ message: "Restaurante necesario" })
                    } else {
                        if (descripcion === '') {
                            res.status(404).send({ message: "Descripcion necesaria" })
                        } else {
                            newBH.save((err, bbHStored) => {
                                if (err) {
                                    res.status(500).send({ message: "Error del servidor" })
                                } else {
                                    if (!bbHStored) {
                                        res.status(404).send({ message: "Error al guardar bebida helada" });
                                    } else {
                                        console.log('Bebida Helada Guardada');
                                        res.status(200).send({ bbH: bbHStored });
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

function getBebHel(req, res) {
    bbHelada.find().then(bebHel => {
        if (!bebHel) {
            res.status(404).send({ message: "No se ha encontrado ninguna Bebida Caliente" });
        } else {
            res.status(200).send({ bebHel });
        }
    })
}

function updateBebHel(req, res) {
    const especiData = req.body;
    const params = req.params;

    bbHelada.findByIdAndUpdate({ _id: params.id }, especiData, (err, espUpdate) => {
        if (err) {
            res.status(500).send({ code: 500, message: "Error del servidor" });
        } else {
            if (!espUpdate) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el Bebida Helada" });
            } else {
                res.status(200).send({ code: 200, message: "Bebida Helada actualizada correctamente" });
            }
        }
    })
}

function deleteBebHel(req, res) {
    const { id } = req.params;

    bbHelada.findByIdAndRemove(id, (err, espeDeleted) => {
        if (err) {
            res.status(500).send({ cod: 500, message: "Error del servidor" });
        } else {
            if (!espeDeleted) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el Bebida Helada" });
            } else {
                res.status(200).send({ code: 200, message: "Bebida Helada eliminada correctamente" });
            }
        }
    })
}

module.exports = {
    guardarBH,
    getBebHel,
    updateBebHel,
    deleteBebHel
};