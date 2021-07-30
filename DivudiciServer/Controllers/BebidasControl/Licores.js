const licor = require("../../Models/Bebidas/Licores");

function guardarLic(req, res) {
    console.log('Enpoint para agregar Licor ejecutado');
    const newLicor = new licor();

    const { codigo, nombre, precioUnitario, marca, cantidad, nacionalidad, precioBotella, restaurante, descripcion, foto } = req.body;
    newLicor.codigo = codigo;
    newLicor.nombre = nombre;
    newLicor.marca = marca;
    newLicor.cantidad = cantidad;
    newLicor.nacionalidad = nacionalidad;
    newLicor.precioUnitario = precioUnitario;
    newLicor.precioBotella = precioBotella;
    newLicor.restaurante = restaurante;
    newLicor.descripcion = descripcion;
    newLicor.foto = foto;

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
                    if (nacionalidad === '') {
                        res.status(404).send({ message: "Nacionalidad necesaria" })
                    } else {
                        if (precioUnitario === '') {
                            res.status(404).send({ message: "Precio unitario necesario" })
                        } else {
                            if (precioBotella === '') {
                                res.status(404).send({ message: "Precio de la botella necesario" })
                            } else {
                                if (restaurante === '') {
                                    res.status(404).send({ message: "Restaurante necesario" })
                                } else {
                                    if (descripcion === '') {
                                        res.status(404).send({ message: "Descripcion necesaria" })
                                    } else {
                                        newLicor.save((err, LicStored) => {
                                            if (err) {
                                                res.status(500).send({ message: "Error del servidor" })
                                            } else {
                                                if (!LicStored) {
                                                    res.status(404).send({ message: "Error al guardar Licor" });
                                                } else {
                                                    console.log('Licor Almacenado');
                                                    res.status(200).send({ bbH: LicStored });
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


function getLicores(req, res) {
    licor.find().then(licores => {
        if (!licores) {
            res.status(404).send({ message: "No se ha encontrado ninguna Licores" });
        } else {
            res.status(200).send({ licores });
        }
    })
}

function updateLicor(req, res) {
    const especiData = req.body;
    const params = req.params;

    licor.findByIdAndUpdate({ _id: params.id }, especiData, (err, espUpdate) => {
        if (err) {
            res.status(500).send({ code: 500, message: "Error del servidor" });
        } else {
            if (!espUpdate) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el Licor" });
            } else {
                res.status(200).send({ code: 200, message: "Licor actualizado correctamente" });
            }
        }
    })
}

function deleteLicor(req, res) {
    const { id } = req.params;

    licor.findByIdAndRemove(id, (err, espeDeleted) => {
        if (err) {
            res.status(500).send({ cod: 500, message: "Error del servidor" });
        } else {
            if (!espeDeleted) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el Licor" });
            } else {
                res.status(200).send({ code: 200, message: "Licor eliminado correctamente" });
            }
        }
    })
}

module.exports = {
    guardarLic,
    getLicores,
    updateLicor,
    deleteLicor
};