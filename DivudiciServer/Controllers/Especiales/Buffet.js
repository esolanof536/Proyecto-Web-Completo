const buffet = require("../../Models/Especiales/Buffet");

function guardarBuff(req, res) {

    const newBuffet = new buffet();

    console.log('Endpoint de guardar Buffet ejecutado');
    const { codigo, nombre, tipo, precio, unidadMedida, foto } = req.body;
    newBuffet.codigo = codigo;
    newBuffet.nombre = nombre;
    newBuffet.tipo = tipo;
    newBuffet.precio = precio;
    newBuffet.unidadMedida = unidadMedida;
    newBuffet.foto = foto;

    if (codigo === '') {
        res.status(404).send({ message: "codigo requerido" })
    } else {
        if (nombre === '') {
            res.status(404).send({ message: "Nombre requerido" })
        } else {
            if (tipo === '') {
                res.status(404).send({ message: "Tipo requerido" })
            } else {
                if (unidadMedida === '') {
                    res.status(404).send({ message: "Unidad de Medida requerido" })
                } else {
                    newBuffet.save((err, buffStored) => {
                        if (err) {
                            res.status(500).send({ message: "Error del servidor" })
                        } else {
                            if (!buffStored) {
                                res.status(404).send({ message: "Error al guardar buffet" });
                            } else {
                                console.log('Buffet creado');
                                res.status(200).send({ bbH: buffStored });
                            }
                        }
                    });
                }
            }
        }
    }

}


function getBuffet(req, res) {
    buffet.find().then(buffet => {
        if (!buffet) {
            res.status(404).send({ message: "No se ha encontrado ningun buffet" });
        } else {
            res.status(200).send({ buffet });
        }
    })
}
function updateBuffet(req, res) {
    const buffetData = req.body;
    const params = req.params;

    buffet.findByIdAndUpdate({ _id: params.id }, buffetData, (err, espUpdate) => {
        if (err) {
            res.status(500).send({ code: 500, message: "Error del servidor" });
        } else {
            if (!espUpdate) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el Buffet" });
            } else {
                res.status(200).send({ code: 200, message: "Buffet actualizado correctamente" });
            }
        }
    })
}

function deleteBuffet(req, res) {
    const { id } = req.params;

    buffet.findByIdAndRemove(id, (err, espeDeleted) => {
        if (err) {
            res.status(500).send({ cod: 500, message: "Error del servidor" });
        } else {
            if (!espeDeleted) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el Buffet" });
            } else {
                res.status(200).send({ code: 200, message: "Buffet eliminado correctamente" });
            }
        }
    })
}

function getBuffetNames(req, res) {
    buffet.find({}, { nombre: 1, precio: 1, _id: 0 }).then(buffet => {
        if (!buffet) {
            res.status(404).send({ message: "No se ha encontrado ninguna especialidad" });
        } else {
            res.status(200).send({ buffet });
        }
    })
}


module.exports = {
    guardarBuff,
    getBuffet,
    updateBuffet,
    deleteBuffet,
    getBuffetNames
};