import React, { useState } from 'react';
import '../FormEstilos/formAddMarca.css';
import { getConsecuApi, agregarConsecuApi } from "../../../Api/Seguridad/cosnecutivos";
import { agregarMarcaApi } from "../../../Api/Sistema/marcas";
import { notification } from 'antd';

export default function FormAddMarca() {


    const [inputs, setInputs] = useState({

        codigo: "",
        nombre: "",
        nacionalidad: "",
        cedulaJuridica: "",
        nombreEmpesa: "",
        detalleEmpresa: "",
        telefono: "123",
        descripcion: "",
        fotoMarca: "",
        fotoEmpresa: ""

    });



    const changeForm = e => {

        if (e.target.id !== "fileMarca" && e.target.id !== "fileProvee") {

            setInputs({
                ...inputs,
                [e.target.name]: e.target.value
            });

        }
    };


    const fileSelectedHandler = e => {

        const i = document.getElementById("imgMarca");
        const y = e.target.files[0];
        const reader = new FileReader();

        i.src = URL.createObjectURL(e.target.files[0]);

        inputs.fotoMarca = reader.readAsDataURL(y);
        reader.onloadend = function () {

            inputs.fotoMarca = reader.result;
            console.log(reader);

        };
        console.log(inputs);

    }
    const fileSelectedHandler2 = e => {

        const i = document.getElementById("imgProv");
        const y = e.target.files[0];
        const reader2 = new FileReader();

        i.src = URL.createObjectURL(e.target.files[0]);

        inputs.fotoEmpresa = reader2.readAsDataURL(y);

        reader2.onloadend = function () {

            inputs.fotoEmpresa = reader2.result;
            console.log(reader2);

        };
        console.log(inputs);

    }


    const show = async e => {

        e.preventDefault();

        const result = await agregarMarcaApi(inputs);

        var z = inputs.codigo;
        var str = Number(z.slice(2));


        const cod = {

            valor: str,
            prefijo: "M-",
            descripcion: "Marcas",
            tipo: "Marcas"
        }

        const result2 = agregarConsecuApi(cod);
        if (result.message) {
            notification["error"]({
                message: result.message
            })
        } else {

            notification["success"]({
                message: "Marca Agregada"
            });
            window.location.href = window.location.href;
        }
    }

    const cod = (e) => {

        const prefijo = {

            prefijo: "M-"

        }

        var v = 0;
        (async () => {
            const result = await getConsecuApi(prefijo);
            v = result.conse.valor;
            v = v + 1;
            document.getElementById("codMarca").value = prefijo.prefijo + v;
            inputs.codigo = prefijo.prefijo + v;

        })();

    }

    return (
        <div className="container" id="marcaContainer">
            <br />
            <h1>Marcas</h1>

            <div className="container">

                <form onSubmit={show} onChange={changeForm}>

                    <div className="row">

                        <div className="col-4">
                            <img src="https://www.clipartmax.com/png/full/244-2440520_innovative-technology-scroll-to-top-icon.png"
                                alt="" id="logoMarca" />
                            <br />
                            <br />

                        </div>
                        <div className="col-sm" >
                            <h3 id="infoMarca">Información de la Marca</h3><br />
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm">
                                        <div></div>
                                        <h5>Código</h5>
                                    </div>
                                    <div className="col-sm">
                                        <input type="text" disabled id="codMarca" className="form-control marcaTxt" />
                                    </div>
                                </div>
                                <br />

                                <div className="row">
                                    <div className="col-sm">
                                        <div></div>
                                        <h5>Nombre</h5>
                                    </div>
                                    <div className="col-sm">
                                        <input type="text" onClick={cod} value={inputs.nombre} name="nombre" id="nomMarca" className="form-control marcaTxt" />
                                    </div>

                                </div>
                                <br />

                                <div className="row">

                                    <div className="col-sm">
                                        <h5>Nacionalidad</h5>
                                    </div>
                                    <div className="col-sm">
                                        <select name="nacionalidad" id="nacionCB" className="form-control marcaTxt">
                                            <option selected disabled>Nacionalidades</option>
                                            <option value="Nica">Nica </option>
                                            <option value="Tico">Tico </option>
                                        </select>
                                    </div>

                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-sm">
                                        <h5>Descripción</h5>
                                    </div>
                                    <div className="col-sm">
                                        <textarea value={inputs.descripcion} name="descripcion" className="form-control" id="descMarca" cols="12" rows="3" ></textarea>
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-sm">
                                        <h5>Imagen</h5>
                                    </div>
                                    <div className="col-sm">
                                        <img src="" className="marcaTxt" id="imgMarca" />
                                        <br />
                                        <br />
                                        <label id="addImgMarca" name="addImgMarca" className="btn">
                                            <input type="file" id="fileMarca" onChange={fileSelectedHandler} />
                                            Examinar...
                                            </label>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="col-sm">
                            <h3 id="infoProv">Información de Contacto</h3><br />
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm">
                                        <h5>Ced. Jurídica</h5>
                                    </div>
                                    <div className="col-sm">
                                        <input type="text" value={inputs.cedulaJuridica} name="cedulaJuridica" id="cedJu" className="form-control marcaTxt" />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-sm">
                                        <h5>Empresa</h5>
                                    </div>
                                    <div className="col-sm">
                                        <input type="text" value={inputs.nombreEmpesa} name="nombreEmpesa" id="nomEmpre" className="form-control marcaTxt" />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-sm">
                                        <h5>Detalle</h5>
                                    </div>
                                    <div className="col-sm">
                                        <textarea className="form-control" value={inputs.detalleEmpresa} name="detalleEmpresa" id="detalleProv" cols="12" rows="3"></textarea>
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-sm">
                                        <h5>Imagen</h5>
                                    </div>
                                    <div className="col-sm">
                                        <img src="" alt="" className="marcaTxt" id="imgProv" />
                                        <br />
                                        <br />
                                        <label id="addImgProvee" name="addImgProvee" className="btn">
                                            <input type="file" id="fileProvee" onChange={fileSelectedHandler2} />
                                            Examinar...
                                            </label>
                                    </div>
                                </div>

                                <br />
                                <br />
                                <div className="row">
                                    <div className="col-sm">
                                        <button value="Submit" type="submit">Submit</button>
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