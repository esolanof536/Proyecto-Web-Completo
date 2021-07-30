import React, { useState, useEffect } from 'react';
import '../ListaEstilos/listEqUtencilios.css';
import { getEquiposApi } from "../../../Api/Sistema/equipos";
import ListaEquipos from "../../../Components/EquiposUtensilios/ListaEquipos";
import { Link } from 'react-router-dom';
export default function ListEqutencilios() {

    const [equipos, setEquipos] = useState([]);
    const [reloadEquipo, setReloadEquipo] = useState(false);

    useEffect(() => {
        getEquiposApi().then(response => {
            setEquipos(response.equipos);
        });
        setReloadEquipo(false)
    }, [reloadEquipo])

    return (
        <>
            <div className="row">
                <div className="col-2">
                    <div class="row">
                        <div class="col-1"></div>
                        <div class="col-sm" id="bannerEquipo">
                            <br />
                            <br />
                            <h2 class="listLabel">Lista de Equipos y Utensilios</h2>
                            <div class="row">
                                <div id="circle-background">
                                    <img src="https://icons-for-free.com/iconfiles/png/512/linecolor+version+svg+cutlery-1319964497043734753.png"
                                        alt="" id="imgListEquipo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm">

                    <div className="row-row-cols-lg-6">
                        <ListaEquipos equipos={equipos} setReloadEquipo={setReloadEquipo} />
                    </div>
                    <div className="row">
                        <div className="col-sm d-flex justify-content-center">
                            <Link to='/AdminSistema/FormEqutencilios'><button className="btn btn-secondary ">Agregar Equipos y Utencilios</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}