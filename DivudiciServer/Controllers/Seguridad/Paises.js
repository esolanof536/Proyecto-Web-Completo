const pais = require("../../Models/Seguridad/Paises");

function guardarPais(req, res) {
    console.log('Endpoint para agregar pais ejecutado');
    const newPais = new pais();

    const { codigo, nombre, foto } = req.body;
    newPais.codigo = codigo;
    newPais.nombre = nombre;
    newPais.foto = foto;

    if (codigo === '') {
        res.status(404).send({ message: "Codigo necesario" })
    } else {
        if (nombre === '') {
            res.status(404).send({ message: "Nombre necesario" })
        } else {
            newPais.save((err, PaisStored) => {
                if (err) {
                    res.status(500).send({ message: "Error del servidor" })
                } else {
                    if (!PaisStored) {
                        res.status(404).send({ message: "Error al guardar Pais" });
                    } else {
                        console.log('Pais guardado');
                        res.status(200).send({ bbH: PaisStored });
                    }
                }
            });
        }
    }
}




function getPaises(req, res) {
    pais.find().then(paises => {
        if (!paises) {
            res.status(404).send({ message: "No se ha encontrado ningun pais" });
        } else {
            res.status(200).send({ paises });
        }
    })
}

function updatePais(req, res) {
    const paisData = req.body;
    const params = req.params;

    pais.findByIdAndUpdate({ _id: params.id }, paisData, (err, paisUpdate) => {
        if (err) {
            res.status(500).send({ code: 500, message: "Error del servidor" });
        } else {
            if (!paisUpdate) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el rol" });
            } else {
                res.status(200).send({ code: 200, message: "País actualizado correctamente" });
            }
        }
    })
}

function deletePais(req, res) {
    const { id } = req.params;

    pais.findByIdAndRemove(id, (err, paisDeleted) => {
        if (err) {
            res.status(500).send({ cod: 500, message: "Error del servidor" });
        } else {
            if (!paisDeleted) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el rol" });
            } else {
                res.status(200).send({ code: 200, message: "País eliminado correctamente" });
            }
        }
    })
}

function getPaisesName(req, res) {
    pais.find({}, { nombre: 1, _id: 0 }).then(country => {
        if (!country) {
            res.status(404).send({ message: "No se ha encontrado ninguna especialidad" });
        } else {
            res.status(200).send({ country });
        }
    })
}

module.exports = {
    guardarPais,
    getPaises,
    updatePais,
    deletePais,
    getPaisesName
};