const consecu = require("../../Models/Seguridad/Consecutivos");

function guardarConsec(req, res) {
    console.log('Endpoint para guardar consecutivos ejecutado');
    const newC = new consecu();

    const { tipo, descripcion, prefijo, valor } = req.body;
    newC.tipo = tipo;
    newC.descripcion = descripcion;
    newC.prefijo = prefijo;
    newC.valor = valor;

    if (tipo === '') {
        res.status(404).send({ message: "Tipo necesario" })
    } else {
        if (descripcion === '') {
            res.status(404).send({ message: "Descripcion necesaria" })
        } else {
            if (prefijo === '') {
                res.status(404).send({ message: "Prefijo necesario" })
            } else {
                if (valor==='') {
                    res.status(404).send({ message: "El valor Debe ser de tipo numerico" })
                } else {
                    newC.save((err, ConsecStored) => {
                        if (err) {
                            res.status(500).send({ message: "Error del servidor" })
                        } else {
                            if (!ConsecStored) {
                                res.status(404).send({ message: "Error al guardar Consecutivo" });
                            } else {
                                console.log('Consecutivo guardado');
                                res.status(200).send({ bbH: ConsecStored });
                            }
                        }
                    });
                }
            }
        }
    }

}

function getConsecutivos(req, res) {
    consecu.find().then(conse => {
        if (!conse) {
            res.status(404).send({ message: "No se ha encontrado ningun consecutivo" });
        } else {
            res.status(200).send({ conse });
        }
    })
}

function getConsecu(req, res) {


    const { prefijo } = req.body;

    const p = prefijo;

    consecu.findOne({ "prefijo": p }, { valor: 1, _id: 0 }).sort({ valor: -1 }).collation({ locale: "en_US", numericOrdering: true }).then(conse => {

        if (!conse) {
            res.status(404).send({ message: "No se ha encontrado ningun consecutivo" });
        } else {
            res.status(200).send({ conse });
        }
    })


}

function updateConse(req, res) {
    const conseData = req.body;
    const params = req.params;

    consecu.findByIdAndUpdate({ _id: params.id }, conseData, (err, conseUpdate) => {
        if (err) {
            res.status(500).send({ code: 500, message: "Error del servidor" });
        } else {
            if (!conseUpdate) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el consecutivo" });
            } else {
                res.status(200).send({ code: 200, message: "Consecutivo actualizado correctamente" });
            }
        }
    })
}

function deleteConse(req, res) {
    const { id } = req.params;

    consecu.findByIdAndRemove(id, (err, conseDeleted) => {
        if (err) {
            res.status(500).send({ cod: 500, message: "Error del servidor" });
        } else {
            if (!conseDeleted) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el consecutivo" });
            } else {
                res.status(200).send({ code: 200, message: "Consecutivo eliminada correctamente" });
            }
        }
    })
}
function getConsecutivos(req, res) {
    consecu.find().then(conse => {
        if (!conse) {
            res.status(404).send({ message: "No se ha encontrado ningun consecutivo" });
        } else {
            res.status(200).send({ conse });
        }
    })
}
module.exports = {
    getConsecu,
    guardarConsec,
    getConsecutivos,
    updateConse,
    deleteConse
};