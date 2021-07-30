const e = require("express");
const Especiali = require("../../Models/Especiales/Especialidades");

function guardarEsp(req, res) {
    console.log('Endpoint de guardar especiales ejecutado');
    const newEsp = new Especiali();
    const { codigo, nombre, ingrediente, precio, detalle, foto } = req.body;
    newEsp.codigo = codigo;
    newEsp.nombre = nombre;
    newEsp.ingrediente = ingrediente;
    newEsp.precio = precio;
    newEsp.detalle = detalle;
    newEsp.foto = foto;

    if (codigo === '') {
        res.status(404).send({ message: 'Codigo requerido' })
    } else {
        if (nombre === '') {
            res.status(404).send({ message: 'Nombre requerido' })
        } else {
            if (ingredientes === '') {
                res.status(404).send({ message: 'Ingredientes requeridos' })
            } else {

                if (precio === '') {
                    res.status(404).send({ message: 'Precio requerido' })
                } else {
                    if (detalle === '') {
                        res.status(404).send({ message: 'Detalle requerido' })
                    } else {
                        newEsp.save((err, EspStored) => {
                            if (err) {
                                res.status(500).send({ message: "Error del servidor" })
                            } else {
                                if (!EspStored) {
                                    res.status(404).send({ message: "Error al guardar especial" });
                                } else {
                                    console.log('Especialidad guardada con exito');
                                    res.status(200).send({ Especialidades: EspStored });
                                }
                            }
                        });
                    }
                }
            }
        }
    }
}

function getEspecialidades(req, res) {
    Especiali.find().then(especialidades => {
        if (!especialidades) {
            res.status(404).send({ message: "No se ha encontrado ninguna especialidad" });
        } else {
            res.status(200).send({ especialidades });
        }
    })
}


function getEspecialNames(req, res) {
    Especiali.find({}, { nombre: 1, precio: 1, _id: 0 }).then(especialidades => {
        if (!especialidades) {
            res.status(404).send({ message: "No se ha encontrado ninguna especialidad" });
        } else {
            res.status(200).send({ especialidades });
        }
    })
}


function updateEspecialidades(req, res) {
    const especiData = req.body;
    const params = req.params;

    Especiali.findByIdAndUpdate({ _id: params.id }, especiData, (err, espUpdate) => {
        if (err) {
            res.status(500).send({ code: 500, message: "Error del servidor" });
        } else {
            if (!espUpdate) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el Especialidades" });
            } else {
                res.status(200).send({ code: 200, message: "Especialidad actualizada correctamente" });
            }
        }
    })
}

function deleteEspecialidades(req, res) {
    const { id } = req.params;

    Especiali.findByIdAndRemove(id, (err, espeDeleted) => {
        if (err) {
            res.status(500).send({ cod: 500, message: "Error del servidor" });
        } else {
            if (!espeDeleted) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el Especialidades" });
            } else {
                res.status(200).send({ code: 200, message: "Especialidad eliminada correctamente" });
            }
        }
    })
}


module.exports = {
    guardarEsp,
    getEspecialidades,
    getEspecialNames,
    updateEspecialidades,
    deleteEspecialidades
};