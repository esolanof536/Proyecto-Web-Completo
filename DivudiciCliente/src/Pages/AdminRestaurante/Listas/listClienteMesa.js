import React, { useState, useEffect } from 'react';
import { getFactMesaApi } from "../../../Api/factMesa";
import ListClientesMesa from "../../../Components/ClientesMesa/ListaClienteMesa";
import "../ListasEstilos/listClienteMesa.css";
export default function ListaClienteMesa() {
    const [cliMesa, setCliMesa] = useState([]);

    useEffect(() => {
        getFactMesaApi().then(response => {
            setCliMesa(response.factMesa);
        })
    }, [])

    return (
        <>
            <div className="row">
                <div className="col-2">
                    <div class="row">
                        <div class="col-1"></div>
                        <div class="col-sm" id="bannerCliMesa">
                            <br />
                            <br />
                            <h2 class="listLabel">Clientes en Mesa</h2>
                            <div class="row">
                                <div id="circle-background">
                                    <img src="https://pics.freeicons.io/uploads/icons/png/3869891641538117463-512.png" alt="" id="imgListCliMesa" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="row-row-cols-lg-6">
                        <ListClientesMesa clieMesa={cliMesa} />
                    </div>

                </div>

            </div>
        </>
    )
}