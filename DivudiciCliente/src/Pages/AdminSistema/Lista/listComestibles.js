import React, { useState, useEffect } from 'react';
import '../ListaEstilos/listComestibles.css';
import { getComestibleApi } from "../../../Api/Sistema/comestibles";
import ListaComestible from "../../../Components/Comestibles/ListaComestibles";
import { Link } from 'react-router-dom';
export default function ListComestibles() {

    const [comestibles, setComestibles] = useState([]);
    const [reloadComes, setReloadComes] = useState(false);

    useEffect(() => {
        getComestibleApi().then(response => {
            setComestibles(response.comestible);
            console.log(response);
        });
        setReloadComes(false)
    }, [reloadComes])


    return (

        <>
            <div className="row">
                <div className="col-2">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-sm" id="bannerListComestible">
                            <br />
                            <br />
                            <h2 className="listLabel">Lista de Comestibles</h2>
                            <div className="row">
                                <div id="circle-background">
                                    <img
                                        src="https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png"
                                        alt="" id="imgListComes" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm">

                    <div className="row-row-cols-lg-6">
                    <ListaComestible comestibles={comestibles} setReloadComes={setReloadComes} />
                    </div>
                    <div className="row">
                        <div className="col-sm d-flex justify-content-center">
                            <Link to='/AdminSistema/FormComestibles'><button className="btn btn-secondary ">Agregar Comestibles</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}