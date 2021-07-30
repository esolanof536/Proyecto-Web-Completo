const proveedor = require("../Models/Proveedores");

function guardarProveedor(req, res) {

    const newProv = new proveedor();

    const { codigo, nombrePorveedor, nombre, telefono, cedula, fechaIngreso, pApellido, sApellido, correo, direccion, direccionProv, oficina, fax, celular, foto, infoContacto, productosManejados } = req.body;
    newProv.codigo = codigo;
    newProv.nombrePorveedor = nombrePorveedor;
    newProv.cedula = cedula;
    newProv.fechaIngreso = fechaIngreso;
    newProv.pApellido = pApellido;
    newProv.sApellido = sApellido;
    newProv.correo = correo;
    newProv.direccionProv = direccionProv;

    newProv.telefonos.oficina = oficina;
    newProv.telefonos.fax = fax;
    newProv.telefonos.celular = celular;

    newProv.infoContacto.nombre = nombre;
    newProv.infoContacto.telefono = telefono;
    newProv.infoContacto.direccion = direccion;


    newProv.foto = foto;
    newProv.productosManejados = productosManejados;


    newProv.save((err, ProvStored) => {

        if (err) {

            res.status(500).send({ message: "Error del servidor" })
        } else {

            if (!ProvStored) {
                res.status(404).send({ message: "Error al guardar bebida" });
            } else {
                res.status(200).send({ bbH: ProvStored });
            }

        }

    });
}

function getProveedores(req, res) {
    proveedor.find().then(proveedor => {
        if (!proveedor) {
            res.status(404).send({ message: "No se ha encontrado ningun pais" });
        } else {
            res.status(200).send({ proveedor });
        }
    })
}

function updateProveedores(req, res) {
    const proveedoresData = req.body;
    const params = req.params;

    proveedor.findByIdAndUpdate({ _id: params.id }, proveedoresData, (err, proveedoresUpdate) => {
        if (err) {
            res.status(500).send({ code: 500, message: "Error del servidor" });
        } else {
            if (!proveedoresUpdate) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el Proveedores" });
            } else {
                res.status(200).send({ code: 200, message: "Proveedor actualizado correctamente" });
            }
        }
    })
}

function deleteProveedores(req, res) {
    const { id } = req.params;

    proveedor.findByIdAndRemove(id, (err, proveedoresDeleted) => {
        if (err) {
            res.status(500).send({ cod: 500, message: "Error del servidor" });
        } else {
            if (!proveedoresDeleted) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el Proveedores" });
            } else {
                res.status(200).send({ code: 200, message: "Proveedor eliminado correctamente" });
            }
        }
    })
}

module.exports = {
    guardarProveedor,
    getProveedores,
    updateProveedores,
    deleteProveedores
};