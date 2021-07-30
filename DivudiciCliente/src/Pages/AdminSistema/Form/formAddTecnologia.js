import React, { useState } from 'react';
import '../FormEstilos/formAddTecnologia.css'
import { agregarTecnologiaApi } from "../../../Api/Sistema/tecnologia";
import { getConsecuApi, agregarConsecuApi } from "../../../Api/Seguridad/cosnecutivos";
import { notification } from 'antd';
export default function FormAddTecnologia() {
    const [inputs, setInputs] = useState({

        codigo: "",
        nombre: "",
        cantidad: "",
        restaurante: "",
        marca: "",
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

        const result = await agregarTecnologiaApi(inputs);

        var z = inputs.codigo;
        var str = Number(z.slice(4));


        const cod = {

            valor: str,
            prefijo: "TEC-",
            descripcion: "Tecnología",
            tipo: "Tecnología"
        }

        const result2 = agregarConsecuApi(cod);
        if (result.message) {
            notification["error"]({
                message: result.message
            })
        } else {

            notification["success"]({
                message: "Tecnologia Agregada"
            });
            window.location.href = window.location.href;
        }

    }

    const cod = (e) => {
        const prefijo = {

            prefijo: "TEC-"

        }

        var v = 0;
        (async () => {
            const result = await getConsecuApi(prefijo);
            v = result.conse.valor;
            v = v + 1;
            document.getElementById("codPuesto").value = prefijo.prefijo + v;
            inputs.codigo = prefijo.prefijo + v;

        })();

    }

    return (
        <div className="container" id="techContainer">
            <br />
            <h1>Tecnología</h1>

            <div className="container">
                <h3 id="infoEmp">Información</h3><br />
                <form onSubmit={show} onChange={changeForm}>

                    <div className="row">

                        <div className="col-4">
                            <img src="https://cdn.iconscout.com/icon/free/png-256/laptop-1695691-1437204.png"
                                alt="Empleado" id="empLogo" />
                        </div>
                        <div className="col-sm" >

                            <div className="container">
                                <div className="row">
                                    <div className="col-sm empLabel">
                                        <h5>Código</h5>
                                    </div>
                                    <div className="col-sm">
                                        <input type="text" id="codPuesto" disabled className="form-control" />
                                    </div>
                                </div>
                                <br />

                                <div className="row">
                                    <div className="col-sm empLabel">
                                        <div></div>
                                        <h5>Restaurante</h5>
                                    </div>
                                    <div className="col-sm">
                                        <select name="restaurante" onClick={cod} className="form-control" >
                                            <option selected disabled>Restaurantes</option>
                                            <option value="Piccola Stella">Piccola Stella</option>
                                            <option value="Turin Anivo">Turin Anivo</option>
                                            <option value="Notte di Fuoco">Notte di Fuoco</option>

                                        </select>
                                    </div>

                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-sm empLabel">
                                        <h5>Nombre</h5>
                                    </div>
                                    <div className="col-sm">
                                        <input type="text" value={inputs.nombre} name="nombre" id="codPuesto" className="form-control" />
                                    </div>
                                </div>
                                <br />

                                <div className="row">
                                    <div className="col-sm empLabel">
                                        <div></div>
                                        <h5>Marca</h5>
                                    </div>
                                    <div className="col-sm">
                                        <select className="form-control" name="marca" id="SelecRestaurantes">
                                            <option selected disabled>Marcas</option>
                                            <option value="Marca1 "> Marca1</option>
                                            <option value="Marca2 "> Marca2</option>

                                        </select>
                                    </div>

                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-sm empLabel">
                                        <h5>Cantidad</h5>
                                    </div>
                                    <div className="col-sm">
                                        <input type="text" value={inputs.cantidad} name="cantidad" id="codPuesto" className="form-control" />
                                    </div>
                                </div>
                                <br />

                                <div className="row">
                                    <div className="col-sm empLabel">
                                        <div></div>
                                        <h5>Descripción</h5>
                                    </div>
                                    <div className="col-sm">
                                        <textarea value={inputs.descripcion} name="descripcion" cols="21" rows="3" className="form-control textArea" id="descTechInput"></textarea>
                                    </div>

                                </div>


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