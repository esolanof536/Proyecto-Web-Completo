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
                <div className="container" id="conseContainer">
                    <br />
                    <h1>Consecutivos</h1>

                    <div className="container">
                        <h3 id="infoEmp">Información</h3><br />
                        <div className="row">

                            <div className="col-3">
                                <img src="https://www.tuescuelaesonline.com/wp-content/themes/tuescuelaonline-remake/assets/images/logo.png" id="empLogo" />
                            </div>
                            <div className="col-sm" >

                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm empLabel">
                                            <h5>Tipo</h5>
                                        </div>
                                        <div className="col-sm">
                                            <input type="text" id="tipoConse" className="form-control" value={inputs.tipo} name="tipo" />
                                        </div>
                                    </div>
                                    <br />

                                    <div className="row">
                                        <div className="col-sm empLabel">
                                            <div></div>
                                            <h5>Descripción</h5>
                                        </div>
                                        <div className="col-sm">
                                            <textarea value={inputs.descripcion} name="descripcion" id="descConse" cols="21" rows="3" className="form-control textArea" />
                                        </div>

                                    </div>
                                    <br />

                                    <div className="row">
                                        <div className="col-sm empLabel">
                                            <h5>Valor</h5>
                                        </div>
                                        <div className="col-sm">
                                            <input type="text" id="valorConse" className="form-control" value={inputs.valor} name="valor" />
                                        </div>
                                    </div>
                                    <br />

                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Prefijo</h5>
                                        </div>
                                        <div className="col-sm">
                                            <input type="text" id="prefConse" className="form-control" value={inputs.prefijo} name="prefijo" />
                                        </div>
                                    </div>
                                    <br />
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="container">


                                    <div className="row">
                                        <div className="col-sm">
                                            <input type="checkbox" name="prefCheckConse" />
                                        </div>
                                        <div className="col-sm">
                                            <h5 id="prefLabel">Posee Prefijo</h5>
                                        </div>
                                    </div>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <div className="row">
                                        <div className="col-4">
                                            <button value="Submit" type="submit">Submit</button>
                                        </div>
                                        <div className="col-4">
                                            <input type="button" value="Cancelar" name="btnCancelarConse" />
                                        </div>
                                        <div className="col-4">
                                            <input type="button" value="Limpiar" name="btnLimpiarConse" />
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