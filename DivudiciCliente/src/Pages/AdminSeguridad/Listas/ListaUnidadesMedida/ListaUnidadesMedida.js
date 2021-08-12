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

            <div className="row ml-3 my-2 p-3">
                <h1>Lista de Usuarios</h1>
            </div>
            <div className="row">
                <div className="col-sm pb-0 mb-0">
                    <div className="row-row-cols-xl-6 m-3">
                        <ListUM unidadesMedida={unidades} setReloadUM={setReloadUM} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm d-flex justify-content-center m-3">
                    <Link to='/adminSeguridad/addUnidadMedida' className='routing'><button class="btn btn-danger btn-lg">Agregar Unidades de Medida</button></Link>
                </div>
            </div>

        </>

    )

}