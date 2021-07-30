import { BASE_PATH, apiVersion } from "../config.js";

export function addAbrirCajasApi(data){
    const url = `${BASE_PATH}/${apiVersion}/addCajaAbierta`;
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

export function getAbrirCajaApi() {
    const url = `${BASE_PATH}/${apiVersion}/abrirCaja`;
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