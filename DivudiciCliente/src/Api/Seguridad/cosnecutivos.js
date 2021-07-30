import { BASE_PATH, apiVersion } from "../config";

export function agregarConsecuApi(data) {

    const url = `${BASE_PATH}/${apiVersion}/agregar-consecutivo`;
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

export function getConsecutivosApi() {
    const url = `${BASE_PATH}/${apiVersion}/consecutivos`;

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

export function getConsecuApi(data) {

    const url = `${BASE_PATH}/${apiVersion}/consecu`;
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
export function updateConseApi(user, userId) {
    const url = `${BASE_PATH}/${apiVersion}/updateConse/${userId}`;

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

export function deleteConseApi(id) {
    const url = `${BASE_PATH}/${apiVersion}/deleteConse/${id}`;

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