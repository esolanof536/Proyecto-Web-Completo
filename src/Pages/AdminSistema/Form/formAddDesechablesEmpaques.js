import React, { useState } from 'react';
import '../FormEstilos/formAddDesechablesEmpaques.css'
import { agregarDesechableApi } from "../../../Api/Sistema/desechables";
import { getConsecuApi, agregarConsecuApi } from "../../../Api/Seguridad/cosnecutivos";
import { notification } from 'antd';
export default function FormAddDesechablesEmpaques() {
    

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
        console.log(inputs);

        const result = await agregarDesechableApi(inputs);

        var z = inputs.codigo;
        var str = Number(z.slice(3));


        const cod = {

            valor: str,
            prefijo: "DE-",
            descripcion: "Desechables y Empaques",
            tipo: "Desechables y Empaques"
        }

        const result2 = agregarConsecuApi(cod);
        if (result.message) {
            notification["error"]({
                message: result.message
            })
        } else {

            notification["success"]({
                message: "Desechables y Empaques Agregada"
            });
            window.location.href = window.location.href;
        }
    }

    const cod = (e) => {

        const prefijo = {

            prefijo: "DE-"

        }

        var v = 0;
        (async () => {
            const result = await getConsecuApi(prefijo);
            v = result.conse.valor;
            v = v + 1;
            document.getElementById("codDE").value = prefijo.prefijo + v;
            inputs.codigo = prefijo.prefijo + v;

        })();

    }

    return (
        <div class="container" id="desEmpaContainer">
            <br />
            <h1>Desechables y Empaques</h1>

            <div class="container">
                <form onSubmit={show} onChange={changeForm}>

                    <div class="row">
                        <div class="col-4">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAzFBMVEX//
                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"
                                alt="IconDesEmpa" id="IconDesEmpa" />
                        </div>
                        <div class="col-sm">
                            <div class="container">
                                <br />
                                <h3 id="infoDesEmpa">Información</h3>
                                <br />
                                <div class="row">
                                    <div class="col-sm">
                                        <h5>Código</h5>
                                    </div>
                                    <div class="col-sm">
                                        <input type="text" disabled id="codDE" class="form-control"
                                            placeholder="Ingrese Codigo" />
                                    </div>
                                </div>
                                <br />
                                <div class="row">
                                    <div class="col-sm">
                                        <h5>Restaurante</h5>
                                    </div>
                                    <div class="col-sm">
                                        <select class="form-control" onClick={cod} name="restaurante" id="exampleFormControlSelect1">
                                            <option selected disabled>Restaurantes</option>
                                            <option value="Piccola Stella">Piccola Stella</option>
                                            <option value="Turin Anivo">Turin Anivo</option>
                                            <option value="Notte di Fuoco">Notte di Fuoco</option>

                                        </select>
                                    </div>
                                </div>
                                <br />
                                <div class="row">
                                    <div class="col-sm">
                                        <h5>Nombre</h5>
                                    </div>
                                    <div class="col-sm">
                                        <input type="text" value={inputs.nombre} name="nombre" class="form-control"
                                            placeholder="Ingrese Nombre" />
                                    </div>
                                </div>
                                <br />
                                <div class="row">
                                    <div class="col-sm">
                                        <h5>Marca</h5>
                                    </div>
                                    <div class="col-sm">
                                        <select name="marca" class="form-control" id="SelecRestaurantes">
                                            <option selected disabled>Marcas</option>
                                            <option value="Marca1">Marca1</option>
                                            <option value="Marca2">Marca2</option>
                                            <option value="Marca2">Marca3</option>

                                        </select>
                                    </div>
                                </div>
                                <br />
                                <div class="row">
                                    <div class="col-sm">
                                        <h5>Cantidad</h5>
                                    </div>
                                    <div class="col-sm">
                                        <input type="text" value={inputs.cantidad} name="cantidad" class="form-control" id="inpcodigo" aria-describedby="emailHelp"
                                            placeholder="Ingrese Cantidad" />
                                    </div>
                                </div>
                                <br />
                                <div class="row">
                                    <div class="col-sm">
                                        <h5>Descripción</h5>
                                    </div>
                                    <div class="col-sm">
                                        <textarea value={inputs.descripcion} name="descripcion" class="form-control" id="TextADescripcion" rows="3"></textarea>
                                    </div>
                                </div>
                                <br />

                                <div class="row">
                                    <div class="col-sm">
                                        <button value="Submit" type="submit">Submit</button>

                                    </div>
                                    <div class="col-sm">
                                        <a><i class="far fa-times-circle fa-3x"></i></a>
                                    </div>
                                    <div class="col-sm">
                                        <a><i class="fas fa-broom fa-3x"></i></a>
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