import { BASE_PATH, apiVersion } from "./config";

export function agregarCliMesaApi(data) {

    const url = `${BASE_PATH}/${apiVersion}/agregar-ClienteMesa`;
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

export function getFactMesaApi() {
    const url = `${BASE_PATH}/${apiVersion}/factMesa`;

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