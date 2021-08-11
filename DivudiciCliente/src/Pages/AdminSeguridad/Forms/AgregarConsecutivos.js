import React, { useState } from 'react';
import "../FormsEstilos/AgregarConsecutivos.css";
import { agregarConsecuApi } from "../../../Api/Seguridad/cosnecutivos";
import { notification } from 'antd';

export default function AgregarConsecutivos() {


    const [inputs, setInputs] = useState({

        tipo: "",
        descripcion: "",
        valor: "",
        prefijo: ""

    });


    const changeForm = e => {

        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };


    const show = async e => {

        e.preventDefault();

        const result = await agregarConsecuApi(inputs);
        if (result.message) {
            notification["error"]({
                message: result.message
            })
        } else {

            notification["success"]({
                message: "Consecutivo Agregada"
            });
            window.location.href = window.location.href;
        }


    }


    return (
        <>
            <form onSubmit={show} onChange={changeForm}>
                <div className="container-fluid" id="conseContainer">
                    <div className="col-sm m-2 text-center w-100">
                        <h1 id="infoEmp">Informacion de Consecutivos</h1>
                    </div>
                    <div className="row m-3 w-100">
                        <div className="row m-2 w-100">
                            <div className="col-sm-3">
                                <label for="tipoConse">Tipo de Consecutivo</label>
                            </div>
                            <div className="col-lg-6">
                                <input type="text" id="tipoConse" className="form-control" value={inputs.tipo} name="tipo" />
                            </div>
                        </div>
                        <div className="row m-2 w-100">
                            <div className="col-sm-3">
                                <label for="descConse">Descripción </label>
                            </div>
                            <div className="col-lg-6">
                                <textarea value={inputs.descripcion} name="descripcion" id="descConse" cols="21" rows="3" className="form-control textArea" />
                            </div>
                        </div>
                        <div className="row m-2 w-100">
                            <div className="col-sm-3">
                                <label for="valorConse">Valor Consecutivo</label>
                            </div>
                            <div className="col-lg-6">
                                <input type="text" id="valorConse" className="form-control" value={inputs.valor} name="valor" />
                            </div>
                        </div>
                        <div className="row m-2 w-100">
                            <div className="col-sm-3">
                                <label for="prefConse">Prefijo</label>
                            </div>
                            <div className="col-lg-6">
                                <input type="text" id="prefConse" className="form-control" value={inputs.prefijo} name="prefijo" />
                            </div>
                        </div>
                        <div className="row m-2 w-100">
                            <div className="form-check w-25">
                                <input type="checkbox" className="form-check-input" name="prefCheckConse" id="prefCheckConse" />
                                <label id="prefLabel" for="prefCheckConse" className="form-check-label">Posee Prefijo</label>
                            </div>
                        </div>
                        <div className="row w-75 ml-2 mt-2">
                            <div className="col-3 m-2">
                                <button value="Submit" type="submit" className="btn btn-danger">Submit</button>
                            </div>
                            <div className="col-3 m-2">
                                <input type="button" value="Cancelar" name="btnCancelarConse" className="btn btn-danger" />
                            </div>
                            <div className="col-3 m-2">
                                <input type="button" value="Limpiar" name="btnLimpiarConse" className="btn btn-danger" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )

}