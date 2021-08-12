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
            <div className="row ml-3 my-2 pr-3">
                <h1>Lista de Roles</h1>
            </div>
            <div className="row">
                <div className="col-sm pb-0 mb-0">
                    <div className="row-row-cols-lg-6 m-3">
                        <ListRoles roles={roles} setReloadRol={setReloadRol} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm d-flex justify-content-center m-3">
                    <Link to='/adminSeguridad/addRol' className='routing'><button class="btn btn-danger btn-lg">Agregar Roles</button></Link>
                </div>
            </div>

        </>
    )
}