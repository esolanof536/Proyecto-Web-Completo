import React, { useState } from 'react';
import "../FormEstilos/addGaseosas.css";
import { agregarBebidaGaseosaApi } from "../../../Api/gaseosa";
import { getConsecuApi, agregarConsecuApi } from "../../../Api/Seguridad/cosnecutivos";
import { notification } from 'antd';
export default function AgregarBebidasGaseosas() {

    const [inputs, setInputs] = useState({

        codigo: "",
        nombre: "",
        nacionalidad: "",
        marca: "",
        precio: "",
        restaurante: "",
        descripcion: "",
        cantidad: "",
        foto: ""

    });


    const changeForm = e => {

        if (e.target.name != "fileFoto") {

            setInputs({
                ...inputs,
                [e.target.name]: e.target.value
            });
        }


    };
    //Insert gaseosa
    const show = async e => {
        e.preventDefault();
        const result = await agregarBebidaGaseosaApi(inputs);
        var z = inputs.codigo;
        var str = Number(z.slice(3));
        const cod = {
            valor: str,
            prefijo: "BG-",
            descripcion: "Bebidas Gaseosas",
            tipo: "Bebidas Gaseosas"
        }
        const result2 = agregarConsecuApi(cod);
        if (result.message) {
            notification["error"]({
                message: result.message
            })
        } else {

            notification["success"]({
                message: "Gaseosa Agregada"
            });
        }
    }
    const fileSelectedHandler = e => {
        const i = document.getElementById("imgAddGas");
        let y = e.target.files[0];
        i.src = URL.createObjectURL(e.target.files[0]);
        var f;
        async function f2() {
            let reader = new FileReader();
            inputs.foto = await reader.readAsDataURL(y);
            console.log(inputs);
        }
    }
    const cod = (e) => {
        const prefijo = {
            prefijo: "BG-"
        }
        var v = 0;
        (async () => {
            const result = await getConsecuApi(prefijo);
            v = result.conse.valor;
            v = v + 1;
            document.getElementById("codBG").value = prefijo.prefijo + v;
            inputs.codigo = prefijo.prefijo + v;
        })();
    }
    return (
        <div className="container bordeGeneralBG">
            <br />
            <h1>Bebidas Gaseosas</h1>
            <br />
            <h3>Informacion</h3>
            <br />
            <form onSubmit={show} onChange={changeForm}>
                <div className="row">
                    <div className="col-3">
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/fast-food-color-line/48/fast_food_pixel_perfect_color_line_icons_7-soda-512.png"
                            alt="Bebidas Gaseosa"
                            id="AddGasLogo"
                        />
                    </div>
                    <div className="col-sm">
                        <div className="row">
                            <div className="col-sm">
                                <div className="row">
                                    <div className="col-sm">
                                        <h5>Código</h5>
                                    </div>
                                    <div className="col-sm">
                                        <input
                                            type="text"
                                            disabled id="codBG"
                                            className="form-control"
                                            placeholder="Ingrese código"
                                        />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-sm">
                                        <h5>Nombre</h5>
                                    </div>
                                    <div className="col-sm">
                                        <input
                                            type="text"
                                            value={inputs.nombre} name="nombre"
                                            className="form-control"
                                            onClick={cod}
                                            placeholder="Ingrese nombre"
                                        />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-sm">
                                        <h5>Marca</h5>
                                    </div>
                                    <div className="col-sm">
                                        <select name="marca" id="marcaSelectGas" className="form-control">
                                            <option selected disabled>Marcas</option>
                                            <option value="Nestle">Nestle</option>
                                            <option value="Bimbo">Bimbo</option>
                                            <option value="Coronado">Coronado</option>
                                        </select>
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-sm">
                                        <h5>Nacionalidad</h5>
                                    </div>
                                    <div className="col-sm">
                                        <select name="nacionalidad" id="nacioSelectGas" className="form-control">
                                            <option selected disabled>Nacionalidades</option>
                                            <option value="Tico">Tico</option>
                                            <option value="Nica">Nica</option>
                                        </select>
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-sm">
                                        <h5>Precio</h5>
                                    </div>
                                    <div className="col-sm">
                                        <input
                                            type="number"
                                            value={inputs.precio} name="precio"
                                            className="form-control"
                                            placeholder="Ingrese precio"
                                        />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-sm">
                                        <h5>Restaurante</h5>
                                    </div>
                                    <div className="col-sm">
                                        <select name="restaurante" id="restauSelectGas" className="form-control">
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
                                        <h5>Cantidad</h5>
                                    </div>
                                    <div className="col-sm">
                                        <input
                                            type="number"
                                            value={inputs.cantidad} name="cantidad"
                                            className="form-control"
                                            placeholder="Ingrese cantidad"
                                        />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-sm">
                                        <h5>Descripción</h5>
                                    </div>
                                    <div className="col-sm">
                                        <textarea
                                            value={inputs.descripcion} name="descripcion"
                                            cols="23"
                                            rows="3"
                                            className="form-control textArea"
                                            id="descAddGas"
                                        ></textarea>
                                    </div>
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="row">
                            <div className="col-sm">
                                <h5>Imagen</h5>
                            </div>
                            <div className="col-sm">
                                <img src="" alt="coca" id="imgAddGas" />
                                <br />
                                <br />
                                <input type="file" onChange={fileSelectedHandler} name="fileFoto" />
                                <br />
                                <br />

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
    );
}
