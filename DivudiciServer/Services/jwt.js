const jwt = require("jwt-simple");
const moment = require("moment")

//creacion de clave secreta que en teoria nadie deberia de ver
const SECRET_KEY = 'iud5443f6Vd238rKvd7d!@nf24NsfWa3)+1&*432^^(^vaustdvaiVGAh71';

//los parametros de name, lastname, email, role, estan para ser utilizados dentro del proyecto
//la cointrasena no se pone dentro del token porque cualquier persona que tenga acceso al token
//puede decodificarla
//el token lo que me dice es si el usuario esta loggeado o no
exports.createAccessToken = function (user) {
    //datos que devuelve o que se requieren insertar en el token.
    const payload = {
        id: user._id,
        name: user.nombre,
        lastname: user.primerApellido,
        username: user.username,
        Restaurante: user.Restaurante,
        admin: user.admin,
        //fecha de creacion
        createToken: moment().unix(),
        //fecha de expiracion
        exp: moment().add(3, "hours").unix()
    };
    return jwt.encode(payload, SECRET_KEY);
};

exports.createRefreshToken = function (user) {
    const payload = {
        id: user._id,
        exp: moment().add(30, "days").unix()
    };
    return jwt.encode(payload, SECRET_KEY);
}

//decodificador de tokens
exports.decodedToken = function (token) {
    return jwt.decode(token, SECRET_KEY, true)
}