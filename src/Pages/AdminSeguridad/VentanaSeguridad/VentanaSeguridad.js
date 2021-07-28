import React from 'react';
import "./VentanaSeguridad.css";
import { Link } from 'react-router-dom';
export default function VentanaSeguridad() {

    return (
        <div className="container" id="ventSeguridadContainer">
            <br />
            <h1>Seguridad</h1>

            <div className="container">
                <div className="row">

                    <div className="col-4">
                        <img src="https://icons.iconarchive.com/icons/google/noto-emoji-objects/1024/62967-shield-icon.png" alt="" id="logoOpcEsp" />
                    </div>
                    <div className="col-sm" >
                        <h3 id="opcLabel">Opciones</h3><br />
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    <Link to='/adminSeguridad/listaUsuarios' ><button className="btn btn-secondary ">Usuarios</button></Link>
                                    <br /><br />
                                    <Link to='/adminSeguridad/listaCajas' ><button className="btn btn-secondary ">Cajas</button></Link>
                                    <br /><br />
                                    <Link to='/adminSeguridad/listaRoles' ><button className="btn btn-secondary mb-2">Roles</button></Link>
                                </div>
                                <div className="col-sm ">
                                    <Link to='/adminSeguridad/listaConsecutivos' ><button className="btn btn-secondary ">Consecutivos</button></Link>
                                    <br /><br />
                                    <Link to='/adminSeguridad/listaUM' ><button className="btn btn-secondary ">Uni. Medida</button></Link>
                                    <br /><br />
                                    <Link to='/adminSeguridad/listaPaises' ><button className="btn btn-secondary ">Paises</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
