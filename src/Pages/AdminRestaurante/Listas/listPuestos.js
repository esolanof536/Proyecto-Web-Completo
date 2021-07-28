import React, { useState, useEffect } from 'react';
import '../ListasEstilos/listPuestos.css';
import { getPuestosApi } from "../../../Api/puestos";
import ListaPuestos from "../../../Components/Puestos/ListaPuestos";
import { Link } from 'react-router-dom';
export default function ListPuestos() {

    const [puestos, setPuestos] = useState([]);
    const [reloadPuesto, setReloadPuesto] = useState(false);

    useEffect(() => {
        getPuestosApi().then(response => {
            setPuestos(response.puestos);
        });
        setReloadPuesto(false)
    }, [reloadPuesto])


    return (

        <>
            <div className="row">
                <div className="col-2">
                    <div class="row">
                        <div class="col-1"></div>
                        <div class="col-sm" id="bannerPuestos">
                            <br />
                            <br />
                            <h2 class="listLabel">Lista de Puestos</h2>
                            <div class="row">
                                <div id="circle-background">
                                    <img src="https://image.flaticon.com/icons/png/512/554/554857.png" alt="" id="imgListPuestos" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm">

                    <div className="row-row-cols-lg-6">
                    <ListaPuestos puestos={puestos} setReloadPuesto={setReloadPuesto} />
                    </div>
                    <div className="row">
                        <div className="col-sm d-flex justify-content-center">
                            <Link to='/AdminRestaurante/AgregarPuestos' className='routing'><button class="btn btn-secondary ">Agregar Puestos</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );

}
