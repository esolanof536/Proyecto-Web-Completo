import { BASE_PATH, apiVersion } from "../config";
import jwtDecode from 'jwt-decode'

export function agregarUsuariosApi(data) {

    const url = `${BASE_PATH}/${apiVersion}/agregar-Usuario`;
    const params = {

        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }

    };



    return fetch(url, params).then(response => {
        return response.json()
    }).then(result => {
        return result;
    }).catch(err => {
        return err;
    })
}


export function getUsersApi() {
    const url = `${BASE_PATH}/${apiVersion}/users`;

    const params = {

        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        mode: "cors"
    };

    return fetch(url, params).then(response => {
        return response.json()
    }).then(result => {
        return result;
    }).catch(err => {
        return err;
    })
}
//hace inicio de sesion
export function signInApi(data) {
    const url = `${BASE_PATH}/${apiVersion}/sign-in`;
    const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    };
    return fetch(url, params).then(response => {
        return response.json();
    }).then(result => {
        return result;
    }).catch(error => {
        return error.message;
    })

}
export function updateUserApi(user, userId) {
    const url = `${BASE_PATH}/${apiVersion}/updateUser/${userId}`;

    const params = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }

    return fetch(url, params).then(response => {
        return response.json();
    }).then(result => {
        return result;
    }).catch(err => {
        return err;
    })
}

export function deleteBusetaApi(id) {
    const url = `${BASE_PATH}/${apiVersion}/deleteUser/${id}`;

    const params = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    };

    return fetch(url, params).then(response => {
        return response.json();
    }).then(result => {
        return result;
    }).catch(err => {
        return err;
    })

}