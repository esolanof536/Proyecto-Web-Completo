import React, { useState, useEffect } from 'react';
import '../ListasEstilos/listaLicores.css';
import { getLicoresApi } from "../../../Api/licores";
import ListLicores from "../../../Components/Licores/ListLicores";
import { Link } from 'react-router-dom';
export default function ListaLicores() {

    const [licores, setLicores] = useState([]);
    const [reloadLicor, setReloadLicor] = useState(false);


    useEffect(() => {
        getLicoresApi().then(response => {
            setLicores(response.licores);
        });
        setReloadLicor(false)
    }, [reloadLicor])

    return (
        <>
            <div className="row">
                <div className="col-2">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-sm" id="bannerLicor">
                            <br />
                            <br />
                            <h2 className="listLabel">Lista de Licores</h2>
                            <div className="row">
                                <div id="circle-background">
                                    <img src="https://icons-for-free.com/iconfiles/png/512/beer-1320568024709964641.png" alt="" id="imgBeer" />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-sm">

                    <div className="row-row-row-cols-lg-6">
                    <ListLicores licores={licores} setReloadLicor={setReloadLicor} />
                    </div>
                    <div className="row">
                        <div className="col-sm d-flex justify-content-center">
                            <Link to='/AdminRestaurante/AgregarLicores' className='routing'><button class="btn btn-secondary ">Agregar Licores</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}