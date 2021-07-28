import { BASE_PATH, apiVersion } from "../config";

export function agregarMarcaApi(data) {

    const url = `${BASE_PATH}/${apiVersion}/agregar-Marca`;
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


export function getMarcaApi() {
    const url = `${BASE_PATH}/${apiVersion}/marcas`;

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

export function updateMarcaApi(user, userId) {
    const url = `${BASE_PATH}/${apiVersion}/updateMarca/${userId}`;

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

export function deleteMarcaApi(id) {
    const url = `${BASE_PATH}/${apiVersion}/deleteMarca/${id}`;

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
export function getMarcaName() {
    const url = `${BASE_PATH}/${apiVersion}/nameMarca`;

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