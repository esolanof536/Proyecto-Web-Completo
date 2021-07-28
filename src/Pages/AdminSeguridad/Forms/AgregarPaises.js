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
                <div className="container" id="empContainer">
                    <br />
                    <h1>Países</h1>

                    <div className="container">
                        <h3 id="infoEmp">Información</h3><br />
                        <div className="row">

                            <div className="col-4">
                                <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" alt="Empleado" id="empLogo" />
                            </div>
                            <div className="col-sm" >

                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm empLabel">
                                            <h5>Código</h5>
                                        </div>
                                        <div className="col-sm">
                                            <input type="text" disabled id="codPais" className="form-control" />
                                        </div>
                                    </div>
                                    <br />

                                    <div className="row">
                                        <div className="col-sm empLabel">
                                            <div></div>
                                            <h5>Nombre</h5>
                                        </div>
                                        <div className="col-sm">
                                            <input type="text" id="nomPais" onClick={cod} className="form-control" value={inputs.nombre} name="nombre" />
                                        </div>

                                    </div>

                                    <br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <h5>Imagen</h5>
                                        </div>
                                        <div className="col-sm">
                                            <img src="" id="imgPais" />
                                            <br />
                                            <br />
                                            <label id="addImgPais" name="addImgPais" className="btn">
                                                <input type="file" onChange={fileSelectedHandler} name="fileFoto" id="filePais" />
                                            Examinar
                                            </label>
                                        </div>
                                    </div>
                                    <br />
                                    <br />
                                    <br />
                                    <div className="row">
                                        <div className="col-sm">
                                            <button value="Submit" type="submit">Submit</button>
                                        </div>
                                        <div className="col-sm">
                                            <input type="button" value="Cancelar" name="btnCancelarPais" />
                                        </div>
                                        <div className="col-sm">
                                            <input type="button" value="Limpiar" name="btnLimpiarPais" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </>

    )

}