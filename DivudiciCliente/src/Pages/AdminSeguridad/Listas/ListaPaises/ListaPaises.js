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
            <div className="row ml-3 my-2 p-3">
                <h1>Lista de Paises</h1>
            </div>
            <div className="row">
                <div className="col-sm pb-0 mb-0">

                    <div className="row-row-cols-lg-6 m-3">
                        <ListPaises paises={paises} setReloadPais={setReloadPais} />
                    </div>

                </div>
            </div>
            <div className="row">
                <div className="col-sm d-flex justify-content-center m-3">
                    <Link to='/adminSeguridad/addPais' className='routing'><button class="btn btn-danger btn-lg">Agregar Paises</button></Link>
                </div>
            </div>

        </>
    )

}