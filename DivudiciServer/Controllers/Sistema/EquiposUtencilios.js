const e = require("express");
const equipos = require("../../Models/Sistema/EquiposUtencilios");

function guardarEquipos(req, res) {
    console.log('Endpoint para guardar equipos ejecutado');
    const newEquip = new equipos();

    const { codigo, nombre, cantidad, restaurante, marca, descripcion } = req.body;

    newEquip.codigo = codigo;
    newEquip.nombre = nombre;
    newEquip.cantidad = cantidad;
    newEquip.restaurante = restaurante;
    newEquip.marca = marca;
    newEquip.descripcion = descripcion;

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
                            newEquip.save((err, EquiupoStored) => {
                                if (err) {
                                    res.status(500).send({ message: "Error del servidor" })
                                } else {
                                    if (!EquiupoStored) {
                                        res.status(404).send({ message: "Error al guardar Equipos y utencilios" });
                                    } else {
                                        console.log('Equipos y Utencilios guardado');
                                        res.status(200).send({ bbH: EquiupoStored });
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

function getEquipos(req, res) {
    equipos.find().then(equipos => {
        if (!equipos) {
            res.status(404).send({ message: "No se ha encontrado ningun Equipos" });
        } else {
            res.status(200).send({ equipos });
        }
    })
}

function updateEquiUten(req, res) {
    const conseData = req.body;
    const params = req.params;

    equipos.findByIdAndUpdate({ _id: params.id }, conseData, (err, conseUpdate) => {
        if (err) {
            res.status(500).send({ code: 500, message: "Error del servidor" });
        } else {
            if (!conseUpdate) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el EquiUten" });
            } else {
                res.status(200).send({ code: 200, message: "EquiUten actualizado correctamente" });
            }
        }
    })
}

function deleteEquiUten(req, res) {
    const { id } = req.params;

    equipos.findByIdAndRemove(id, (err, conseDeleted) => {
        if (err) {
            res.status(500).send({ cod: 500, message: "Error del servidor" });
        } else {
            if (!conseDeleted) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el EquiUten" });
            } else {
                res.status(200).send({ code: 200, message: "EquiUten eliminada correctamente" });
            }
        }
    })
}

module.exports = {
    guardarEquipos,
    getEquipos,
    updateEquiUten,
    deleteEquiUten
};