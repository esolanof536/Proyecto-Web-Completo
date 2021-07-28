import { BASE_PATH, apiVersion } from "../config";

export function agregarProveedorApi(data) {

    const url = `${BASE_PATH}/${apiVersion}/agregar-Proveedor`;
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


export function getProveedorApi() {
    const url = `${BASE_PATH}/${apiVersion}/proveedores`;

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

export function updateProveedoresApi(user, userId) {
    const url = `${BASE_PATH}/${apiVersion}/updateProveedor/${userId}`;

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

export function deleteProveedoresApi(id) {
    const url = `${BASE_PATH}/${apiVersion}/deleteProveedor/${id}`;

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