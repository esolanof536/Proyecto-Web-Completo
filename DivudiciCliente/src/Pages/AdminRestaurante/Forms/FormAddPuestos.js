import React, { useState } from 'react';
import "../FormEstilos/formAddPuestos.css";
import { agregarPuestosApi } from "../../../Api/puestos";
import { getConsecuApi, agregarConsecuApi } from "../../../Api/Seguridad/cosnecutivos";
import { notification } from 'antd';
export default function AddPuestos() {


    const [inputs, setInputs] = useState({

        codigo: "",
        nombre: "",
        internoExterno: "",
        roll: ""

    });

    const changeForm = e => {

        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const show = async e => {

        e.preventDefault();

        const result = await agregarPuestosApi(inputs);

        var z = inputs.codigo;
        var str = Number(z.slice(3));


        const cod = {

            valor: str,
            prefijo: "PU-",
            descripcion: "Puestos",
            tipo: "Puestos"
        }

        const result2 = agregarConsecuApi(cod);
        if (result.message) {
            notification["error"]({
                message: result.message
            })
        } else {

            notification["success"]({
                message: "Mesa Agregada"
            });
        }
        window.location.href = window.location.href;
    }

    const cod = (e) => {

        const prefijo = {

            prefijo: "PU-"

        }

        var v = 0;
        (async () => {
            const result = await getConsecuApi(prefijo);
            v = result.conse.valor;
            v = v + 1;
            document.getElementById("codPuesto").value = prefijo.prefijo + v;
            inputs.codigo = prefijo.prefijo + v;

        })();

    }

    return (

        <div className="container" id="puestoContainer">
            <br />
            <h1>Puestos</h1>

            <form onSubmit={show} onChange={changeForm}>
                <div className="container">
                    <div className="row">

                        <div className="col-4">
                            <img src="http://cdn.onlinewebfonts.com/svg/img_518976.png" alt="Puesto" id="puestoImg" />
                        </div>
                        <div className="col-sm" >
                            <h3 id="infoLabel">Información</h3><br />
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm">
                                        <div></div>
                                        <h5>Código</h5>
                                    </div>
                                    <div className="col-sm">
                                        <input type="text" disabled id="codPuesto" className="form-control" />
                                    </div>
                                </div>
                                <br />

                                <div className="row">
                                    <div className="col-sm">
                                        <div></div>
                                        <h5>Nombre</h5>
                                    </div>
                                    <div className="col-sm">
                                        <input type="text" value={inputs.nombre} onClick={cod} name="nombre" id="nomPuesto" className="form-control" />
                                    </div>

                                </div>
                                <br />

                                <div className="row">

                                    <div className="col-" id="internRadio">
                                        <input type="radio" value="Interno" name="internoExterno" id="interRest" />
                                    </div>
                                    <div className="col-5">
                                        <h5>Interno Restaurante</h5>
                                    </div>

                                    <div className="col-">
                                        <input type="radio" value="Externo" name="internoExterno" id="exterRest" />
                                    </div>
                                    <div className="col-sm">
                                        <h5>Externo Restaurante</h5>
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-sm">
                                        <h5>Rol</h5>
                                    </div>
                                    <div className="col-sm">
                                        <select name="roll" id="rolSelect">

                                            <option defaultValue disabled>Roles</option>
                                            <option value="admin">Administrador</option>
                                            <option value="seguridad">Seguridad</option>
                                            <option value="empleado">Empleado</option>
                                            <option value="consecutivo">Consecutivo</option>
                                        </select>
                                    </div>
                                </div>
                                <br />
                                <br />
                                <div className="row">
                                    <button value="Submit" type="submit">Submit</button>

                                    <div className="col-sm">
                                        <a href="" ><i className="far fa-times-circle fa-3x"></i></a>
                                    </div>
                                    <div className="col-sm">
                                        <a href="" ><i className="fas fa-broom fa-3x"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </form>

        </div>
    );
}