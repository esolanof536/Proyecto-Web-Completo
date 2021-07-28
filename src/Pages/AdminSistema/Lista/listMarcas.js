import React, { useState, useEffect } from 'react';
import '../ListaEstilos/listMarcas.css';
import { getMarcaApi } from "../../../Api/Sistema/marcas";
import ListaMarcas from "../../../Components/Marcas/ListaMarcas";
import { Link } from 'react-router-dom';
export default function ListMarcas() {

    const [marca, setMarca] = useState([]);
    const [reloadMarca, setReloadMarca] = useState(false);


    useEffect(() => {
        getMarcaApi().then(response => {
            setMarca(response.marcas);
        });
        setReloadMarca(false)
    }, [reloadMarca])

    return (
        <>
            <div className="row">
                <div className="col-2">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-sm" id="bannerMarcas">
                            <br />
                            <br />
                            <h2 className="listLabel">Lista de Marcas</h2>
                            <div className="row">
                                <div id="circle-background">
                                    <img src="https://icon-library.com/images/favorite-icon/favorite-icon-14.jpg"
                                        alt="" id="imgListMarca" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm">

                    <div className="row-row-cols-lg-6">
                        <ListaMarcas marcas={marca} setReloadMarca={setReloadMarca} />
                    </div>
                    <div className="row">
                        <div className="col-sm d-flex justify-content-center">
                            <Link to='/AdminSistema/AgregarMarcas'><button className="btn btn-secondary ">Agregar Marcas</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}