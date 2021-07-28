import React, { useState } from 'react';
import '../FormEstilos/formAddEquiposUtencilios.css'
import { agregarEquiposApi } from "../../../Api/Sistema/equipos";
import { getConsecuApi, agregarConsecuApi } from "../../../Api/Seguridad/cosnecutivos";
import { notification } from 'antd';
export default function FormAddEquiposUtencilios() {



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

        const result = await  agregarEquiposApi(inputs);

        var z = inputs.codigo;
        var str = Number(z.slice(3));


        const cod = {

            valor: str,
            prefijo: "EU-",
            descripcion: "Equipos y Utensilios",
            tipo: "Equipos y Utensilios"
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

            prefijo: "EU-"

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
        <div className="container" id="equiUtenContainer">
            <br />
            <h1>Equipos y Utensilios</h1>

            <div className="container">
                <form onSubmit={show} onChange={changeForm}>

                    <div className="row">
                        <div className="col-4">
                            <img src="https://image.flaticon.com/icons/png/512/26/26253.png"
                                alt="IconBook" id="iconEquiUten" />

                        </div>
                        <div className="col-sm">
                            <br />
                            <h3 id="equiUtenInfo">Información</h3>
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
                                <div className="col-sm">
                                    <h5>Nombre</h5>
                                </div>
                                <div className="col-sm">
                                    <input type="text" className="form-control" id="inpcodigo" value={inputs.nombre} name="nombre"
                                        placeholder="Ingrese Nombre" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm">
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
                                <div className="col-sm">
                                    <h5>Cantidad</h5>
                                </div>
                                <div className="col-sm">
                                    <input type="text" className="form-control" id="inpcodigo" value={inputs.cantidad} name="cantidad"
                                        placeholder="Ingrese Cantidad" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Descripción</h5>
                                </div>
                                <div className="col-sm">
                                    <textarea className="form-control" id="TextADescripcion" value={inputs.descripcion} name="descripcion" rows="3"></textarea>
                                </div>
                            </div>
                            <br />

                            <div className="row">
                                <div className="col-sm">
                                    <button value="Submit" type="submit">Submit</button>

                                </div>
                                <div className="col-sm">
                                    <a><i className="far fa-times-circle fa-3x"></i></a>
                                </div>
                                <div className="col-sm">
                                    <a><i className="fas fa-broom fa-3x"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>

    );
}