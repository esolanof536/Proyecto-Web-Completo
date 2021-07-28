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
                <div className="container" id="puestoContainer">
                    <br />
                    <h1>Unidades de Medida</h1>

                    <div className="container">
                        <div className="row">

                            <div className="col-4">
                                <img src="https://cdn2.iconfinder.com/data/icons/web-development-and-studio/512/59_Precision_accure_geometry_compass_measurement_creative_skills_process-512.png" alt="Puesto" id="puestoImg" />
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
                                            <input type="text" onClick={cod} id="codUM" disabled className="form-control" />
                                        </div>
                                    </div>
                                    <br />

                                    <div className="row">
                                        <div className="col-sm">
                                            <div></div>
                                            <h5>Unidad</h5>
                                        </div>
                                        <div className="col-sm">
                                            <input type="text" id="unidadUM" className="form-control" value={inputs.nombre} name="nombre" />
                                        </div>

                                    </div>
                                    <br />

                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Escala</h5>
                                        </div>
                                        <div className="col-sm">
                                            <select name="escala" id="escalaUM" className="form-control">
                                                <option defaultValue disabled>Escalas</option>
                                                <option value="Escala1">Escala1</option>
                                                <option value="Escala2">Escala2</option>
                                                <option value="Escala3">Escala3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Simbolo</h5>
                                        </div>
                                        <div className="col-sm">
                                            <input type="text" id="simboloUM" className="form-control" value={inputs.simbolo} name="simbolo" />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Simbología</h5>
                                        </div>
                                        <div className="col-sm">
                                            <input type="text" id="simbologiaUM" className="form-control" value={inputs.simbologia} name="simbologia" />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Detalle</h5>
                                        </div>
                                        <div className="col-sm">
                                            <textarea value={inputs.detalle} name="detalle" id="detalleUM" cols="21" rows="3" className="form-control textArea" />
                                        </div>
                                    </div>
                                    <br />
                                    <br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <button value="Submit" type="submit">Submit</button>
                                        </div>
                                        <div className="col-sm">
                                            <input type="button" value="Cancelar" name="btnCancelarUM" />
                                        </div>
                                        <div className="col-sm">
                                            <input type="button" value="Limpiar" name="btnLimpiarUM" />
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