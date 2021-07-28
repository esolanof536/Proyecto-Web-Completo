import React, { useState, useEffect } from 'react';
import '../ListasEstilos/listBebCalientes.css';
import { getBebCalApi } from "../../../Api/bebidaCalientes";
import ListaBebCalientes from "../../../Components/BebidasCalientes/ListaBebCalientes";
import { Link } from 'react-router-dom';

export default function ListBebCalientes() {

    const [bebCal, setBebCal] = useState([]);
    const [reloadBebCal, setReloadBebCal] = useState(false);


    useEffect(() => {
        getBebCalApi().then(response => {
            setBebCal(response.bebCal);
        });
        setReloadBebCal(false)
    }, [reloadBebCal])
    return (

        <>
            <div className="row">
                <div className="col-2">
                    <div class="row">
                        <div class="col-1"></div>
                        <div class="col-sm" id="bannerBebCal">
                            <br />
                            <br />
                            <h2 class="listLabel">Lista de Bebidas Calientes</h2>
                            <div class="row">
                                <div id="circle-background">
                                    <img src="https://i.pinimg.com/originals/aa/95/01/aa9501df489c885cce3f31b0fc6234ef.png" alt="" id="imgCoffee" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm">

                    <div className="row-row-cols-lg-6">
                        <ListaBebCalientes bebCalientes={bebCal} setReloadBebCal={setReloadBebCal} />
                    </div>
                    <div className="row">
                        <div className="col-sm d-flex justify-content-center">
                            <Link to='/AdminRestaurante/AgregarBebidaCaliente' className='routing'><button class="btn btn-secondary ">Agregar Bebidas Calientes</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}