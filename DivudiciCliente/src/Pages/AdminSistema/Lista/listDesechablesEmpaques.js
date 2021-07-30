import React, { useState, useEffect } from 'react';
import '../ListaEstilos/listDesechablesEmpaques.css';
import { getDesechablesApi } from "../../../Api/Sistema/desechables";
import ListaDesechables from "../../../Components/Desechables/ListaDesechables";
import { Link } from 'react-router-dom';
export default function ListaDesechablesEmpaques() {

    const [desechables, setDesechables] = useState([]);
    const [reloadDesechable, setReloadDesechable] = useState(false);

    useEffect(() => {
        getDesechablesApi().then(response => {
            setDesechables(response.desechables);
        });
        setReloadDesechable(false);
    }, [reloadDesechable])

    return (

        <>
            <div className="row">
                <div className="col-2">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-sm" id="bannerDesechables">
                            <br />
                            <br />
                            <h2 className="listLabel">Lista de Desechables y Empaques</h2>
                            <div className="row">
                                <div id="circle-background">
                                    <img src="https://cdn.iconscout.com/icon/free/png-256/delivery-box-51-1158331.png" alt="" id="imgListDesechable" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm">

                    <div className="row-row-cols-lg-6">
                        <ListaDesechables desechables={desechables} setReloadDesechable={setReloadDesechable} />
                    </div>
                    <div className="row">
                        <div className="col-sm d-flex justify-content-center">
                            <Link to='/AdminSistema/FormDesEmpaques'><button className="btn btn-secondary ">Agregar Desechables y Empaques</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}
