import React from 'react'
import '../MenusEstilos/ventanaProveedores.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

export default function VentanaProveedores() {
    return (
        <div className="container" id="provContainer">
            <br />
            <h1 >Proveedores</h1>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <img src="data:image/png;base64,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"
                            alt="IconBook" id="ventProvLogo" />
                    </div>
                    <div className="col-sm">
                        <br />
                        <h3 id="provInfo">Opciones</h3>
                        <br />
                        <div className="row">
                            <div className="col-3">
                                <Link to='/AdminSistema/ListMarcas'><button className="btn btn-secondary ">Marcas</button></Link>
                            </div>
                            <div className="col-4">
                                <Link to='/AdminSistema/MenuProductos'><button className="btn btn-secondary ">Productos</button></Link>
                            </div>
                            <div className="col-sm">
                                <Link to='/AdminSistema/ListProveedores'><button className="btn btn-secondary ">Proveedores</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}