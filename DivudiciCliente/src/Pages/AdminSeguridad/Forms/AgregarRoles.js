import React, { useState } from 'react';
import "../FormsEstilos/AgregarRoles.css";
import { agregarRollApi } from "../../../Api/Seguridad/roles";
import { getConsecuApi, agregarConsecuApi } from "../../../Api/Seguridad/cosnecutivos";
import { notification } from 'antd';

export default function AgregarRoles() {



    const [inputs, setInputs] = useState({

        codigo: "",
        nombre: "",
        descripcion: ""

    });



    const changeForm = e => {

        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };



    const show = async e => {

        e.preventDefault();
        console.log(inputs);

        const result = await agregarRollApi(inputs);

        var z = inputs.codigo;
        var str = Number(z.slice(4));


        const cod = {

            valor: str,
            prefijo: "EVE-",
            descripcion: "Rol",
            tipo: "Roles"
        }

        const result2 = agregarConsecuApi(cod);
        if (result.message) {
            notification["error"]({
                message: result.message
            })
        } else {

            notification["success"]({
                message: "Licor agregado"
                
            });
            window.location.href = window.location.href;
        }
    }

    const cod = (e) => {
        const prefijo = {

            prefijo: "EVE-"

        }

        var v = 0;
        (async () => {
            const result = await getConsecuApi(prefijo);
            v = result.conse.valor;
            v = v + 1;
            document.getElementById("codRol").value = prefijo.prefijo + v;
            inputs.codigo = prefijo.prefijo + v;

        })();

    }

    return (

        <>
            <form onSubmit={show} onChange={changeForm}>
                <div className="container" id="RolContainer">
                    <br />
                    <h1>Roles</h1>

                    <div className="container">
                        <div className="row">

                            <div className="col-4">
                                <img src="https://cdn.iconscout.com/icon/free/png-256/administrator-2166550-1836773.png" alt="Puesto" id="puestoImg" />
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
                                            <input type="text" id="codRol" disabled className="form-control" />
                                        </div>
                                    </div>
                                    <br />

                                    <div className="row">
                                        <div className="col-sm">
                                            <div></div>
                                            <h5>Nombre</h5>
                                        </div>
                                        <div className="col-sm">
                                            <input type="text" id="nomRol" onClick={cod} className="form-control" value={inputs.nombre} name="nombre" />
                                        </div>

                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Detalle</h5>
                                        </div>
                                        <div className="col-sm">
                                            <textarea value={inputs.descripcion} name="descripcion" id="destalleRol" cols="21" rows="3" className="form-control textArea" />
                                        </div>
                                    </div>
                                    <br />
                                    <br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <button value="Submit" type="submit">Submit</button>
                                        </div>
                                        <div className="col-sm">
                                            <input type="button" value="Cancelar" name="btnCancelarRol" />
                                        </div>
                                        <div className="col-sm">
                                            <input type="button" value="Limpiar" name="btnLimpiarRol" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </form>
        </>

    )

}