import React, { useState } from 'react';
import "../FormsEstilos/AgregarUsuario.css";
import { agregarUsuariosApi } from "../../../Api/Seguridad/usuarios";
import { getConsecuApi, agregarConsecuApi } from "../../../Api/Seguridad/cosnecutivos";
import { notification } from 'antd';

export default function AgregarUsuario() {


    const [inputs, setInputs] = useState({

        codigo: "",
        nombre: "",
        primerApellido: "",
        segundoApellido: "",
        telefono: "",
        celular: "",
        username: "",
        password: "",
        rePass: "",
        admin: "",
        adminRestaurante: ""

    });

    const changeForm = e => {

        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };


    const cod = (e) => {
        const prefijo = {

            prefijo: "USU-"

        }

        var v = 0;
        (async () => {
            const result = await getConsecuApi(prefijo);
            v = result.conse.valor;
            v = v + 1;
            document.getElementById("codUsu").value = prefijo.prefijo + v;
            inputs.codigo = prefijo.prefijo + v;

        })();

    }

    const show = async e => {
        e.preventDefault();
        console.log(inputs);
        const result = await agregarUsuariosApi(inputs);
        var z = inputs.codigo;
        var str = Number(z.slice(4));
        const cod = {
            valor: str,
            prefijo: "USU-",
            descripcion: "Usuario",
            tipo: "Usuario"
        }
        const result2 = agregarConsecuApi(cod);
        if (result.message) {
            notification["error"]({
                message: result.message
            })
        } else {
            notification["success"]({
                message: "Usuario agregado"
            });
        }
        window.location.href = window.location.href;
    }
    return (
        <>
            <form onSubmit={show} onChange={changeForm}>
                <div className="container-fluid p-0" id="addUserContainer">
                    <div className="row w-100">
                        <div className="col-sm m-2 text-center w-100">
                            <h1>Datos Personales del Usuario</h1>
                        </div>
                    </div>
                    <div className="row m-3 w-100">

                        <div className="col-md-6">
                            <div className="row w-100 m-2">
                                <div className="col-sm-3">
                                    <label for="codUsu">Código</label>
                                </div>
                                <div className="col-md-7">
                                    <input type="text" id="codUsu" disabled className="form-control" />
                                </div>
                            </div>
                            <div className="row w-100 m-2">
                                <div className="col-sm-3">
                                    <label for="nombre">Nombre</label>
                                </div>
                                <div className="col-md-7">
                                    <input type="text"
                                        onClick={cod} value={inputs.nombre} id="nombre" name="nombre" className="form-control" />
                                </div>
                            </div>
                            <div className="row w-100 m-2">
                                <div className="col-sm-3 ">
                                    <label for="primerApellido">Primer Apellido</label>
                                </div>
                                <div className="col-md-7">
                                    <input type="text" value={inputs.primerApellido} id="primerApellido" name="primerApellido" className="form-control" />
                                </div>
                            </div>
                            <div className="row w-100 m-2">
                                <div className="col-sm-3">
                                    <label for="segundoApellido">Segundo Apellido</label>
                                </div>
                                <div className="col-md-7">
                                    <input type="text" value={inputs.segundoApellido} id="segundoApellido" name="segundoApellido" className="form-control" />
                                </div>
                            </div>
                            <div className="row w-100 m-2">
                                <div className="col-sm-3">
                                    <label for="celular">Celular</label>
                                </div>
                                <div className="col-md-7">
                                    <input type="text" value={inputs.celular} id="celular" name="celular" className="form-control" />
                                </div>
                            </div>
                            <div className="row w-100 m-2">
                                <div className="col-sm-3">
                                    <label for="telefono">Telefono</label>
                                </div>
                                <div className="col-md-7">
                                    <input type="text" value={inputs.telefono} id="telefono" name="telefono" className="form-control" />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="row w-100 m-2">
                                <div className="col-sm-3">
                                    <label for="username">Usuario</label>
                                </div>
                                <div className="col-md-7">
                                    <input type="text" className="form-control" value={inputs.username} id="username" name="username" />
                                </div>
                            </div>
                            <br />
                            <div className="row w-100 m-2">
                                <div className="col-sm-3">
                                    <label for="password">Contraseña</label>
                                </div>
                                <div className="col-md-7">
                                    <input type="password" className="form-control" value={inputs.password} id="password" name="password" />
                                </div>
                            </div>
                            <br />
                            <div className="row w-100 m-2">
                                <div className="col-sm-3">
                                    <label for="password">Confirmar Contraseña</label>
                                </div>
                                <div className="col-md-7">
                                    <input type="password" className="form-control" value={inputs.rePass} name="rePass" />
                                </div>
                            </div>
                            <div className="row w-100 ml-4 mt-3">
                                <div className="form-checl">
                                    <input type="radio" id="camPassUser" name="camPassUser" className="mr-3"/>
                              
                                    <label for="camPassUser">Cambio Contraseña</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row w-10 mx-auto mb-3 p-0">

                        <div className="col">
                            <div className="row m-2 w-100">
                                <div className="col">
                                    <h2>Privilegios</h2>
                                </div>
                            </div>
                            <div className="row m-2 w-100">
                                <div className="form-check">
                                    <input type="radio" id="admin" name="admin" value="Sistema" className="mr-3" />
                                    <label for="admin">Administrador de Sistema</label>
                                </div>
                            </div>
                            <div className="row m-2 w-100">
                                <div className="form-check">
                                    <input type="radio" name="admin" id="adminSeguridad" value="Seguridad" className="mr-3" />
                                    <label for="adminSeguridad">Administrador de Seguridad</label>
                                </div>
                            </div>
                            <div className="row m-2 w-100">
                                <div className="form-check">
                                    <input type="radio" name="admin" id="Restaurante" value="Restaurante" className="mr-3" />
                                    <label for="Restaurante">Administrador del Restaurante</label>
                                </div>
                            </div>
                            <div className="row m-2 w-100">
                                <div className="form-check">
                                    <input type="radio" name="admin" id="Cuentas" value="Cuentas" className="mr-3"/>
                                    <label for="Cuentas">Administrador de Cuentas</label>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row mx-auto mt-3 w-50">
                        <div className="col-sm-3 mx-auto my-2">
                            <button value="Submit" type="submit" className="btn btn-danger">Submit</button>
                        </div>
                        <div className="col-sm-3 mx-auto my-2">
                            <input type="button" value="Cancelar" name="btnCancelarUser" className="btn btn-danger"/>
                        </div>
                        <div className="col-sm-3 mx-auto my-2">
                            <input type="button" value="Limpiar" name="btnLimpiarUser" className="btn btn-danger"/>
                        </div>
                    </div>
                </div>

            </form>
        </>

    )

}