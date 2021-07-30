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
            <div className="row">
                <div className="col-2">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-sm" id="bannerUsuarios">
                            <br />
                            <br />
                            <h2 className="listLabel">Lista de Usuarios</h2>
                            <div className="row">
                                <div id="circle-background">
                                    <img src="https://cdn.iconscout.com/icon/free/png-256/user-1648810-1401302.png	" alt="" id="imgList" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm">

                    <div className="row-row-cols-xl-6">
                    <ListUsers usersActive={users} setReloadUsers={setReloadUser} />
                    </div>
                    <div className="row">
                        <div className="col-sm d-flex justify-content-center">
                            <Link to='/adminSeguridad/addUsuario' className='routing'><button class="btn btn-secondary ">Agregar Usuarios</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}