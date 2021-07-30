import React, { useState } from 'react';
import "../FormEstilos/BebidasHeladas.css";
import { agregarBebidaHeladaApi } from "../../../Api/bebidaHelada";
import { getConsecuApi, agregarConsecuApi } from "../../../Api/Seguridad/cosnecutivos";
import { notification } from 'antd';

export default function AgregarBebidasHeladas() {

    const [inputs, setInputs] = useState({

        codigo: "",
        nombre: "",
        ingredientes: "",
        precio: "",
        restaurante: "",
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

        const result = await agregarBebidaHeladaApi(inputs);

        var z = inputs.codigo;
        var str = Number(z.slice(3));


        const cod = {

            valor: str,
            prefijo: "BH-",
            descripcion: "Bebidas Heladas",
            tipo: "Bebidas Heladas"
        }

        const result2 = agregarConsecuApi(cod);
        if (result.message) {
            notification["error"]({
                message: result.message
            })
        } else {

            notification["success"]({
                message: "Bebica Helada agregada"
            });
        }
        window.location.href = window.location.href;

    }

    const cod = (e) => {

        const prefijo = {

            prefijo: "BH-"

        }

        var v = 0;
        (async () => {
            const result = await getConsecuApi(prefijo);
            v = result.conse.valor;
            v = v + 1;
            document.getElementById("codBH").value = prefijo.prefijo + v;
            inputs.codigo = prefijo.prefijo + v;

        })();

    }

    return (

        <>
            <script src="https://kit.fontawesome.com/fdf10fb395.js" crossOrigin="anonymous"></script>

            <div className="container bordeGeneralBH">
                <br />
                <h1>Bebidas Frías</h1>
                <br />
                <h3 id="BHelInfo">Informacion</h3>
                <br />
                <form onSubmit={show} onChange={changeForm}>

                    <div className="row">
                        <div className="col-3">
                            <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/lemonade_glass.png" alt="Bebidas Caliente" id="iconBHel" />
                        </div>
                        <div className="col-sm">
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Código</h5>
                                </div>
                                <div className="col-sm">
                                    <input type="text" disabled id="codBH" className="form-control" placeholder="Ingrese código" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Nombre</h5>
                                </div>
                                <div className="col-sm">
                                    <input type="text" onClick={cod} value={inputs.nombre} name="nombre" className="form-control" placeholder="Ingrese nombre" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Ingredientes</h5>
                                </div>
                                <div className="col-sm">
                                    <textarea value={inputs.ingredientes} name="ingredientes" cols="23" rows="3" className="form-control textArea" id="ingreBebHelInput" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Precio</h5>
                                </div>
                                <div className="col-sm">
                                    <input type="number" value={inputs.precio} name="precio" className="form-control" placeholder="Ingrese Precio" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Restaurante</h5>
                                </div>
                                <div className="col-sm">
                                    <select name="restaurante" className="form-control">
                                        <option selected disabled>Seleccione Rest</option>
                                        <option value="Piccola Stella">Piccola Stella</option>
                                        <option value="Turin Anivo">Turin Anivo</option>
                                        <option value="Notte di Fuoco">Notte di Fuoco</option>
                                    </select>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Descripción</h5>
                                </div>
                                <div className="col-sm">
                                    <textarea value={inputs.descripcion} name="descripcion" cols="23" rows="3" className="form-control textArea" id="descBebHelInput"></textarea>
                                </div>
                            </div>

                        </div>
                        <div className="col-sm">
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Imagen</h5>
                                </div>
                                <div className="col-sm">
                                    <img src="" alt="" id="imgBHel" />
                                    <input type="file" id="fileHela" />
                                    <br /><br />
                                    <button id="findH">Examinar...</button>
                                </div>
                            </div>
                            <div className="row" >
                                <div className="col-sm">

                                    <button value="Submit" type="submit">Submit</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}
