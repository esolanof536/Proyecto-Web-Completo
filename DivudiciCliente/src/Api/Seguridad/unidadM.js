import { BASE_PATH, apiVersion } from "../config";

export function agregarUnidadMApi(data) {

    const url = `${BASE_PATH}/${apiVersion}/agregar-unidadmedida`;
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


export function getUMApi() {
    const url = `${BASE_PATH}/${apiVersion}/unidadesMedida`;

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

export function updateUMApi(user, userId) {
    const url = `${BASE_PATH}/${apiVersion}/updateUM/${userId}`;

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

export function deleteUMApi(id) {
    const url = `${BASE_PATH}/${apiVersion}/deleteUM/${id}`;

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

export function getUmedNameData() {
    const url = `${BASE_PATH}/${apiVersion}/GetUmedNameData`;

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