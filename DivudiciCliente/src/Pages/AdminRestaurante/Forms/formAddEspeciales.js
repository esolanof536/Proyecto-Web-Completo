import React, { useState } from 'react';
import "../FormEstilos/addEspeciales.css";
import { agregarEspecialApi } from "../../../Api/especiales";
import { getConsecuApi, agregarConsecuApi } from "../../../Api/Seguridad/cosnecutivos";
import { notification } from 'antd';
export default function AddEspeciales() {



    const [inputs, setInputs] = useState({

        codigo: "",
        nombre: "",
        ingrediente: "",
        precio: "",
        detalle: "",
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

        const result = await agregarEspecialApi(inputs);

        var z = inputs.codigo;
        var str = Number(z.slice(4));


        const cod = {

            valor: str,
            prefijo: "ESP-",
            descripcion: "Especiales",
            tipo: "Especiales"
        }

        const result2 = agregarConsecuApi(cod);
        if (result.message) {
            notification["error"]({
                message: result.message
            })
        } else {
            notification["success"]({
                message: "Especialidad agregada"
            });
            window.location.href = window.location.href;
        }
    }

    const cod = (e) => {

        const prefijo = {

            prefijo: "ESP-"

        }

        var v = 0;
        (async () => {
            const result = await getConsecuApi(prefijo);
            v = result.conse.valor;
            v = v + 1;
            document.getElementById("codEsp").value = prefijo.prefijo + v;
            inputs.codigo = prefijo.prefijo + v;

        })();

    }

    return (
        <form onSubmit={show} onChange={changeForm}>
            <div className="container" id="espContainer">
                <br />
                <h1>Especialidades</h1>


                <div className="row">
                    <div className="col-4">
                        <img src="https://cdn0.iconfinder.com/data/icons/kitchen-utensils-33/24/food-kitchen-utensils-fork-spoon-512.png" alt="Especial" id="logoEsp" />
                        <br />
                        <br />
                        <br />

                    </div>
                    <div className="col-sm" >
                        <h3 id="infoEsp">Información</h3><br />
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    <div></div>
                                    <h5>Código</h5>
                                </div>
                                <div className="col-sm">
                                    <input name ='codigo'type="text" disabled id="codEsp" className="form-control" />
                                </div>
                            </div>
                            <br />

                            <div className="row">
                                <div className="col-sm">
                                    <div></div>
                                    <h5>Nombre Platillo</h5>
                                </div>
                                <div className="col-sm">
                                    <input type="text" value={inputs.nombre} onClick={cod} name="nombre" id="nomEsp" className="form-control" />
                                </div>

                            </div>
                            <br />

                            <div className="row">

                                <div className="col-sm">
                                    <h5>Ingredientes</h5>
                                </div>


                                <div className="col-sm">
                                    <textarea value={inputs.ingrediente} name="ingrediente" id="ingreEspe" className="form-control textAreaEsp" cols="21" rows="3"></textarea>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Precio</h5>
                                </div>
                                <div className="col-sm">
                                    <input type="text" value={inputs.precio} name="precio" className="form-control" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Detalle</h5>
                                </div>
                                <div className="col-sm">
                                    <textarea value={inputs.detalle} name="detalle" id="detalleEspe" className="form-control textAreaEsp" cols="21" rows="3"></textarea>
                                </div>
                            </div>
                            <br />
                            <input type="file" />
                            <br />

                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="container">
                            <div className="row imageAddEspContainer">
                                <div className="col-sm">
                                    <h5 id="">Imagen</h5>
                                </div>
                                <div className="col-sm">
                                    <img src="" id="imgEsp" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <button value="Submit" type="submit" id="submitAddEsp">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </form>

    );
}