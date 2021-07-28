import React, { useState, useEffect } from 'react';
import '../ListaEstilos/listLimpiezaHigiene.css';
import { getLimpiezaApi } from "../../../Api/Sistema/limpieza";
import ListaLimpieza from "../../../Components/Limpieza/ListaLimpieza";
import { Link } from 'react-router-dom';
export default function ListLimpiezaHigiene() {

    const [limpieza, setLimpieza] = useState([]);
    const [reloadLim, setReloadLim] = useState(false);

    useEffect(() => {
        getLimpiezaApi().then(response => {
            setLimpieza(response.limpieza);
        });
        setReloadLim(false)
    }, [reloadLim])

    return (
        <>
            <div className="row">
                <div className="col-2">
                    <div class="row">
                        <div class="col-1"></div>
                        <div class="col-sm" id="bannerLimpieza">
                            <br />
                            <br />
                            <h2 class="listLabel">Lista de Limpieza e Higiene</h2>
                            <div class="row">
                                <div id="circle-background">
                                    <img src="https://image.flaticon.com/icons/png/512/578/578087.png"
                                        alt="" id="imgList" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm">

                    <div className="row-row-cols-lg-6">
                    <ListaLimpieza limpieza={limpieza} setReloadLim={setReloadLim} />
                    </div>
                    <div className="row">
                        <div className="col-sm d-flex justify-content-center">
                            <Link to='/AdminSistema/FormLimpHigiene'><button className="btn btn-secondary ">Agregar Limpieza e Higiene</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}