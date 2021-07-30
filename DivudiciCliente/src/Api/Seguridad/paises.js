import { BASE_PATH, apiVersion } from "../config";

export function agregarPaisApi(data) {

    const url = `${BASE_PATH}/${apiVersion}/agregar-pais`;
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

export function getPaisApi() {
    const url = `${BASE_PATH}/${apiVersion}/paises`;

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
export function updatePaisApi(user, userId) {
    const url = `${BASE_PATH}/${apiVersion}/updatePais/${userId}`;

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

export function deletePaisaApi(id) {
    const url = `${BASE_PATH}/${apiVersion}/deletePais/${id}`;

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

export function getPaisName() {
    const url = `${BASE_PATH}/${apiVersion}/namePaises`;

    const params = {

        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        mode: "no-cors"
    };

    return fetch(url, params).then(response => {
        return response.json()
    }).then(result => {
        return result;
    }).catch(err => {
        return err;
    })
}