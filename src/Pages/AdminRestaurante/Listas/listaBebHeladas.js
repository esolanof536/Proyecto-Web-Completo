import React, { useState, useEffect } from 'react';
import '../ListasEstilos/listaBebHeladas.css';
import { getBebCalApi } from "../../../Api/bebidaHelada";
import ListaBebHeladas from "../../../Components/BebidasHeladas/ListBebidasHeladas";
import { Link } from 'react-router-dom';
export default function ListBebHeladas() {

    const [bebHel, setBebHel] = useState([]);
    const [reloadBebHel, setReloadBebHel] = useState(false);
    // console.log(unidades);

    useEffect(() => {
        getBebCalApi().then(response => {
            setBebHel(response.bebHel);
        });
        setReloadBebHel(false)
    }, [reloadBebHel])
    return (

        <>

            <div className="row">
                <div className="col-2">
                    <div class="row">
                        <div class="col-1"></div>
                        <div class="col-sm" id="bannerBebHel">
                            <br />
                            <br />
                            <h2 class="listLabel">Lista de Bebidas Frias</h2>
                            <div class="row">
                                <div id="circle-background">
                                    <img src="https://www.pngrepo.com/png/276759/512/juice.png" alt="" id="imgBebHelada" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm">

                    <div className="row-row-cols-lg-6">
                    <ListaBebHeladas bebHeladas={bebHel} setReloadBebHel={setReloadBebHel} />
                    </div>
                    <div className="row">
                        <div className="col-sm d-flex justify-content-center">
                            <Link to='/AdminRestaurante/AgregarBebidaHelada' className='routing'><button class="btn btn-secondary ">Agregar Bebidas Frias</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}