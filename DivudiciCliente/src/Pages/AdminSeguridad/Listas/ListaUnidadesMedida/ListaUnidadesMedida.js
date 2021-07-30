import React, { useState, useEffect } from 'react';
import "./ListaUnidadesMedida.css";
import { getUMApi } from "../../../../Api/Seguridad/unidadM";
import ListUM from "../../../../Components/UnidadMedida/ListUM";
import { Link } from 'react-router-dom';
export default function ListaUnidadesMedida() {

    const [unidades, setUnidades] = useState([]);
    const [reloadUM, setReloadUM] = useState(false);

    console.log(unidades);

    useEffect(() => {
        getUMApi().then(response => {
            setUnidades(response.unidades);
            console.log(response);
        });
        setReloadUM(false);
    }, [reloadUM])

    return (

        <>

            <div className="row">
                <div className="col-2">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-sm" id="bannerUM">
                            <br />
                            <br />
                            <h2 className="listLabel">Lista de Equipos y Utensilios</h2>
                            <div className="row">
                                <div id="circle-background">
                                    <img src="https://cdn.iconscout.com/icon/free/png-256/balance-353-1162439.png" alt="" id="imgList" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm">

                    <div className="row-row-cols-xl-6">
                    <ListUM unidadesMedida={unidades} setReloadUM={setReloadUM} />
                    </div>
                    <div className="row">
                        <div className="col-sm d-flex justify-content-center">
                            <Link to='/adminSeguridad/addUnidadMedida' className='routing'><button class="btn btn-secondary ">Agregar Unidades de Medida</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}