import { BASE_PATH, apiVersion } from './config';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../Utils/constants'
import jwtDecode from 'jwt-decode'

//obtiene access Token
export function getAccessTokenApi() {
    //obtiene accessToken de local storage
    //local storage => inspeccionar/aplicacion/Local Storage
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    //comprueba si el access token ha caducado o no
    //si ha caducado retorna null
    //si access token no ha caducado devuelve el access token
    if (!accessToken || accessToken === "null") {
        return null;
    }
    //si devuelve true ha expirado y en consola devuelve null. 
    //Si devuelve false no ha expirado y devuelve el access token en consola
    return willExpireToken(accessToken) ? null : accessToken;

}
export function getRefreshTokenApi() {
    //obtiene refreshToken de local storage
    //local storage => inspeccionar/aplicacion/Local Storage
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    if (!refreshToken || refreshToken === "null") {
        return null
    }
    return willExpireToken(refreshToken) ? null : refreshToken;
}
function willExpireToken(token) {
    const seconds = 60;
    //decodifica el token
    const metaToken = jwtDecode(token);

    const { exp } = metaToken;
    //obtiene la fecha de hoy para realizar comparacion con el token
    const now = (Date.now() + seconds) / 1000;
    // si now es mayor que la fecha de expiracion el token ha caducado
    return now > exp;
    //devuelve true si token expiro y false si no ha expirado
}
export function refreshAccessTokenApi(refreshToken) {
    const url = `${BASE_PATH}/${apiVersion}/refresh-access-token`
    const bodyObject = {
        refreshToken: refreshToken
    }
    const params = {
        method: "POST",
        body: JSON.stringify(bodyObject),
        mode: 'no-cors',
        headers: {
            "Content-Type": "application/json"
        }
    };
    fetch(url, params)
        .then(response => {
            if (response.status !== 200) {
                return null;
            }
            return response.json();
        })
        .then(result => {
            if (!result) {
                logOut();
            } else {
                const { accessToken, refreshToken } = result;
                localStorage.setItem(ACCESS_TOKEN, accessToken);
                localStorage.setItem(REFRESH_TOKEN, refreshToken);
            }
        })
}
//funcion para deslogear al usuario
//lo que hace es literalemente borrar los tokens del local storage
export function logOut() {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
}

