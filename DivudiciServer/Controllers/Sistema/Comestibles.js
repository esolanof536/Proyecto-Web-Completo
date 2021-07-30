const comestible = require("../../Models/Sistema/Comestibles");

function guardarComestible(req, res) {
    console.log('Endpoint para guardar comestibles ejecutado');
    const newComestible = new comestible();

    const { codigo, nombre, cantidad, tipo, marca, clase, linea, unidadMedida } = req.body;

    newComestible.codigo = codigo;
    newComestible.nombre = nombre;
    newComestible.cantidad = cantidad;
    newComestible.tipo = tipo;
    newComestible.marca = marca;
    newComestible.clase = clase;
    newComestible.linea = linea;
    newComestible.unidadMedida = unidadMedida;

    if (codigo == '') {
        res.status(404).send({ message: "Codigo necesario" })
    } else {
        if (nombre == '') {
            res.status(404).send({ message: "Nombre necesario" })
        } else {
            if (cantidad == '') {
                res.status(404).send({ message: "Cantidad necesaria" })
            } else {
                if (tipo == '') {
                    res.status(404).send({ message: "Tipo necesario" })
                } else {
                    if (marca == '') {
                        res.status(404).send({ message: "Marca necesaria" })
                    } else {
                        if (clase == '') {
                            res.status(404).send({ message: "Clase necesaria" })
                        } else {
                            if (linea == '') {
                                res.status(404).send({ message: "Linea necesaria" })
                            } else {
                                if (unidadMedida == '') {
                                    res.status(404).send({ message: "Unidad de Medida necesaria" })
                                } else {
                                    newComestible.save((err, ComeStored) => {
                                        if (err) {
                                            res.status(500).send({ message: "Error del servidor" })
                                        } else {
                                            if (!ComeStored) {
                                                res.status(404).send({ message: "Error al guardar comestible" });
                                            } else {
                                                console.log('Comestible guardado');
                                                res.status(200).send({ bbH: ComeStored });
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

function getComestibles(req, res) {
    comestible.find().then(comestible => {
        if (!comestible) {
            res.status(404).send({ message: "No se ha encontrado ningun comestible" });
        } else {
            res.status(200).send({ comestible });
        }
    })
}


function updateComestible(req, res) {
    const conseData = req.body;
    const params = req.params;

    comestible.findByIdAndUpdate({ _id: params.id }, conseData, (err, conseUpdate) => {
        if (err) {
            res.status(500).send({ code: 500, message: "Error del servidor" });
        } else {
            if (!conseUpdate) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el Comestible" });
            } else {
                res.status(200).send({ code: 200, message: "Comestible actualizado correctamente" });
            }
        }
    })
}

function deleteComestible(req, res) {
    const { id } = req.params;

    comestible.findByIdAndRemove(id, (err, conseDeleted) => {
        if (err) {
            res.status(500).send({ cod: 500, message: "Error del servidor" });
        } else {
            if (!conseDeleted) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el Comestible" });
            } else {
                res.status(200).send({ code: 200, message: "Comestible eliminada correctamente" });
            }
        }
    })
}

module.exports = {
    guardarComestible,
    getComestibles,
    updateComestible,
    deleteComestible
};