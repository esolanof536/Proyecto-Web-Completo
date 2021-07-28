import React, { useState, useEffect } from 'react';
import "../ListasEstilos/listClientesBarra.css";
import { getClienteBarraApi } from "../../../Api/clientesBarra";
import ListaClientesBarra from "../../../Components/ClientesBarra/ListaClientesBarra";

export default function ListClientesBarra() {

    const [cliBarra, setCliBarra] = useState([]);

    useEffect(() => {
        getClienteBarraApi().then(response => {
            setCliBarra(response.cliBarra);
        })
    }, [])

    return (
        <>
            <div className="row">
                <div className="col-2">
                    <div class="row">
                        <div class="col-1"></div>
                        <div class="col-sm" id="bannerCliBarra">
                            <br />
                            <br />
                            <h2 class="listLabel">Clientes en Barra</h2>
                            <div class="row">
                                <div id="circle-background">
                                    <img src="https://image.flaticon.com/icons/png/512/146/146548.png" alt="" id="imgCocktail" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="row-row-cols-lg-6">
                        <ListaClientesBarra cliBarra={cliBarra} />
                    </div>

                </div>

            </div>
        </>
    )
}