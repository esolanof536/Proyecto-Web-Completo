import { BASE_PATH, apiVersion } from "./config";

export function agregarMesasApi(data) {

    const url = `${BASE_PATH}/${apiVersion}/agregar-Mesas`;
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

export function getMesasApi() {
    const url = `${BASE_PATH}/${apiVersion}/mesas`;

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


export function updateMesaApi(user, userId) {
    const url = `${BASE_PATH}/${apiVersion}/updateMesa/${userId}`;

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

export function deleteMesaApi(id) {
    const url = `${BASE_PATH}/${apiVersion}/deleteMesa/${id}`;

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

export function getMesaEspecifica(codigo) {
    const url = `${BASE_PATH}/${apiVersion}/getMesaEspecifica/${codigo}`;

    const params = {

        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        mode: "cors"
    };

    return fetch(url).then(response => {
        return response.json()
    }).then(result => {
        return result;
    }).catch(err => {
        return err;
    })
}

export function getMesasNameApi() {
    const url = `${BASE_PATH}/${apiVersion}/getMesaName`;

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

export function getMesaOcupada(data) {
    const url = `${BASE_PATH}/${apiVersion}/getMesaOcupada`;
    const params = {
        method: "Post",
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

export function getMesaEspecificaName(nombre) {
    const url = `${BASE_PATH}/${apiVersion}/getMesaEspecificaName/${nombre}`;

    const params = {

        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        mode: "cors"
    };

    return fetch(url).then(response => {
        return response.json()
    }).then(result => {
        return result;
    }).catch(err => {
        return err;
    })
}