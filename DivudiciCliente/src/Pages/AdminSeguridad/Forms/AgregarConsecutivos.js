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
                    <div className="col-sm m-2">
                        <h1 id="infoEmp">Informacion de Consecutivos</h1>
                    </div>
                    <div className="row h-100 mt-3">
                        <div className="row m-2">
                            <div className="col-sm empLabel">
                                <label for="tipoConse">Tipo de Consecutivo</label>
                            </div>
                            <div className="col-lg">
                                <input type="text" id="tipoConse" className="form-control" value={inputs.tipo} name="tipo" />
                            </div>
                        </div>
                        <div className="row m-2">
                            <div className="col-sm empLabel">
                                <label for="descConse">Descripción </label>
                            </div>
                            <div className="col-lg">
                                <textarea value={inputs.descripcion} name="descripcion" id="descConse" cols="21" rows="3" className="form-control textArea" />
                            </div>
                        </div>
                        <div className="row m-2">
                            <div className="col-sm empLabel">
                                <label for="valorConse">Valor Consecutivo</label>
                            </div>
                            <div className="col-lg">
                                <input type="text" id="valorConse" className="form-control" value={inputs.valor} name="valor" />
                            </div>
                        </div>
                        <div className="row m-2">
                            <div className="col-sm empLabel">
                                <label for="prefConse">Prefijo</label>
                            </div>
                            <div className="col-lg">
                                <input type="text" id="prefConse" className="form-control" value={inputs.prefijo} name="prefijo" />
                            </div>
                        </div>
                        <div className="row ml-4  justify-content-md-center">
                            <div className="col-sm empLabel">
                                <input type="checkbox" className="form-check-input" name="prefCheckConse" id="prefCheckConse" />
                            </div>
                            <div className="col-lg">
                                <label id="prefLabel" for="prefCheckConse" className="form-check-label">Posee Prefijo</label>
                            </div>
                        </div>
                        <div className="row justify-content-md-center ms-5 mt-5 w-50">
                            <div className="col-4">
                                <button value="Submit" type="submit" className="btn">Submit</button>
                            </div>
                            <div className="col-4">
                                <input type="button" value="Cancelar" name="btnCancelarConse" className="btn" />
                            </div>
                            <div className="col-4">
                                <input type="button" value="Limpiar" name="btnLimpiarConse" className="btn" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )

}