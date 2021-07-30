const empelado = require("../Models/Empleados");

function guardarEmpleado(req, res) {
    console.log('Endpoint para guardar Empleado Ejecutado');
    const newEmpleado = new empelado();

    const { codigo, nombre, cedula, pApellido, sApellido, telefono1, telefono2, puesto, nacionalidad, restaurante, foto } = req.body;
    newEmpleado.codigo = codigo;
    newEmpleado.nombre = nombre;
    newEmpleado.cedula = cedula;
    newEmpleado.pApellido = pApellido;
    newEmpleado.sApellido = sApellido;
    newEmpleado.telefono1 = telefono1;
    newEmpleado.telefono2 = telefono2;
    newEmpleado.puesto = puesto;
    newEmpleado.nacionalidad = nacionalidad;
    newEmpleado.restaurante = restaurante;
    newEmpleado.foto = foto;


    if (codigo === '') {
        res.status(404).send({ message: "Codigo necesario" })
    } else {
        if (nombre === '') {
            res.status(404).send({ message: "Nombre necesario" })
        } else {
            if (cedula === '') {
                res.status(404).send({ message: "Cedula necesaria" })
            } else {
                if (pApellido === '') {
                    res.status(404).send({ message: "Primer apellido necesario" })
                } else {
                    if (sApellido === '') {
                        res.status(404).send({ message: "Segundo apellido necesario" })
                    } else {
                        if (telefono1 === '') {
                            res.status(404).send({ message: "Telefono 1 necesario" })
                        } else {
                            if (telefono2 === '') {
                                res.status(404).send({ message: "Telefono 2 necesario" })
                            } else {
                                if (puesto === '') {
                                    res.status(404).send({ message: "Puesto necesario" })
                                } else {
                                    if (restaurante === '') {
                                        res.status(404).send({ message: "Restaurante necesario" })
                                    } else {
                                        if (nacionalidad === '') {
                                            res.status(404).send({ message: "Nacionalidad necesaria" })
                                        } else {
                                            newEmpleado.save((err, EmpStored) => {
                                                if (err) {
                                                    res.status(500).send({ message: "Error del servidor" })
                                                } else {
                                                    if (!EmpStored) {
                                                        res.status(404).send({ message: "Error al guardar Empleado" });
                                                    } else {
                                                        
                                                        res.status(200).send({ bbH: EmpStored });
                                                        console.log('Empleado guardado con exito');
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


function getEmpleado(req, res) {
    empelado.find().then(empleado => {
        if (!empleado) {
            res.status(404).send({ message: "No se ha encontrado ningun empleado" });
        } else {
            res.status(200).send({ empleado });
        }
    })
}

function updateEmpleado(req, res) {
    const especiData = req.body;
    const params = req.params;

    empelado.findByIdAndUpdate({ _id: params.id }, especiData, (err, espUpdate) => {
        if (err) {
            res.status(500).send({ code: 500, message: "Error del servidor" });
        } else {
            if (!espUpdate) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el Empleado" });
            } else {
                res.status(200).send({ code: 200, message: "Empleado actualizado correctamente" });
            }
        }
    })
}

function deleteEmpleado(req, res) {
    const { id } = req.params;

    empelado.findByIdAndRemove(id, (err, espeDeleted) => {
        if (err) {
            res.status(500).send({ cod: 500, message: "Error del servidor" });
        } else {
            if (!espeDeleted) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el Empleado" });
            } else {
                res.status(200).send({ code: 200, message: "Empleado eliminada correctamente" });
            }
        }
    })
}


module.exports = {
    guardarEmpleado,
    getEmpleado,
    updateEmpleado,
    deleteEmpleado
};