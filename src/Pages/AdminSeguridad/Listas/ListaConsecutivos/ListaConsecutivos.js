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

            <div className="row">
                <div className="col-2">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-sm" id="bannerConse">
                            <br />
                            <br />
                            <h2 className="listLabel">Lista de Consecutivos</h2>
                            <div className="row">
                                <div id="circle-background">
                                    <img src="https://cdn2.iconfinder.com/data/icons/flat-icons-19/512/Settings.png" alt="" id="imgConseList" />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-sm">

                    <div className="row-row-cols-lg-6">
                    <ListConsecutivos conse={conse} setReloadConse={setReloadConse} />
                    </div>
                    <div className="row">
                        <div className="col-sm d-flex justify-content-center">
                            <Link to='/adminSeguridad/addConsecutivo' className='routing'><button className="btn btn-secondary ">Agregar Consecutivos</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}