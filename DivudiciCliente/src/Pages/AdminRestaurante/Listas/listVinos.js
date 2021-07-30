import React, { useState, useEffect } from 'react';
import '../ListasEstilos/listVinos.css';
import { getVinosApi } from "../../../Api/vinos";
import ListaVinos from "../../../Components/Vinos/ListaVinos";
import { Link } from 'react-router-dom';
export default function ListVinos() {

    const [vinos, setVinoss] = useState([]);
    const [reloadVino, setReloadVino] = useState(false);

    useEffect(() => {
        getVinosApi().then(response => {
            setVinoss(response.vinos);
        });
        setReloadVino(false)
    }, [reloadVino])
    return (
        <>
            <div className="row">
                <div className="col-2">
                    <div class="row">
                        <div class="col-1"></div>
                        <div class="col-sm" id="bannerVino">
                            <br />
                            <br />
                            <h2 class="listLabel">Lista de Vinos</h2>
                            <div class="row">
                                <div id="circle-background">
                                    <img src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/wine-icon.png"
                                        alt="" id="imgWine" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm">

                    <div className="row-row-cols-lg-6">
                    <ListaVinos vinos={vinos} setReloadVino={setReloadVino} />
                    </div>
                    <div className="row">
                        <div className="col-sm d-flex justify-content-center">
                            <Link to='/AdminRestaurante/AgregarVino' className='routing'><button class="btn btn-secondary ">Agregar Vinos</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}