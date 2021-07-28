import React, { useState, useEffect } from 'react';
import '../ListaEstilos/listProveedores.css';
import { getProveedorApi } from "../../../Api/Sistema/proveedor";
import ListaProveedores from "../../../Components/Proveedores/ListaProveedores";
import { Link } from 'react-router-dom';

export default function ListProveedores() {

    const [proveedores, setProveedores] = useState([]);
    const [reloadProveedores, setReloadProveedores] = useState(false);


    useEffect(() => {
        getProveedorApi().then(response => {
            setProveedores(response.proveedor);

        });
        setReloadProveedores(false);
    }, [reloadProveedores])

    return (

        <>
            <div className="row">
                <div className="col-2">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-sm" id="bannerProveedores">
                            <br />
                            <br />
                            <h2 className="listLabel">Lista de Proveedores</h2>
                            <div className="row">
                                <div id="circle-background">
                                    <img src="https://cdn.iconscout.com/icon/free/png-512/truck-shipping-logistic-delivery-transport-supply-vehicle-10-20596.png" alt="" id="imgTruck" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm">

                    <div className="row-row-cols-lg-6">
                        <ListaProveedores proveedores={proveedores} setReloadProveedores={setReloadProveedores} />
                    </div>
                    <div className="row">
                        <div className="col-sm d-flex justify-content-center">
                            <Link to='/AdminSistema/AgregarProveedores'><button className="btn btn-secondary ">Agregar Proveedores</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}