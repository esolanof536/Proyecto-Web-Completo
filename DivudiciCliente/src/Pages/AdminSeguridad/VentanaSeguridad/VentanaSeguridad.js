import React from 'react';
import "./VentanaSeguridad.css";
import { Link } from 'react-router-dom';
export default function VentanaSeguridad() {

    return (
        <div className="container-fluid p-0" id="ventSeguridadContainer">
            <div className="col-sm m-2 text-center w-100">
                <h1>Seguridad</h1>
            </div>
            <div className="row m-auto text-center " style={{width:"90%"}}>
                <div className="row m-2 w-100">
                    <div className="col-lg-4 mx-2">
                        <Link to='/adminSeguridad/listaUsuarios' ><button className="btn btn-danger btn-lg btn-width">Usuarios</button></Link>
                    </div>
                    <div className="col-lg-4 mx-2">
                        <Link to='/adminSeguridad/listaCajas' ><button className="btn btn-danger btn-lg btn-width">Cajas</button></Link>
                    </div>
                </div>
                <div className="row m-2 w-100">
                    <div className="col-lg-4 mx-2">
                        <Link to='/adminSeguridad/listaRoles' ><button className="btn btn-danger btn-lg btn-width">Roles</button></Link>
                    </div>
                    <div className="col-lg-4 mx-2">
                        <Link to='/adminSeguridad/listaConsecutivos' ><button className="btn btn-danger btn-lg btn-width">Consecutivos</button></Link>
                    </div>
                </div>
                <div className="row m-2 w-100">
                    <div className="col-lg-4 mx-2">
                        <Link to='/adminSeguridad/listaUM' ><button className="btn btn-danger btn-lg btn-width">Unidad Medida</button></Link>
                    </div>
                    <div className="col-lg-4 mx-2">
                        <Link to='/adminSeguridad/listaPaises' ><button className="btn btn-danger btn-lg btn-width">Paises</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
