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
                <div className="container-fluid p-0" id="RolContainer">
                    <div className="col-sm m-2 text-center w-100">
                        <h1 id="infoEmp">Informacion de los Roles</h1>
                    </div>
                    <div className="row w-100 m-3">
                        <div className="row m-2 w-100">
                            <div className="col-sm-3">
                                <label for="codRol">Código</label>
                            </div>
                            <div className="col-lg-6">
                                <input type="text" id="codRol" disabled className="form-control" />
                            </div>
                        </div>
                        <div className="row m-2 w-100">
                            <div className="col-sm-3">
                                <label for="nomRol">Nombre</label>
                            </div>
                            <div className="col-lg-6">
                                <input type="text" id="nomRol" onClick={cod} className="form-control" value={inputs.nombre} name="nombre" />
                            </div>
                        </div>
                        <div className="row m-2 w-100">
                            <div className="col-sm-3">
                                <label for="nomRol">Detalle</label>
                            </div>
                            <div className="col-lg-6">
                                <textarea value={inputs.descripcion} name="descripcion" id="destalleRol" cols="21" rows="3" className="form-control textArea" />
                            </div>
                        </div>
                        <div className="row ml-2 mt-5 w-75">
                            <div className="col-sm-3 m-2">
                                <button value="Submit" type="submit" className="btn btn-danger">Submit</button>
                            </div>
                            <div className="col-sm-3 m-2">
                                <input type="button" value="Cancelar" name="btnCancelarRol" className="btn btn-danger" />
                            </div>
                            <div className="col-sm-3 m-2">
                                <input type="button" value="Limpiar" name="btnLimpiarRol" className="btn btn-danger" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>

    )

}