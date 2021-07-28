import React, { useState } from 'react';
import "../FormEstilos/addMesa.css";
import { agregarMesasApi } from "../../../Api/mesas";
import { getConsecuApi, agregarConsecuApi } from "../../../Api/Seguridad/cosnecutivos";
import { notification } from 'antd';

export default function FormAddMesa() {


    const [inputs, setInputs] = useState({

        codigo: "",
        nombre: "",
        numero: "",
        cantSillas: "",
        restaurante: ""

    });

    const changeForm = e => {

        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const show = async e => {

        e.preventDefault();

        const result = await agregarMesasApi(inputs);

        var z = inputs.codigo;
        var str = Number(z.slice(3));


        const cod = {

            valor: str,
            prefijo: "ME-",
            descripcion: "Mesas",
            tipo: "Mesas"
        }

        const result2 = agregarConsecuApi(cod);
        if (result.message) {
            notification["error"]({
                message: result.message
            })
        } else {

            notification["success"]({
                message: "Mesa Agregada"
            });

        }
        window.location.href = window.location.href;


    }

    const cod = (e) => {

        const prefijo = {

            prefijo: "ME-"

        }

        var v = 0;
        (async () => {
            const result = await getConsecuApi(prefijo);
            v = result.conse.valor;
            v = v + 1;
            document.getElementById("codMesa").value = prefijo.prefijo + v;
            inputs.codigo = prefijo.prefijo + v;

        })();

    }


    return (

        <div className="container bordeGeneralMesa" >
            <br />
            <h1>Mesas</h1>
            <br />
            <h3 id="MesaInfo">Informacion</h3>
            <br />
            <form onSubmit={show} onChange={changeForm}>
                <div className="row">
                    <div className="col-4">
                        <img src="https://jinengbalivilla.files.wordpress.com/2018/12/15039058354834.png" alt="Bebidas Gaseosa" id="iconMesa" />
                    </div>
                    <div className="col-sm">
                        <div className="row">
                            <div className="col-sm">
                                <div className="row">
                                    <div className="col-4">
                                        <h5>Código</h5>
                                    </div>
                                    <div className="col-sm">
                                        <input type="text" disabled id="codMesa" className="form-control" placeholder="Ingrese código" />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-4">
                                        <h5>Nombre</h5>
                                    </div>
                                    <div className="col-sm">
                                        <input type="text" value={inputs.nombre} onClick={cod} name="nombre" className="form-control" placeholder="Ingrese nombre" />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-4">
                                        <h5>Número</h5>
                                    </div>
                                    <div className="col-sm">
                                        <input type="number" value={inputs.numero} name="numero" className="form-control" placeholder="Ingrese número" />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-4">
                                        <h5>Cantidad Silla</h5>
                                    </div>
                                    <div className="col-sm">
                                        <input type="number" value={inputs.cantSillas} name="cantSillas" className="form-control" placeholder="Ingrese cantidad" />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-4">
                                        <h5>Restaurante</h5>
                                    </div>
                                    <div className="col-sm">
                                        <select name="restaurante" className="form-control">

                                            <option value="DEFAULT" disabled>Seleccione Rest</option>
                                            <option value="Piccola Stella">Piccola Stella</option>
                                            <option value="Turin Anivo">Turin Anivo</option>
                                            <option value="Notte di Fuoco">Notte di Fuoco</option>

                                        </select>
                                    </div>
                                </div>
                                <br />
                                <div className="row" >
                                    <button value="Submit" type="submit">Submit</button>

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

                </div>
            </form>

        </div>


    );
}