import { BASE_PATH, apiVersion } from "./config";

export function agregarBebidaGaseosaApi(data) {

    const url = `${BASE_PATH}/${apiVersion}/agregar-BebidaGaseosa`;
    const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    };
    console.log(data);
    return fetch(url, params).then(response => {
        return response.json();
    }).then(result => {
        return result;
    }).catch(error => {
        return error.message;
    })
}


export function getGaseosaApi() {
    const url = `${BASE_PATH}/${apiVersion}/gaseosa`;

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

export function updateBebGasApi(user, userId) {
    const url = `${BASE_PATH}/${apiVersion}/updateBebGas/${userId}`;

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

export function deleteBebGasApi(id) {
    const url = `${BASE_PATH}/${apiVersion}/deleteBebGas/${id}`;

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