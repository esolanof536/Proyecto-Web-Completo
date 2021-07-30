import React, { useState, useEffect } from 'react';
import '../ListaEstilos/listTecnologia.css';
import { getTecnologiaApi } from "../../../Api/Sistema/tecnologia";
import ListaTecnologia from "../../../Components/Tecnologias/ListaTecnologias";
import { Link } from 'react-router-dom';
export default function ListTecnologia() {

    const [tech, setTech] = useState([]);
    const [reloadTecno, setReloadTecno] = useState(false);


    useEffect(() => {
        getTecnologiaApi().then(response => {
            setTech(response.tecnologia);
        });
        setReloadTecno(false)
    }, [reloadTecno])

    return (
        <>
            <div className="row">
                <div className="col-2">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-sm" id="bannerTecnologia">
                            <br />
                            <br />
                            <h2 className="listLabel">Lista de Tecnología</h2>
                            <div className="row">
                                <div id="circle-background">
                                    <img src="https://cdn.icon-icons.com/icons2/1367/PNG/512/32officeicons-31_89708.png" alt=""
                                        id="imgList" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm">

                    <div className="row-row-cols-lg-6">
                    <ListaTecnologia tecnologia={tech} setReloadTecno={setReloadTecno} />
                    </div>
                    <div className="row">
                        <div className="col-sm d-flex justify-content-center">
                            <Link to='/AdminSistema/FormTecnologia'><button className="btn btn-secondary ">Agregar Tecnologia</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}