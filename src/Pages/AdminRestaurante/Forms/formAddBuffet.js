import React, { useState } from 'react';
import "../FormEstilos/addBuffet.css";
import { getConsecuApi, agregarConsecuApi } from "../../../Api/Seguridad/cosnecutivos";
import { agregarBuffetApi } from "../../../Api/buffet";
import { notification } from 'antd';
import { getUmedNameData } from '../../../Api/Seguridad/unidadM'

export default function FormAddBuffet() {
    const [inputs, setInputs] = useState({
        codigo: "",
        nombre: "",
        tipo: "",
        precio: "",
        unidadMedida: "",
        foto: "NA"
    });
    const changeForm = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };
    const show = async e => {
        e.preventDefault();
        const result = await agregarBuffetApi(inputs);
        var z = inputs.codigo;
        var str = Number(z.slice(4));
        const cod = {
            valor: str,
            prefijo: "BUF-",
            descripcion: "Buffet",
            tipo: "Buffet"
        }
        const result2 = agregarConsecuApi(cod);
        if (result.message) {
            notification["error"]({
                message: result.message
            })
        } else {
            notification["success"]({
                message: "Buffet agregado"
            });
            window.location.href = window.location.href;
        }
    }

    
    const cod = (e) => {
        const prefijo = {
            prefijo: "BUF-"
        };
        var v = 0;
        (async () => {
            const result = await getConsecuApi(prefijo);
            v = result.conse.valor;
            v = v + 1;
            document.getElementById("codBuff").value = prefijo.prefijo + v;
            inputs.codigo = prefijo.prefijo + v;
        })();
    }

    window.onload = function () {
        (async () => {
            const result = await getUmedNameData();
            const v = result.unidades;
            console.log(result);
            var unidadesSelect = document.getElementById("unidadesSelect");
            for (var i = 0; i < v.length; i++) {
                unidadesSelect.options[i] = new Option(v[i].nombre, v[i].nombre);
            }
        })();
    }

    return (
        <>
            <div className="row borderBottomStyle" >
                <div className="col-12 mt-2 mb-2" >
                </div>
            </div>
            <div className="container" id="addBuffetContainer">
                <br />
                <h1>Buffet</h1>
                <br />
                <div className="container">
                    <form onSubmit={show} onChange={changeForm}>
                        <div className="row">
                            <div className="col-4">
                                <img src="https://image.flaticon.com/icons/png/512/1683/1683777.png" alt="Buffet" id="iconAddBuffet" />
                            </div>
                            <div className="col-sm">
                                <h3 id="addBuffetInfo">Informacion</h3>
                                <br />
                                <div className="row">
                                    <div className="col-sm">
                                        <h5>Código</h5>
                                    </div>
                                    <div className="col-sm">
                                        <input type="text" disabled id="codBuff" className="form-control" placeholder="Ingrese el código" />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-sm">
                                        <h5>Nombre</h5>
                                    </div>
                                    <div className="col-sm">
                                        <input type="text" value={inputs.nombre} onClick={cod} name="nombre" className="form-control" placeholder="Ingrese el nombre" />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-sm">
                                        <h5>Precio</h5>
                                    </div>
                                    <div className="col-sm">
                                        <input type="number" value={inputs.precio} name="precio" className="form-control" placeholder="Ingrese el precio" />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-sm">
                                        <h5>Tipo</h5>
                                    </div>
                                    <div className="col-sm">
                                        <select name="tipo" id="tipobuff" className="form-control">
                                            <option value="Marina">Marina</option>
                                            <option value="Vegetal">Vegetal</option>
                                            <option value="Frutas">Frutas</option>
                                            <option value="Comida Mediterranea">Comida Mediterranea</option>
                                        </select>
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-sm">
                                        <h5>Unidad de Medida</h5>
                                    </div>
                                    <div className="col-sm">
                                        <select id="unidadesSelect" className="form-control" name='uMedNames'></select>
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-sm">
                                        <h5>Imagen</h5>
                                    </div>
                                    <div className="col-sm">
                                        <img src="" alt="" id="imgAddBuffet" />
                                        <input type="file" id="fileBuffet" />
                                        <br /><br />
                                        <button>Examinar...</button>
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <button value="Submit" type="submit">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );

}