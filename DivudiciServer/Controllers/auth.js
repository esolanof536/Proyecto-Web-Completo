const jwt = require("../Services/jwt");
const moment = require("moment");
const User = require('../Models/Usuarios');

//verifica si el token ha expirado desde el lado del servidor
function willExpireToken(token) {
    const { exp } = jwt.decodedToken(token);
    //obtiene fecha de how
    const currentDate = moment().unix();
    if (currentDate > exp) {
        return true
    }
    return false;
}

function refreshAccessToken(req, res) {
    console.log('Refrescando access token')
    const { refreshToken } = req.body;
    //comprueba si access token ha caducado
    const isTokenExpired = willExpireToken(refreshToken);

    if (isTokenExpired) {
        res.status(404).send({ message: "El refresh token ha caducado" })
    } else {

        //sacamos el id del token
        const { id } = jwt.decodedToken(refreshToken);
        //busca usuario por el ID
        User.findOne({ _id: id }, (err, userStored) => {
            if (err) {
                res.status(500).send({ message: "Error del servidor" })
            } else {
                if (!userStored) {
                    res.status(404).send({ message: "Usuario no encontrado" })
                } else {
                    //mientras el refresh token sea valido va a refrescar cuantas veces sean necesarias el
                    //access token
                    res.status(200).send({
                        accessToken: jwt.createAccessToken(userStored),
                        refreshToken: refreshToken
                    })
                }
            }
        });
    }
}

module.exports = {
    refreshAccessToken
};