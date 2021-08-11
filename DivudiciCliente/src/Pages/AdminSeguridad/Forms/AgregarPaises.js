import React, { useState } from 'react';
import "../FormsEstilos/AgregarPaises.css";
import { agregarPaisApi } from "../../../Api/Seguridad/paises";
import { getConsecuApi, agregarConsecuApi } from "../../../Api/Seguridad/cosnecutivos";
import { notification } from 'antd';
export default function AgregarPaises() {

    const [inputs, setInputs] = useState({

        codigo: "",
        nombre: "",
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

    const fileSelectedHandler = e => {

        const i = document.getElementById("imgPais");
        let y = e.target.files[0];
        i.src = URL.createObjectURL(e.target.files[0]);
        var f;

        async function f2() {
            let reader = new FileReader();

            inputs.foto = await reader.readAsDataURL(y);

        }


        console.log(inputs);

    }

    const show = async e => {

        e.preventDefault();
        console.log(inputs);

        const result = await agregarPaisApi(inputs);

        var z = inputs.codigo;
        var str = Number(z.slice(2));


        const cod = {

            valor: str,
            prefijo: "P-",
            descripcion: "Pais",
            tipo: "Paises"
        }

        const result2 = agregarConsecuApi(cod);

        if (result.message) {
            notification["error"]({
                message: result.message
            })
        } else {

            notification["success"]({
                message: "Licor agregado"

            });
            window.location.href = window.location.href;
        }


    }



    const cod = (e) => {
        const prefijo = {

            prefijo: "P-"

        }

        var v = 0;
        (async () => {
            const result = await getConsecuApi(prefijo);
            v = result.conse.valor;
            v = v + 1;
            document.getElementById("codPais").value = prefijo.prefijo + v;
            inputs.codigo = prefijo.prefijo + v;

        })();
    }

    return (

        <>
            <form onSubmit={show} onChange={changeForm}>
                <div className="container-fluid p-0" id="empContainer">
                    <div className="col-sm m-2 text-center w-100">
                        <h1>Informacion de los Países</h1>
                    </div>
                    <div className="row m-3 w-100">
                        <div className="row m-2 w-100">
                            <div className="col-sm-3">
                                <label for="codPais">Código del Pais</label>
                            </div>
                            <div className="col-lg-6">
                                <input type="text" disabled id="codPais" className="form-control" />
                            </div>
                        </div>
                        <div className="row m-2 w-100">
                            <div className="col-sm-3 ">
                                <label for="nomPais">Nombre del Pais</label>
                            </div>
                            <div className="col-lg-6">
                                <input type="text" id="nomPais" onClick={cod} className="form-control" value={inputs.nombre} name="nombre" />
                            </div>
                        </div>
                        <div className="row m-2 w-100">
                            <div className="col-sm-3">
                                <label for="filePais">Bandera del Pais</label>
                            </div>
                            <div className="col-lg-6">
                                <img src="" id="imgPais" />
                                <label id="addImgPais" name="addImgPais" className="btn btn-danger mt-2">
                                    <input type="file" onChange={fileSelectedHandler} name="fileFoto" id="filePais" />
                                    Agregar Foto
                                </label>
                            </div>
                        </div>
                        <div className="row ml-2 mt-3 w-75" >
                            <div className="col-3 m-2">
                                <button value="Submit" type="submit" className="btn btn-danger">Aceptar</button>
                            </div>
                            <div className="col-3 m-2">
                                <input type="button" value="Cancelar" name="btnCancelarPais" className="btn btn-danger"/>
                            </div>
                            <div className="col-3 m-2">
                                <input type="button" value="Limpiar" name="btnLimpiarPais" className="btn btn-danger"/>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}