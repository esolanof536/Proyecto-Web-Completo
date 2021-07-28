import { BASE_PATH, apiVersion } from "./config";

export function agregarBebidaHeladaApi(data) {

    const url = `${BASE_PATH}/${apiVersion}/agregar-BebidaHelada`;
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

export function getBebCalApi() {
    const url = `${BASE_PATH}/${apiVersion}/bebHeladas`;

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

export function updateBebHelApi(user, userId) {
    const url = `${BASE_PATH}/${apiVersion}/updateBebHel/${userId}`;

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

export function deleteBebHelApi(id) {
    const url = `${BASE_PATH}/${apiVersion}/deleteBebHel/${id}`;

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