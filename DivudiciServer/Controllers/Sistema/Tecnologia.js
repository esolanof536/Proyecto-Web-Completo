const tech = require("../../Models/Sistema/Tecnologia");

function guardarTech(req, res) {
    console.log('Enpoint de guardar tecnologia Ejecutado');
    const newTech = new tech();

    const { codigo, nombre, cantidad, restaurante, marca, descripcion } = req.body;

    newTech.codigo = codigo;
    newTech.nombre = nombre;
    newTech.cantidad = cantidad;
    newTech.restaurante = restaurante;
    newTech.marca = marca;
    newTech.descripcion = descripcion;

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
                            newTech.save((err, TechStored) => {
                                if (err) {
                                    res.status(500).send({ message: "Error del servidor" })
                                } else {
                                    if (!TechStored) {
                                        res.status(404).send({ message: "Error al guardar Tecnologia" });
                                    } else {
                                        console.log('Tecnologia Guardada');
                                        res.status(200).send({ bbH: TechStored });
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

function getTecnologia(req, res) {
    tech.find().then(tecnologia => {
        if (!tecnologia) {
            res.status(404).send({ message: "No se ha encontrado ninguna tecnologia" });
        } else {
            res.status(200).send({ tecnologia });
        }
    })
}


function updateTecnologia(req, res) {
    const techData = req.body;
    const params = req.params;

    tech.findByIdAndUpdate({ _id: params.id }, techData, (err, techUpdate) => {
        if (err) {
            res.status(500).send({ code: 500, message: "Error del servidor" });
        } else {
            if (!techUpdate) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el Tecnologia" });
            } else {
                res.status(200).send({ code: 200, message: "Tecnologia actualizado correctamente" });
            }
        }
    })
}

function deleteTecnologia(req, res) {
    const { id } = req.params;

    tech.findByIdAndRemove(id, (err, techDeleted) => {
        if (err) {
            res.status(500).send({ cod: 500, message: "Error del servidor" });
        } else {
            if (!techDeleted) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el Tecnologia" });
            } else {
                res.status(200).send({ code: 200, message: "Tecnologia eliminada correctamente" });
            }
        }
    })
}

module.exports = {
    guardarTech,
    getTecnologia,
    updateTecnologia,
    deleteTecnologia
};