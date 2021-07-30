import React, { useState, useEffect } from 'react';
import '../ListasEstilos/listGaseosas.css';
import { getGaseosaApi } from "../../../Api/gaseosa";
import ListGaseosas from "../../../Components/Gaseosas/ListGaseosas";
import { Link } from 'react-router-dom';
export default function ListaGaseosas() {

    const [gaseosas, setGaseosas] = useState([]);
    const [reloadBebGas, setReloadBebGas] = useState(false);


    useEffect(() => {
        getGaseosaApi().then(response => {
            setGaseosas(response.gaseosas);
        });
        setReloadBebGas(false)
    }, [reloadBebGas])

    return (

        <>
            <div className="row">
                <div className="col-2">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-sm" id="bannerGaseosa">
                            <br />
                            <br />
                            <h2 className="listLabel">Lista de Gaseosas</h2>
                            <div className="row">
                                <div id="circle-background">
                                    <img src="https://img.icons8.com/color/452/soda-can.png"
                                        alt="" id="imgSoda" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm">

                    <div className="row-row-cols-lg-6">
                    <ListGaseosas gaseosas={gaseosas} setReloadBebGas={setReloadBebGas} />
                    </div>
                    <div className="row">
                        <div className="col-sm d-flex justify-content-center">
                            <Link to='/AdminRestaurante/AgregarBebidaGaseosa' className='routing'><button class="btn btn-secondary ">Agregar Gaseosas</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}