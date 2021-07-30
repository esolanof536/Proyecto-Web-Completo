import React, { useState } from 'react';
import "../FormEstilos/addEmpleados.css";
import { getConsecuApi, agregarConsecuApi } from "../../../Api/Seguridad/cosnecutivos";
import { agregarEmpleadoApi } from "../../../Api/empleado";
import { notification } from 'antd';

export default function AddEmpleados() {


    const [inputs, setInputs] = useState({

        codigo: "",
        nombre: "",
        cedula: "",
        pApellido: "",
        sApellido: "",
        telefono1: "",
        telefono2: "",
        puesto: "",
        nacionalidad: "",
        restaurante: "",
        foto: ""

    });

    const changeForm = e => {

        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };


    const show = async e => {

        e.preventDefault();

        const result = await agregarEmpleadoApi(inputs);

        var z = inputs.codigo;
        var str = Number(z.slice(4));


        const cod = {

            valor: str,
            prefijo: "EMP-",
            descripcion: "Empleados",
            tipo: "Empleados"
        }

        const result2 = agregarConsecuApi(cod);
        if (result.message) {
            notification["error"]({
                message: result.message
            })
        } else {
            notification["success"]({
                message: "Empleado agregado"
            });
            window.location.href = window.location.href;
        }

    }

    const cod = (e) => {

        const prefijo = {

            prefijo: "EMP-"

        }

        var v = 0;
        (async () => {
            const result = await getConsecuApi(prefijo);
            v = result.conse.valor;
            v = v + 1;
            document.getElementById("codEmp").value = prefijo.prefijo + v;
            inputs.codigo = prefijo.prefijo + v;

        })();

    }


    return (
        <div className="container" id="empContainer2">
            <br />
            <h1>Empleados</h1>

            <div className="container">
                <h3 id="infoEmp">Información</h3><br />

                <form onSubmit={show} onChange={changeForm}>


                    <div className="row">

                        <div className="col-4">
                            <img src="https://cdn.iconscout.com/icon/free/png-256/best-employee-23-1117676.png" alt="Empleado" id="empLogo" />
                        </div>
                        <div className="col-sm" >

                            <div className="container">
                                <div className="row">
                                    <div className="col-sm empLabel">
                                        <h5>Código</h5>
                                    </div>
                                    <div className="col-sm">
                                        <input type="text" disabled id="codEmp" className="form-control" />
                                    </div>
                                </div>
                                <br />

                                <div className="row">
                                    <div className="col-sm empLabel">
                                        <div></div>
                                        <h5>Nombre</h5>
                                    </div>
                                    <div className="col-sm">
                                        <input type="text" onClick={cod} value={inputs.nombre} name="nombre" id="nomEmple" className="form-control" />
                                    </div>

                                </div>
                                <br />

                                <div className="row">
                                    <div className="col-sm empLabel">
                                        <h5>Cédula</h5>
                                    </div>
                                    <div className="col-sm">
                                        <input type="number" value={inputs.cedula} name="cedula" id="cedEmple" className="form-control" />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-sm">
                                        <h5>Primer Ap.</h5>
                                    </div>
                                    <div className="col-sm">
                                        <input type="text" value={inputs.pApellido} name="pApellido" id="cedEmple" className="form-control" />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-sm">
                                        <h5>Segundo Ap.</h5>
                                    </div>
                                    <div className="col-sm">
                                        <input type="text" value={inputs.sApellido} name="sApellido" className="form-control" />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-sm">
                                        <h5>Teléfono 1</h5>
                                    </div>
                                    <div className="col-sm">
                                        <input type="number" value={inputs.telefono1} name="telefono1" className="form-control" />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-sm">
                                        <h5>Teléfono 2</h5>
                                    </div>
                                    <div className="col-sm">
                                        <input type="number" value={inputs.telefono2} name="telefono2" className="form-control" />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-sm">
                                        <h5>Puesto</h5>
                                    </div>
                                    <div className="col-sm">
                                        <select name="puesto" id="puestoSelect">
                                            <option defaultValue>Puestos</option>
                                            <option value="Puesto A">PuestoA</option>
                                            <option value="Puesto B">PuestoB</option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="container">


                                <div className="row">
                                    <div className="col-sm">
                                        <h5>Imagen</h5>
                                    </div>
                                    <div className="col-sm">
                                        <img src="" alt="" id="empImg" />
                                        <br />
                                        <br />
                                        <input type="file" id="empFile" />
                                        <button>Examinar...</button>
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-sm">
                                        <h5>Restaurante</h5>
                                    </div>
                                    <div className="col-sm">
                                        <select name="restaurante" id="restSelectEmp">
                                            <option defaultValue>Restaurantes</option>
                                            <option value="Piccola Stella">Piccola Stella</option>
                                            <option value="Turin Anivo">Turin Anivo</option>
                                            <option value="Notte di Fuoco">Notte di Fuoco</option>
                                        </select>
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-sm">
                                        <h5>Nacionalidad</h5>
                                    </div>
                                    <div className="col-sm">
                                        <select name="nacionalidad" id="nacionSelectEmp">
                                            <option defaultValue>Nacionalidades</option>
                                            <option value="Tico">Tico</option>
                                            <option value="Nica">Nica</option>
                                        </select>
                                    </div>
                                </div>
                                <br />
                                <br />
                                <br />
                                <br />
                                <div className="row">
                                    <div className="col-sm">
                                        <button value="Submit" type="submit">Submit</button>
                                    </div>
                                    <div className="col-sm">
                                        <a href=""><i className="far fa-times-circle fa-3x"></i></a>
                                    </div>
                                    <div className="col-sm">
                                        <a href=""><i className="fas fa-broom fa-3x"></i></a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
}