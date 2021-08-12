import React, { useState, useEffect } from 'react';
import "./ListaUsuario.css";
import ListUsers from "../../../../Components/Users/ListUsers";
import { getUsersApi } from "../../../../Api/Seguridad/usuarios";
import { Link } from 'react-router-dom';

export default function ListaUsuarios() {

    const [users, setUsers] = useState([]);
    const [reloadUser, setReloadUser] = useState(false);

    useEffect(() => {
        getUsersApi().then(response => {
            setUsers(response.users);
        });
        setReloadUser(false)
    }, [reloadUser]);


    return (

        <>
            <div className="row ml-3 my-2 p-3">
                    <h1>Lista de Usuarios</h1>
            </div>
            <div className="row">
                <div className="col-sm pb-0 mb-0">
                    <div className="row-row-cols-lg-6 m-3">
                        <ListUsers usersActive={users} setReloadUsers={setReloadUser} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm d-flex justify-content-center m-3">
                    <Link to='/adminSeguridad/addUsuario' className='routing'><button class="btn btn-danger btn-lg">Agregar Usuarios</button></Link>
                </div>
            </div>
        </>

    )

}