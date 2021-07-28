import React, { useState, useEffect } from 'react';
import "./ListaPaises.css";
import { getPaisApi } from "../../../../Api/Seguridad/paises";
import ListPaises from "../../../../Components/Paises/ListPaises";
import { Link } from 'react-router-dom';
export default function ListaPaises() {

    const [paises, setPaises] = useState([]);
    const [reloadPais, setReloadPais] = useState(false);


    useEffect(() => {
        getPaisApi().then(response => {
            setPaises(response.paises);
        });
        setReloadPais(false)
    }, [reloadPais])


    return (

        <>
            <div className="row">
                <div className="col-2">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-sm" id="bannerPais">
                            <br />
                            <br />
                            <h2 className="listLabel">Lista de Países</h2>
                            <div className="row">
                                <div id="circle-background">
                                    <img src="https://images.vexels.com/media/users/3/157970/isolated/preview/c156b4270aea292b9b335dd463ea17eb-earth-planet-icon-earth-icon-by-vexels.png" alt="" id="imgListPaises" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm">

                    <div className="row-row-cols-lg-6">
                    <ListPaises paises={paises} setReloadPais={setReloadPais} />
                    </div>
                    <div className="row">
                        <div className="col-sm d-flex justify-content-center">
                            <Link to='/adminSeguridad/addPais' className='routing'><button class="btn btn-secondary ">Agregar Paises</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}