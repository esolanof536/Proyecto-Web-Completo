const roll = require("../../Models/Seguridad/Roles");

function guardarRoles(req, res) {
    console.log('Endpoint para guardar roles ejecutado');
    const newroll = new roll();

    const { codigo, nombre, descripcion } = req.body;
    newroll.codigo = codigo;
    newroll.nombre = nombre;
    newroll.descripcion = descripcion;

    if (codigo == '') {
        res.status(404).send({ message: 'Codigo necesario' })
    } else {
        if (nombre == '') {
            res.status(404).send({ message: 'Nombre necesario' })
        } else {
            if (descripcion == '') {
                res.status(404).send({ message: 'Descripcion necesaria' })
            } else {
                newroll.save((err, RollStored) => {
                    if (err) {
                        res.status(500).send({ message: "Error del servidor" })
                    } else {
                        if (!RollStored) {
                            res.status(404).send({ message: "Error al guardar Rol" });
                        } else {
                            console.log('Rol Guarado con exito');
                            res.status(200).send({ bbH: RollStored });
                        }
                    }
                });
            }
        }
    }


}

function getRoles(req, res) {
    roll.find().then(roles => {
        if (!roles) {
            res.status(404).send({ message: "No se ha encontrado ningun rol" });
        } else {
            res.status(200).send({ roles });
        }
    })
}

function updateRoles(req, res) {
    const rolesData = req.body;
    const params = req.params;

    roll.findByIdAndUpdate({ _id: params.id }, rolesData, (err, rolesUpdate) => {
        if (err) {
            res.status(500).send({ code: 500, message: "Error del servidor" });
        } else {
            if (!rolesUpdate) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el rol" });
            } else {
                res.status(200).send({ code: 200, message: "Rol actualizada correctamente" });
            }
        }
    })
}

function deleteRol(req, res) {
    const { id } = req.params;

    roll.findByIdAndRemove(id, (err, userDeleted) => {
        if (err) {
            res.status(500).send({ cod: 500, message: "Error del servidor" });
        } else {
            if (!userDeleted) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el rol" });
            } else {
                res.status(200).send({ code: 200, message: "Rol eliminada correctamente" });
            }
        }
    })
}

function getRoleName(req, res) {
    roll.find({}, { nombre: 1, _id: 0 }).then(role => {
        if (!role) {
            res.status(404).send({ message: "No se ha encontrado ninguna especialidad" });
        } else {
            res.status(200).send({ role });
        }
    })
}


module.exports = {
    guardarRoles,
    getRoles,
    updateRoles,
    deleteRol,
    getRoleName
};