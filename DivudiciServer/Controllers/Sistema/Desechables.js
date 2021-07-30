const desech = require("../../Models/Sistema/DesechablesEmpaques");

function guardarDeseech(req, res) {
    console.log('Endpoint para guardar desechables ejecutado');
    const newDesecha = new desech();

    const { codigo, nombre, cantidad, restaurante, marca, descripcion } = req.body;

    newDesecha.codigo = codigo;
    newDesecha.nombre = nombre;
    newDesecha.cantidad = cantidad;
    newDesecha.restaurante = restaurante;
    newDesecha.marca = marca;
    newDesecha.descripcion = descripcion;

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
                            res.status(404).send({ message: "Descripcion necesaria" })
                        } else {
                            newDesecha.save((err, DesechStored) => {
                                if (err) {
                                    res.status(500).send({ message: "Error del servidor" })
                                } else {
                                    if (!DesechStored) {
                                        res.status(404).send({ message: "Error al guardar desechable" });
                                    } else {
                                        console.log('Desechable guardado con exito');
                                        res.status(200).send({ bbH: DesechStored });
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

function getDesechables(req, res) {
    desech.find().then(desechables => {
        if (!desechables) {
            res.status(404).send({ message: "No se ha encontrado ningun desechable" });
        } else {
            res.status(200).send({ desechables });
        }
    })
}

function updateDesechable(req, res) {
    const desechableData = req.body;
    const params = req.params;

    desech.findByIdAndUpdate({ _id: params.id }, desechableData, (err, desechableUpdate) => {
        if (err) {
            res.status(500).send({ code: 500, message: "Error del servidor" });
        } else {
            if (!desechableUpdate) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el Comestible" });
            } else {
                res.status(200).send({ code: 200, message: "Comestible actualizado correctamente" });
            }
        }
    })
}

function deleteDesechable(req, res) {
    const { id } = req.params;

    desech.findByIdAndRemove(id, (err, desechableDeleted) => {
        if (err) {
            res.status(500).send({ cod: 500, message: "Error del servidor" });
        } else {
            if (!desechableDeleted) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el Comestible" });
            } else {
                res.status(200).send({ code: 200, message: "Comestible eliminada correctamente" });
            }
        }
    })
}


module.exports = {
    guardarDeseech,
    getDesechables,
    updateDesechable,
    deleteDesechable
};