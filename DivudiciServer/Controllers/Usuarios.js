const bcrypt = require("bcrypt-nodejs");
const User = require("../Models/Usuarios");
const jwt = require("../Services/jwt");

function guardarUsuario(req, res) {
    console.log('Enpoint para guardar usuarios ejecutado');
    const newU = new User();

    const { codigo, nombre, primerApellido, segundoApellido, rePass, telefono, celular, username, password, admin, Restaurante } = req.body;
    newU.codigo = codigo;
    newU.nombre = nombre;
    newU.primerApellido = primerApellido;
    newU.segundoApellido = segundoApellido;
    newU.telefono = telefono;
    newU.celular = celular;
    newU.username = username;
    newU.password = password;
    newU.admin = admin;
    newU.Restaurante = Restaurante;

    if (codigo == '') {
        res.status(404).send({ message: 'Codigo necesario' })
    } else {
        if (nombre == '') {
            res.status(404).send({ message: 'Nombre necesario' })
        } else {
            if (primerApellido == '') {
                res.status(404).send({ message: 'Primer apellido necesario' })
            } else {
                if (segundoApellido == '') {
                    res.status(404).send({ message: 'Segundo apellido necesario' })
                } else {
                    if (telefono == '') {
                        res.status(404).send({ message: 'Telefono necesario' })
                    } else {
                        if (celular == '') {
                            res.status(404).send({ message: 'Celular necesario' })
                        } else {
                            if (username == '') {
                                res.status(404).send({ message: 'Username necesario' })
                            } else {
                                if (!password || !rePass) {
                                    res.status(404).send({ message: "Password necesaria" });
                                } else {
                                    if (password !== rePass) {
                                        res.status(404).send({ message: "Las contras son diferentes" });
                                    } else {
                                        bcrypt.hash(password, null, null, function (err, hash) {
                                            if (err) {
                                                res.status(500).send({ message: "Error al encriptar el password" })
                                            } else {
                                                newU.password = hash;
                                                newU.save((err, userStored) => {
                                                    if (err) {
                                                        res.status(500).send({ message: "Error del servidor" })
                                                    } else {
                                                        if (!userStored) {
                                                            res.status(404).send({ message: "Error al crear el usuario" });
                                                        } else {
                                                            console.log('Usuario creado con exito');
                                                            res.status(200).send({ us: userStored });
                                                        }
                                                    }
                                                })
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


function singIn(req, res) {

    const params = req.body;
    const username = params.username;
    const password = params.password;


    User.findOne({ username }, (err, userStored) => {

        if (err) {

            res.status(500).send({ message: "Error del server" });

        } else {

            console.log(userStored);
            if (!userStored) {

                res.status(404).send({ message: "Usuario no encontrado" });
            } else {

                bcrypt.compare(password, userStored.password, (err, check) => {

                    if (err) {

                        res.status(500).send({ message: "Error del server" })

                    } else if (!check) {

                        res.status(404).send({ message: "Password Incorrecta" });

                    } else {

                        res.status(200).send({ message: "Usuario Logeao" });

                    }

                })
            }
        }

    });

}

function getUsers(req, res) {
    User.find().then(users => {
        if (!users) {
            res.status(404).send({ message: "No se ha encontrado ningun usuario" });
        } else {
            res.status(200).send({ users });
        }
    })
}

function singIn2(req, res) {
    const params = req.body;
    const username = params.username;
    const password = params.password;

    User.findOne({ username }, (err, userStored) => {
        if (err) {
            res.status(500).send({ message: "Error del servidor" });
        } else {
            if (!userStored) {
                res.status(404).send({ message: "Error usuario no encontrado" });
            } else {
                bcrypt.compare(password, userStored.password, (err, check) => {
                    if (err) {
                        res.status(500).send({ message: "Error del servidor" });
                    } else if (!check) {
                        res.status(404).send({ message: "La contraseña es incorrecta" })
                    }
                    else {
                        res.status(200).send({
                            accessToken: jwt.createAccessToken(userStored),
                            refreshToken: jwt.createRefreshToken(userStored)
                        })
                    }
                })
            }
        }
    })
}

function updateUser(req, res) {
    const userData = req.body;
    const params = req.params;

    User.findByIdAndUpdate({ _id: params.id }, userData, (err, userUpdate) => {
        if (err) {
            res.status(500).send({ code: 500, message: "Error del servidor" });
        } else {
            if (!userUpdate) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el usuario" });
            } else {
                res.status(200).send({ code: 200, message: "Usuario actualizada correctamente" });
            }
        }
    })
}

function deleteUser(req, res) {
    const { id } = req.params;

    User.findByIdAndRemove(id, (err, userDeleted) => {
        if (err) {
            res.status(500).send({ cod: 500, message: "Error del servidor" });
        } else {
            if (!userDeleted) {
                res.status(404).send({ code: 404, message: "No se ha encontrado el usuario" });
            } else {
                res.status(200).send({ code: 200, message: "Usuario eliminada correctamente" });
            }
        }
    })
}

module.exports = {
    guardarUsuario,
    singIn,
    getUsers,
    singIn2,
    updateUser,
    deleteUser
}