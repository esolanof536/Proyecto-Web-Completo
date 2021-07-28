import React, { useState } from 'react';
import "./abrirCaja.css"
import { ACCESS_TOKEN } from '../../../Utils/constants'
import { notification } from 'antd';
import { addAbrirCajasApi } from '../../../Api/Caja/abrirCaja.js'
import jwtDecode from 'jwt-decode';

export default function AperturaCaja() {
    //saca el token de localStorage y luego obtiene cual restaurante es
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    //iguala la constante metatoken a accessToken decodificado con la libreria jwtDecode
    const metaToken = jwtDecode(accessToken);
    //Con destructuracion saca el atributo de restaurante
    const { Restaurante } = metaToken;
    //window.location.href='/AdminRestaurante'
    console.log(Restaurante)

    const [inputs, setInputs] = useState({
        Restaurante: Restaurante,
        monto: ""
    });

    const changeForm = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    }

    //INGRESO DE APERTURA DE CAJA. REPLICAR EN CERRAR CAJA
    const addCaja = async e => {
        e.preventDefault();
        console.log(inputs);

        const result = await addAbrirCajasApi(inputs)

        if (result.message) {
            notification['error']({
                message: result.message
            })
        } else {
            notification['success']({
                message: 'Apertura de caja agregada'
            })

            window.location.href = '/AdminRestaurante';
        }
    }


    return (

        <>
            <div class="container" id="AptCajaContainer">
                <br />
                <h1>Apertura de Caja</h1>
                <div class="container">
                    <form onSubmit={addCaja} onChange={changeForm}>
                        <div class="row">
                            <div class="col-sm">
                                <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/wallet.png" id="aptCajaLogo" />
                            </div>
                            <div class="col-sm">
                                <div class="row">
                                    <div class="col-5">
                                        <h5>Restaurante</h5>
                                    </div>
                                    <div class="col-sm">
                                        <h5>Monto Apertuta</h5>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-5">
                                        <input type="text" class="form-control" name='Restaurante' disabled={true} value={inputs.Restaurante} />
                                    </div>
                                    <div class="col-sm">
                                        <input type="number" class="form-control" name='monto' value={inputs.monto} />
                                    </div>
                                </div>
                                <br />
                                <div class="row">
                                    <div class="col-sm">
                                        <button type="submit">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
