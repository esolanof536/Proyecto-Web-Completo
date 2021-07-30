import React, { useState, useEffect } from 'react';
import "./ListaRoles.css";
import { getRolApi } from "../../../../Api/Seguridad/roles"
import ListRoles from "../../../../Components/Roles/ListRoles";
import { Link } from 'react-router-dom';
export default function ListaRoles() {

    const [roles, setRoles] = useState([]);
    const [reloadRol, setReloadRol] = useState(false);


    useEffect(() => {
        getRolApi().then(response => {
            setRoles(response.roles);
        });
        setReloadRol(false);
    }, [reloadRol])


    return (

        <>
            <div className="row">
                <div className="col-2">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-sm" id="bannerRoles">
                            <br />
                            <br />
                            <h2 className="listLabel">Lista de Roles</h2>
                            <div className="row">
                                <div id="circle-background">
                                    <img src="https://www.venturetechsolutions.com/wp-content/uploads/2016/03/lg-icon-it-infrastructure-db-admin.png" alt="" id="imgRol" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm">

                    <div className="row-row-cols-lg-6">
                    <ListRoles roles={roles} setReloadRol={setReloadRol} />
                    </div>
                    <div className="row">
                        <div className="col-sm d-flex justify-content-center">
                            <Link to='/adminSeguridad/addRol' className='routing'><button class="btn btn-secondary ">Agregar Roles</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}