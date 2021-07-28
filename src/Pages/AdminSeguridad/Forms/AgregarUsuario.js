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
                <div className="container" id="addUserContainer">
                    <h1>Usuarios</h1>
                    <div className="row">
                        <div className="col-sm">
                            <h3>Datos</h3>
                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Código</h5>
                                </div>
                                <div className="col-sm">
                                    <input type="text" id="codUsu" disabled className="form-control" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Nombre</h5>
                                </div>
                                <div className="col-sm">
                                    <input type="text"
                                        onClick={cod} value={inputs.nombre} name="nombre" className="form-control" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Primer Apellido</h5>
                                </div>
                                <div className="col-sm">
                                    <input type="text" value={inputs.primerApellido} name="primerApellido" className="form-control" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Segundo Apellido</h5>
                                </div>
                                <div className="col-sm">
                                    <input type="text" value={inputs.segundoApellido} name="segundoApellido" className="form-control" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Celular</h5>
                                </div>
                                <div className="col-sm">
                                    <input type="text" value={inputs.celular} name="celular" className="form-control" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Telefono</h5>
                                </div>
                                <div className="col-sm">
                                    <input type="text" value={inputs.telefono} name="telefono" className="form-control" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <h3>Privilegios</h3>
                                </div>

                            </div>
                            <br />
                            <div className="row">
                                <div className="col-1">
                                    <input type="radio" name="admin" value="Sistema" />
                                </div>
                                <div className="col-sm">
                                    <h5>Administrador de Sistema</h5>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-1">
                                    <input type="radio" name="admin" value="Seguridad" />
                                </div>
                                <div className="col-sm">
                                    <h5>Administrador de Seguridad</h5>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-1">
                                    <input type="radio" name="admin" value="Restaurante" />
                                </div>
                                <div className="col-sm">
                                    <h5>Administrador del Restaurante</h5>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-1">
                                    <input type="radio" name="admin" value="Cuentas" />
                                </div>
                                <div className="col-sm">
                                    <h5>Administrador de Cuentas</h5>
                                </div>
                            </div>

                        </div>
                        <div className="col-sm">
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Login</h5>
                                </div>
                                <div className="col-sm">
                                    <input type="text" className="form-control" value={inputs.username} name="username" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Contraseña</h5>
                                </div>
                                <div className="col-sm">
                                    <input type="password" className="form-control" value={inputs.password} name="password" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Confirmar Contraseña</h5>
                                </div>
                                <div className="col-sm">
                                    <input type="password" className="form-control" value={inputs.rePass} name="rePass" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-1">
                                    <input type="radio" name="camPassUser" />
                                </div>
                                <div className="col-sm">
                                    <h5>Cambio Contraseña</h5>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <img src="https://www.pinclipart.com/picdir/big/559-5594866_necktie-drawing-vector-round-avatar-user-icon-png.png" alt="" id="userIcon" />
                            </div>
                            <br />
                            <br />
                            <br />
                            <br />

                            <div className="row">
                                <div className="col-sm">
                                    <button value="Submit" type="submit">Submit</button>

                                </div>
                                <div className="col-sm">
                                    <input type="button" value="Cancelar" name="btnCancelarUser" />
                                </div>
                                <div className="col-sm">
                                    <input type="button" value="Limpiar" name="btnLimpiarUser" />
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>

                </div>

            </form>
        </>

    )

}