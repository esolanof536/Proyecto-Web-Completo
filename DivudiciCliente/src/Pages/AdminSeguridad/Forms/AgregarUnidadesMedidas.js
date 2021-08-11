import React, { useState } from 'react';
import "../FormsEstilos/AgregarUnidadesMedidas.css";
import { agregarUnidadMApi } from "../../../Api/Seguridad/unidadM";
import { getConsecuApi, agregarConsecuApi } from "../../../Api/Seguridad/cosnecutivos";
import { notification } from 'antd';

export default function AgregarUnidadesMedidas() {


    const [inputs, setInputs] = useState({

        codigo: "",
        nombre: "",
        escala: "",
        detalle: "",
        simbologia: "",
        simbolo: ""
    });



    const changeForm = e => {

        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };


    const cod = (e) => {
        const prefijo = {

            prefijo: "UM-"

        }

        var v = 0;
        (async () => {
            const result = await getConsecuApi(prefijo);
            v = result.conse.valor;
            v = v + 1;
            document.getElementById("codUM").value = prefijo.prefijo + v;
            inputs.codigo = prefijo.prefijo + v;

        })();

    }

    const show = async e => {


        e.preventDefault();
        console.log(inputs);

        const result = await agregarUnidadMApi(inputs);

        var z = inputs.codigo;
        var str = Number(z.slice(3));


        const cod = {

            valor: str,
            prefijo: "UM-",
            descripcion: "Unidad Medida",
            tipo: "Unidad Medida"
        }

        const result2 = agregarConsecuApi(cod);
        if (result.message) {
            notification["error"]({
                message: result.message
            })
        } else {

            notification["success"]({
                message: "Unidad de Medida agregado"

            });
            window.location.href = window.location.href;
        }

    }



    return (

        <>
            <form onSubmit={show} onChange={changeForm}>
                <div className="container-fluid p-0" id="puestoContainer">
                    <div className="col-sm m-2 text-center w-100">
                        <h1>Unidades de Medida</h1>
                    </div>
                    <div className="row m-3 w-100">
                        <div className="row m-2 w-100">
                            <div className="col-sm-3">
                                <label for="codUM">Código</label>
                            </div>
                            <div className="col-lg-6">
                                <input type="text" onClick={cod} id="codUM" disabled className="form-control" />
                            </div>
                        </div>
                        <div className="row m-2 w-100">
                            <div className="col-sm-3">
                                <label for="unidadUM">Unidad</label>
                            </div>
                            <div className="col-lg-6">
                                <input type="text" id="unidadUM" className="form-control" value={inputs.nombre} name="nombre" />
                            </div>
                        </div>
                        <div className="row m-2 w-100">
                            <div className="col-sm-3">
                                <label for="escalaUM">Escala</label>
                            </div>
                            <div className="col-lg-6 mr-0">
                                <select name="escala" id="escalaUM" className="form-control">
                                    <option defaultValue disabled>Escalas</option>
                                    <option value="Escala1">Primera Escala</option>
                                    <option value="Escala2">Segunda Escala</option>
                                    <option value="Escala3">Tercera Escala</option>
                                </select>
                            </div>
                        </div>
                        <div className="row m-2 w-100">
                            <div className="col-sm-3">
                                <label for="escalaUM">Simbolo</label>
                            </div>
                            <div className="col-lg-6">
                                <input type="text" id="simboloUM" className="form-control" value={inputs.simbolo} name="simbolo" />
                            </div>
                        </div>
                        <br />
                        <div className="row m-2 w-100">
                            <div className="col-sm-3">
                                <label for="escsimbologiaUMalaUM">Simbología</label>
                            </div>
                            <div className="col-lg-6">
                                <input type="text" id="simbologiaUM" className="form-control" value={inputs.simbologia} name="simbologia" />
                            </div>
                        </div>
                        <div className="row m-2 w-100">
                            <div className="col-sm-3">
                                <label for="detalleUM">Detalle</label>
                            </div>
                            <div className="col-lg-6">
                                <textarea value={inputs.detalle} name="detalle" id="detalleUM" cols="21" rows="3" className="form-control textArea" />
                            </div>
                        </div>
                        <div className="row ml-2 mt-3 w-100">
                            <div className="col-4">
                                <button value="Submit" type="submit" className="btn btn-danger">Submit</button>
                            </div>
                            <div className="col-4">
                                <input type="button" value="Cancelar" name="btnCancelarUM" className="btn btn-danger" />
                            </div>
                            <div className="col-4">
                                <input type="button" value="Limpiar" name="btnLimpiarUM" className="btn btn-danger"/>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>

    )

}