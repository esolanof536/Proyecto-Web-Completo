import { BASE_PATH, apiVersion } from "../config";

export function agregarLimpiezaApi(data) {

    const url = `${BASE_PATH}/${apiVersion}/agregar-LimpiezaHigiene`;
    const params = {

        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }

    };

    console.log(data);

    return fetch(url, params).then(response => {
        return response.json()
    }).then(result => {
        return result;
    }).catch(err => {
        return err;
    })
}

export function getLimpiezaApi() {
    const url = `${BASE_PATH}/${apiVersion}/limpieza`;

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

export function updateLimpiezaApi(user, userId) {
    const url = `${BASE_PATH}/${apiVersion}/updateLimpieza/${userId}`;

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

export function deleteLimpiezaApi(id) {
    const url = `${BASE_PATH}/${apiVersion}/deleteLimpieza/${id}`;

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