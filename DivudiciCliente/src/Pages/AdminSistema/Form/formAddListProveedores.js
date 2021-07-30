import React, { useState } from 'react';
import '../FormEstilos/formAddListProveedores.css'
import { agregarProveedorApi } from "../../../Api/Sistema/proveedor";
import { getConsecuApi, agregarConsecuApi } from "../../../Api/Seguridad/cosnecutivos";
import { notification } from 'antd';
export default function FormAddListProveedores() {


    const [inputs, setInputs] = useState({

        codigo: "",
        nombrePorveedor: "",
        fechaIngreso: "",
        pApellido: "",
        sApellido: "",
        correo: "",
        direccionProv: "",
        telefonos: {
            oficina: "",
            fax: "",
            celular: ""
        },
        foto: "NA",
        infoContacto: {
            nombre: "",
            telefono: "",
            direccion: ""
        },
        productosManejadosArray: []
    });

    const array = [];


    const changeForm = e => {

        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });


    };

    function A() {

        const provtext = document.getElementsByName("prodrest");
        console.log(provtext[0].value);
        array.push(provtext[0].value);
        console.log(array);
        const resttext = document.getElementsByName("prodprov");
        resttext[0].value = array;

    }

    const show = async e => {


        e.preventDefault();

        const result = await agregarProveedorApi(inputs);

        var z = inputs.codigo;
        var str = Number(z.slice(4));


        const cod = {

            valor: str,
            prefijo: "PRO-",
            descripcion: "Proveedores",
            tipo: "Proveedores"
        }

        const result2 = agregarConsecuApi(cod);
        if (result.message) {
            notification["error"]({
                message: result.message
            })
        } else {

            notification["success"]({
                message: "Equipos y Utencilios Agregada"
            });
            window.location.href = window.location.href;
        }


    }

    const cod = (e) => {

        const prefijo = {

            prefijo: "PRO-"

        }

        var v = 0;
        (async () => {
            const result = await getConsecuApi(prefijo);
            v = result.conse.valor;
            v = v + 1;
            document.getElementById("inpcodigo").value = prefijo.prefijo + v;
            inputs.codigo = prefijo.prefijo + v;

        })();

    }

    return (
        <div className="container" id="proveContainer">
            <br />
            <h1 >Proveedores</h1>

            <div className="container">
                <form onSubmit={show} onChange={changeForm}>

                    <div className="row">
                        <div className="col-3">
                            <img src="data:image/jpeg;base64,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"
                                alt="IconBook" id="iconProve" />
                        </div>
                        <div className="col-sm">
                            <h3 id="provInfo">Información</h3>
                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Código</h5>
                                </div>
                                <div className="col-sm">
                                    <input type="text" className="form-control" id="inpcodigo" disabled
                                        placeholder="Ingrese Codigo" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Cedula de Identidad</h5>
                                </div>
                                <div className="col-sm">
                                    <input type="text" onClick={cod} className="form-control" id="inpcodigo" value={inputs.cedula} name="cedula"
                                        placeholder="Ingrese Cédula" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Fecha de Ingreso</h5>
                                </div>
                                <div className="col-sm">
                                    <input type="text" className="form-control" id="inpcodigo" value={inputs.fechaIngreso} name="fechaIngreso"
                                        placeholder="Ingrese Fecha" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Nombre Proveedor</h5>
                                </div>
                                <div className="col-sm">
                                    <input type="text" className="form-control" id="inpcodigo" value={inputs.nombrePorveedor} name="nombrePorveedor"
                                        placeholder="Ingrese Nombre" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Primer Apellido</h5>
                                </div>
                                <div className="col-sm">
                                    <input type="text" className="form-control" id="inpcodigo" value={inputs.pApellido} name="pApellido"
                                        placeholder="Ingrese Apellido" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Segundo Apellido</h5>
                                </div>
                                <div className="col-sm">
                                    <input type="text" className="form-control" id="inpcodigo" value={inputs.sApellido} name="sApellido"
                                        placeholder="Ingrese Apellido" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Correo</h5>
                                </div>
                                <div className="col-sm">
                                    <input type="text" className="form-control" id="inpcodigo" value={inputs.correo} name="correo"
                                        placeholder="Ingrese Correo" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Dirección</h5>
                                </div>
                                <div className="col-sm">
                                    <input type="text" className="form-control" id="inpcodigo" value={inputs.direccionProv} name="direccionProv"
                                        placeholder="Ingrese Dirección" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Foto</h5>
                                </div>
                                <div className="col-sm">
                                    <img src="" alt="" id="proveImg" />
                                    <input type="file" id="fileProve" />
                                    <br /><br />
                                    <button>Examinar...</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <br />
                            <div className="row" id="rowthree">
                                <div className="col-sm">
                                    <h5>Productos Restaurantes</h5>
                                </div>
                                <div className="col-sm">
                                    <textarea className="form-control" name="prodrest" id="TextAreaProve2" rows="3"></textarea>
                                </div>
                            </div>
                            <br />
                            <button onClick={A} type="button">Array</button>

                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Productos Proveedor</h5>
                                </div>
                                <div className="col-sm">
                                    <textarea className="form-control" name="prodprov" id="TextAreaProve" rows="3"></textarea>
                                </div>
                            </div>
                            <br />
                            <h4>Telefonos</h4>
                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Teléfono Oficina</h5>
                                </div>
                                <div className="col-sm">
                                    <input type="text" className="form-control" id="inpcodigo" value={inputs.oficina} name="oficina"
                                        placeholder="Ingrese Teléfono" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Teléfono Celular</h5>
                                </div>
                                <div className="col-sm">
                                    <input type="text" className="form-control" id="inpcodigo" value={inputs.celular} name="celular"
                                        placeholder="Ingrese Teléfono" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Fax</h5>
                                </div>
                                <div className="col-sm">
                                    <input type="text" className="form-control" id="inpcodigo" value={inputs.fax} name="fax"
                                        placeholder="Ingrese Fax" />
                                </div>
                            </div>
                            <br />
                            <br />
                            <h4>Información Contacto</h4>
                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <h5> Nombre</h5>
                                </div>
                                <div className="col-sm">
                                    <input type="text" className="form-control" id="inpcodigo" value={inputs.nombre} name="nombre"
                                        placeholder="Ingrese Teléfono" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Teléfono</h5>
                                </div>
                                <div className="col-sm">
                                    <input type="text" className="form-control" id="inpcodigo" value={inputs.telefono} name="telefono"
                                        placeholder="Ingrese Teléfono" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Direccion</h5>
                                </div>
                                <div className="col-sm">
                                    <input type="text" className="form-control" id="inpcodigo" value={inputs.direccion} name="direccion"
                                        placeholder="Ingrese Fax" />
                                </div>
                            </div>
                            <br />
                            <br />

                            <div className="row">
                                <div className="col-sm">
                                    <button value="Submit" type="submit">Submit</button>
                                </div>
                                <div className="col-sm">
                                    <a href="" ><i className="far fa-times-circle fa-3x"></i></a>
                                </div>
                                <div className="col-sm">
                                    <a href="" ><i className="fas fa-broom fa-3x"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
}