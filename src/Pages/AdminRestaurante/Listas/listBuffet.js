import React, { useState, useEffect } from 'react';
import '../ListasEstilos/listBuffet.css'
import { getBuffetApi } from "../../../Api/buffet";
import ListaBuffet from "../../../Components/Buffets/ListaBuffet";
import { Link } from 'react-router-dom';
export default function ListBuffet() {

    const [buffet, setBuffet] = useState([]);
    const [reloadBuffet, setReloadBuffet] = useState(false);


    useEffect(() => {
        getBuffetApi().then(response => {
            setBuffet(response.buffet);
        });
        setReloadBuffet(false)
    }, [reloadBuffet])

    return (

        <>
            <div className="row">
                <div className="col-2">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-sm" id="bannerBuffet">
                            <br />
                            <br />
                            <h2 className="listLabel">Lista del Buffet</h2>
                            <div className="row">
                                <div id="circle-background">
                                    <img src="https://image.flaticon.com/icons/png/512/1677/1677283.png"
                                        alt="" id="imgListBuffet" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm">

                    <div className="row-row-cols-lg-6">
                    <ListaBuffet buffets={buffet} setReloadBuffet={setReloadBuffet} />
                    </div>
                    <div className="row">
                        <div className="col-sm d-flex justify-content-center">
                            <Link to='/AdminRestaurante/AgregarBuffet' className='routing'><button class="btn btn-secondary ">Agregar Buffet</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}