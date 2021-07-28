import React, { useState, useEffect } from 'react';
import '../ListasEstilos/listEspeciales.css';
import { getEspecialesApi } from "../../../Api/especiales";
import ListaEspeciales from "../../../Components/Especiales/ListaEspeciales";
import { Link } from 'react-router-dom';

export default function ListEspeciales() {

    const [especialidades, setEspecialidades] = useState([]);
    const [reloadEspe, setReloadEspe] = useState(false);

    useEffect(() => {
        getEspecialesApi().then(response => {
            setEspecialidades(response.especialidades);
        });
        setReloadEspe(false);
    }, [reloadEspe])

    return (
        <>
            <div className="row">
                <div className="col-2">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-sm" id="bannerEspeciales">
                            <br />
                            <br />
                            <h2 className="listLabel">Lista de  Especialidades</h2>
                            <div className="row">
                                <div id="circle-background">
                                    <img src="https://cdn0.iconfinder.com/data/icons/restaurants-and-dining-filled-outline/340/food_steak_dish_meat_meal_grilled_plate_beef-512.png" alt="" id="imgList" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm">

                    <div className="row-row-cols-lg-6">
                    <ListaEspeciales especiales={especialidades} setReloadEspe={setReloadEspe} />
                    </div>
                    <div className="row">
                        <div className="col-sm d-flex justify-content-center">
                            <Link to='/AdminRestaurante/AgregarEspecialidades' className='routing'><button class="btn btn-secondary ">Agregar Especiales</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}