import React, { useState, useEffect } from 'react';
import "./ListaConsecutivos.css";
import { getConsecutivosApi } from "../../../../Api/Seguridad/cosnecutivos";
import ListConsecutivos from "../../../../Components/Consecutivos/ListConsecutivos";
import { Link } from 'react-router-dom';

export default function ListaConsecutivos() {

    const [conse, setConse] = useState([]);
    const [reloadConse, setReloadConse] = useState(false);

    useEffect(() => {
        getConsecutivosApi().then(response => {
            setConse(response.conse);
        });
        setReloadConse(false)
    }, [reloadConse])



    return (

        <>
            <div className="row m-3 my-2 p-3">
                <h1>Lista de Consecutivos</h1>
            </div>
            <div className="row">
                <div className="col-sm pb-0 mb-0">
                    <div className="row-row-cols-lg-6 m-3">
                        <ListConsecutivos conse={conse} setReloadConse={setReloadConse} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm d-flex justify-content-center m-3">
                    <Link to='/adminSeguridad/addConsecutivo' className='routing'><button className="btn btn-danger btn-lg">Agregar Consecutivos</button></Link>
                </div>
            </div>

        </>

    )

}