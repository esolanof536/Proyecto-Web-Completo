import React from 'react'
import '../MenusEstilos/ventanaProductos.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

export default function VentanaProductos() {
    return (
        <div class="container" id="opcProdContainer">
            <br />
            <h1 >Productos</h1>
            <div class="container">
                <div class="row">
                    <div class="col-4">
                        <img src="http://13938.kunstraumsaarow.de/img-book/book1.png"
                            alt="IconBook" id="iconBook" />
                    </div>
                    <div class="col-sm">
                        <h3 id="infoProd" >Opciones</h3>
                        <div class="container">
                            <div class="row">
                                <div class="col-3">
                                    <Link to='/AdminSistema/ListComestibles'><button class="btn btn-secondary ">Comestibles</button></Link>
                                </div>
                                <div className="col-3">
                                    <Link to='/AdminSistema/ListTecnologia'><button class="btn btn-secondary ">Tecnologia</button></Link>


                                </div>
                                <div className="col-5">
                                    <Link to='/AdminSistema/ListLimpHigiene'><button class="btn btn-secondary ">Limpieza e Higiene</button></Link>

                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-3">
                                    <Link to='/AdminSistema/ListDesEmpaques'><button class="btn btn-secondary ">Desechables y Empaques</button></Link>

                                </div>
                                <div className="col-sm">
                                    <Link to='/AdminSistema/ListEqUtencilios'><button class="btn btn-secondary ">Equipos y Utencilios</button></Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}