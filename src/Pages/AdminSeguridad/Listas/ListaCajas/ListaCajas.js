import React, { useState, useEffect } from 'react';
import "./ListaCaja.css";
import { getCajasApi } from "../../../../Api/Seguridad/cajas";
import ListCajas from "../../../../Components/Cajas/ListCajas";
import { Link } from 'react-router-dom';
export default function ListaCajas() {

    const [cajas, setCajas] = useState([]);

    // console.log(unidades);

    useEffect(() => {
        getCajasApi().then(response => {
            setCajas(response.cajas);
        })
    }, [])

    return (

        <>
            <div className="row">
                <div className="col-2">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-sm" id="bannerCajas">
                            <br />
                            <br />
                            <h2 className="listLabel">Lista de Cajas</h2>
                            <div className="row">
                                <div id="circle-background">
                                    <img src="https://cdn.iconscout.com/icon/free/png-256/cash-register-122-1111895.png" alt="" id="imgList" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm">

                    <div className="row-row-cols-lg-6">
                        <ListCajas cajas={cajas} />
                    </div>
                    <div className="row">
                        <div className="col-sm d-flex justify-content-center">
                            <Link to='/AdminRestaurante/AgregarBebidaHelada' className='routing'><button class="btn btn-secondary ">Agregar Cajas</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}