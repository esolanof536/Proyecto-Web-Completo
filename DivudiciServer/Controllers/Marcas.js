const marca = require("../Models/Marcas");

function guardarMarca(req, res) {
    console.log('Enpoint para guardar marca ejecutado');
    const newMarca = new marca();

    const { codigo, nombre, nacionalidad, cedulaJuridica, nombreEmpesa, detalleEmpresa, telefono, descripcion, fotoMarca, fotoEmpresa } = req.body;
    newMarca.codigo = codigo;
    newMarca.nombre = nombre;
    newMarca.nacionalidad = nacionalidad;
    newMarca.cedulaJuridica = cedulaJuridica;
    newMarca.nombreEmpesa = nombreEmpesa;
    newMarca.detalleEmpresa = detalleEmpresa;
    newMarca.telefono = telefono;
    newMarca.descripcion = descripcion;
    newMarca.fotoMarca = fotoMarca;
    newMarca.fotoEmpresa = fotoEmpresa;

    if (codigo == '') {
        res.status(404).send({ message: 'Codigo necesario' })
    } else {
        if (nombre == '') {
            res.status(404).send({ message: 'Nombre necesario' })
        } else {
            if (nacionalidad == '') {
                res.status(404).send({ message: 'Nacionalidad necesaria' })
            } else {
                if (cedulaJuridica == '') {
                    res.status(404).send({ message: 'Cedular juridica necesaria' })
                } else {
                    if (nombreEmpesa == '') {
                        res.status(404).send({ message: 'Nombre de empresa necesaria' })
                    } else {
                        if (detalleEmpresa == '') {
                            res.status(404).send({ message: 'Detalle de empresa necesario' })
                        } else {
                            if (telefono == '') {
                                res.status(404).send({ message: 'Telefono necesario' })
                            } else {
                                if (descripcion == '') {
                                    res.status(404).send({ message: 'Descripciom necesaria' })
                                } else {
                                    newMarca.save((err, MarcaStored) => {
                                        if (err) {
                                            res.status(500).send({ message: "Error del servidor" })
                                        } else {
                                            if (!MarcaStored) {
                                                res.status(404).send({ message: "Error al guardar Marca" });
                                            } else {
                                                console.log('Marca guardada');
                                                res.status(200).send({ bbH: MarcaStored });
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

function getMarcas(req, res) {
    marca.find().then(marcas => {
        if (!marcas) {
            res.status(404).send({ message: "No se ha encontrado ningun mesas" });
        } else {
            res.status(200).send({ marcas });
        }
    })
}

function updateMarca(req, res) {
    const marcaData = req.body;
    const params = req.params;

    marca.findByIdAndUpdate({ _id: params.id }, marcaData, (err, marcaUpdate) => {
        if (err) {
            res.status(500).send({ code: 500, message: "Error del servidor" });
        } else {
            if (!marcaUpdate) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el Marca" });
            } else {
                res.status(200).send({ code: 200, message: "Marca actualizada correctamente" });
            }
        }
    })
}

function deleteMarca(req, res) {
    const { id } = req.params;

    marca.findByIdAndRemove(id, (err, marcaDeleted) => {
        if (err) {
            res.status(500).send({ cod: 500, message: "Error del servidor" });
        } else {
            if (!marcaDeleted) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el Marca" });
            } else {
                res.status(200).send({ code: 200, message: "Marca eliminada correctamente" });
            }
        }
    })
}

function getMarcaName(req, res) {
    marca.find({}, { nombre: 1, precio: 1, _id: 0 }).then(marc => {
        if (!marc) {
            res.status(404).send({ message: "No se ha encontrado ninguna marca" });
        } else {
            res.status(200).send({ marc });
        }
    })
}


module.exports = {
    guardarMarca,
    getMarcas,
    updateMarca,
    deleteMarca,
    getMarcaName
};